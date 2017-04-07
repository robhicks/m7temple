const argv = require('minimist')(process.argv.slice(2));
const SocketCluster = require('socketcluster').SocketCluster;
const util = require('util');


const socketCluster = new SocketCluster({
  workers: Number(argv.w) || 1,
  brokers: Number(argv.b) || 1,
  port: Number(argv.p) || 5000,
  authKey: 'todo',
  appName: argv.n || null,
  workerController: __dirname + '/worker.js',
  brokerController: __dirname + '/broker.js',
  socketChannelLimit: 100,
  rebootWorkerOnCrash: argv['auto-reboot'] !== false,
  pingTimeout: 5000,
  pingInterval: 2000
});
