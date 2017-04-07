const express = require("express");
const logger = require('morgan');
const lrl = require('express-livereload');
const path = require('path');
const join = path.join;
const users = require('./db').users;
const db = require('./db').db;
const util = require('util');

module.exports.run = (worker) => {
  console.info('   >> Worker PID:', process.pid);

  const app = express();
  if (process.env.NODE_ENV !== 'prod') lrl(app, {watchDir: join(process.cwd(), 'public')});
  const httpServer = worker.httpServer;
  const scServer = worker.scServer;

  let outgoingDbChannel = scServer.exchange.subscribe('fromServerDbChannel'); // outbound
  let incomingDbChannel = scServer.exchange.subscribe('toServerDbChannel'); // inbound

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
        let user = users.findOne({email: data.email});
        if (user) users.update(Object.assign(user, data));
        else user = users.insertOne(data);
        console.log("user", user);
        socket.setAuthToken({email: user.email});
        respond();
      }
    });

    socket.on('loadDatabase', () => {
      socket.emit('loadDatabase', db.serialize());
    });
    
  });

  db.on('changes', () => {
    let changes = db.serializeChanges();
    console.log("server:::changes", changes)
    if (changes) outgoingDbChannel.publish(changes, (err) => {
      if (!err) db.clearChanges();
    });
  });

  incomingDbChannel.watch((data) => {
    let changes = JSON.parse(data);
    console.log("incomingDbChannel:::changes", changes)
  })

};
