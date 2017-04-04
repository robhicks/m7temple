module.exports.run = (worker) => {
  console.info('   >> Worker PID:', process.pid);
  const express = require("express");
  const grant = require('grant-express');
  const session = require('express-session');

  const app = module.exports = express();
  const httpServer = worker.httpServer;
  const scServer = worker.scServer;

  app.use(session({secret: grant}));
  app.use(grant);

  httpServer.on('request', app);

};
