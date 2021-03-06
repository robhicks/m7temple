const Loki = require('./node_modules/lokijs/src/lokijs.js');
const Lfsa = require('./node_modules/lokijs/src/loki-fs-structured-adapter.js');
const LokiRedisAdapter = require('loki-redis-adapter');
const join = require('path').join;

const db = new Loki('m7temple.db', {
  // adapter: new Lfsa(),
  adapter: process.env.TARGET_ENV === 'prod' ? new LokiRedisAdapter(process.env.REDISCLOUD_URL) : new LokiRedisAdapter(),
  autoload: true,
  autosave: true,
  autosaveInterval: 5000,
  env: 'NODEJS',
  autoloadCallback: loadHandler,
  throttledSaves: true,
  verbose: true
});

function loadHandler() {
  if (!db.getCollection('awards')) db.addCollection('awards');
  if (!db.getCollection('tickets')) db.addCollection('tickets');
  if (!db.getCollection('gifts')) db.addCollection('gifts');
  if (!db.getCollection('users')) db.addCollection('users');
}

let awards = {}, gifts = {}, users = {};

// db.on('loaded', () => {
//   awards = db.getCollection('awards');
//   gifts = db.getCollection('gifts');
//   users = db.getCollection('users');
// });

function updateDb(db, changes) {
  // console.log("changes", changes)
  try {
    changes.forEach((change) => {
      let coll = db.getCollection(change.name);
      let id = change.obj.$loki;
      let doc = coll.get(id);
      // console.log("doc", doc);
      // console.log("change.obj", change.obj);
      // console.log("coll.find()", coll.find())
      if (change.operation === 'I' && !doc) {
        delete change.obj.$loki;
        delete change.obj.meta;
        coll.insertOne(change.obj);
      }
      if (change.operation === 'R') coll.findAndRemove({$loki: change.obj.$loki});
      if (change.operation === 'U' && doc) coll.update(change.obj);
    });
  } catch (err) {
    console.error("err", err);
  }
}

function getUsers() {
  // console.log("users", users);
  let _users = db.getCollection('users');
  return Promise.resolve(_users);
}

// module.exports.awards = awards;
module.exports.db = db;
module.exports.updateDb = updateDb;
module.exports.getUsers = getUsers;
