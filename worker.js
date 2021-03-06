const db = require('./db').db;
const emailer = require('./emailer');
const express = require("express");
const getUsers = require('./db').getUsers;
const join = require('path').join;
const logger = require('morgan');
const path = require('path');
const updateDb = require('./db.js').updateDb;
const util = require('util');

module.exports.run = (worker) => {
  console.info('   >> Worker PID:', process.pid);

  const app = express();
  if (process.env.TARGET_ENV !== 'prod') {
    const lrl = require('express-livereload');
    lrl(app, {watchDir: join(process.cwd(), 'public')});
  }
  const httpServer = worker.httpServer;
  const scServer = worker.scServer;

  let updateDbChannel = scServer.exchange.subscribe('updateDbChannel'); // inbound
  let userAddedChannel = scServer.exchange.subscribe('userAddedChannel'); // outbound

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(logger('dev'));
  app.use(express.static('public'));
  app.use(express.static('node_modules'));

  app.get('*', (req, res, next) => {
    res.render('index', {env: {
      TARGET_ENV: process.env.TARGET_ENV,
      FACEBOOK_KEY: process.env.FACEBOOK_KEY,
      GITHUB_KEY: process.env.GITHUB_KEY,
      GOOGLE_KEY: process.env.GOOGLE_KEY,
      TWITTER_KEY: process.env.TWITTER_KEY,
      REDIRECT_URL: process.env.REDIRECT_URL
    }});
  });

  httpServer.on('request', app);

  scServer.on('connection', (socket) => {
    // console.log("socket.authToken", socket.authToken)
    socket.on('auth', (data, respond) => {
      // console.log("data", data)
      if (!data || !data.id || !data.email) respond('Authentication failed');
      else {
        let rec = {
          displayName: data.displayName,
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          name: data.name,
          id: data.id
        };
        getUsers().then((users) => {
          // console.log("users", users)
          let user = users.findOne({email: data.email});
          if (!user) {
            console.log('adding user and publishing change');
             user = users.insertOne(rec);
             if (user) userAddedChannel.publish(user);
          }
          socket.setAuthToken({user});
          respond();
        });
      }
    });

    socket.on('loadDatabase', () => {
      socket.emit('loadDatabase', db.serialize());
    });

    socket.on('sendEmail', (data) => emailer(data));

    socket.on('logout', (data) => {
      // console.log("data", data)
      socket.deauthenticate();
    });
  });

  updateDbChannel.watch((data) => {
    let changes = JSON.parse(data);
    console.log("updateDbChannel:::changes", changes);
    if (Array.isArray(changes)) updateDb(db, changes);
    db.clearChanges();
  });

};
