const db = require('./db').db;
const express = require("express");
const join = require('path').join;
const logger = require('morgan');
const path = require('path');
const users = require('./db').users;
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

  let outgoingDbChannel = scServer.exchange.subscribe('fromServerDbChannel'); // outbound
  let updateDbChannel = scServer.exchange.subscribe('updateDbChannel'); // inbound

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(logger('dev'));
  app.use(express.static('public'));
  app.use(express.static('node_modules'));

  app.get('*', (req, res, next) => {
    res.render('index');
  });

  httpServer.on('request', app);

  scServer.on('connection', (socket) => {
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
        let user = users.findOne({email: data.email}) || users.insertOne(rec);
        // console.log("user", user);
        socket.setAuthToken({user});
        respond();
      }
    });

    socket.on('loadDatabase', () => {
      socket.emit('loadDatabase', db.serialize());
    });

    socket.on('logout', (data) => {
      // console.log("data", data)
      socket.deauthenticate();
    });
  });

  updateDbChannel.watch((data) => {
    let changes = JSON.parse(data);
    // console.log("updateDbChannel:::changes", changes);
    if (Array.isArray(changes)) updateDb(db, changes);
    db.clearChanges();
  });

};
