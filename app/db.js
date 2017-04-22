const socket = socketCluster.connect();

import {router} from './app-router/app-router.js';
import {user} from './user.js';

// const idbAdapter = new LokiIndexedAdapter('loki');
const db = new loki('m7temple.db', {autosave: true});

let updateDbChannel = socket.subscribe('updateDbChannel');
let userAddedChannel = socket.subscribe('userAddedChannel');

function changeHandler() {
  // console.log("changeHandler");
  let changes = JSON.parse(db.serializeChanges());
  // console.log('changeHandler:changes', changes);
  if (changes && socket.authState === 'authenticated') updateDbChannel.publish(JSON.stringify(changes), (err) => {
    if (err) console.error("err", err);
    if (!err) db.clearChanges();
    db.clearChanges();
  });
}

function updateDb(db, changes) {
  // console.log("updateDb:changes", changes)
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
      if (change.operation === 'D') coll.findAndRemove({$loki: change.obj.$loki});
      if (change.operation === 'U') {
        let dt = JSON.parse(JSON.stringify(doc));
        let ct = JSON.parse(JSON.stringify(change.obj));
        delete dt.$loki;
        delete ct.$loki;
        delete dt.meta;
        delete ct.meta;
        if (JSON.stringify(dt) !== JSON.stringify(ct)) coll.update(change.obj);
      }
      document.dispatchEvent(new CustomEvent(change.name + 'Changed'));
    });
  } catch (err) {
    console.error("err", err);
  }
}

db.loadDb = (req, evt, next) => {
  if (db.loaded) return next();
  // console.log('getting db');
  socket.emit('loadDatabase');

  socket.on('loadDatabase', (data) => {
    db.loadJSON(data, {disableChangesApi: false});
    let awards = db.getCollection('awards');
    let skills = db.getCollection('skills');
    let tickets = db.getCollection('tickets');
    let users = db.getCollection('users');
    awards.on(['insert', 'update', 'delete'], changeHandler);
    skills.on(['insert', 'update', 'delete'], changeHandler);
    tickets.on(['insert', 'update', 'delete'], changeHandler);
    users.on(['insert', 'update', 'delete'], changeHandler);
    db.loaded = true;
    // console.log('database loaded');
    next();
  });
};


userAddedChannel.watch((data) => {
  // console.log("data", data);
  let users = db.getCollection('users');
  users.setChangesApi(false);
  let usr = users.findOne({email: data.email});
  if (!usr) {
    delete data.$loki;
    delete data.meta;
    users.insertOne(data);
    document.dispatchEvent(new CustomEvent('usersChanged'));
  }
});

updateDbChannel.watch((data) => {
  let changes = JSON.parse(data);
  // console.log("socket", socket)
  // console.log("updateDbChannel::changes", changes);
  if (socket.authState === 'authenticated' && Array.isArray(changes)) updateDb(db, changes);
  db.clearChanges();
});

export {db};
