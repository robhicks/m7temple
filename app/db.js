import {router} from './app-router/app-router.js';
import {user} from './user.js';
const socket = socketCluster.connect();

const updateDbChannel = socket.subscribe('updateDbChannel');

const idbAdapter = new LokiIndexedAdapter('loki');
const db = new loki('m7temple.db', {
  autosave: true,
  autosaveInterval: 10000, // 10 seconds
  adapter: idbAdapter,
  disableChangesApi: false
});

let awards = db.getCollection('awards') || db.addCollection('awards');
let skills = db.getCollection('skills') || db.addCollection('skills');
let users = db.getCollection('users') || db.addCollection('users');

function changeHandler() {
  // console.log("changeHandler");
  let changes = JSON.parse(db.serializeChanges());
  // console.log("changes", changes);
  if (changes) updateDbChannel.publish(JSON.stringify(changes), (err) => {
    if (err) console.error("err", err);
    if (!err) db.clearChanges();
    db.clearChanges();
  });
}

function updateDb(db, changes) {
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

socket.on('connect', function (status) {
  socket.emit('loadDatabase');
  socket.on('loadDatabase', (data) => {
    db.loadJSON(data);
    awards = db.getCollection('awards');
    skills = db.getCollection('skills');
    users = db.getCollection('users');
    awards.on(['insert', 'update', 'delete'], changeHandler);
    skills.on(['insert', 'update', 'delete'], changeHandler);
    users.on(['insert', 'update', 'delete'], changeHandler);
  });
});

updateDbChannel.watch((data) => {
  let changes = JSON.parse(data);
  console.log("updateDbChannel::changes", changes)
  if (Array.isArray(changes)) updateDb(db, changes);
  db.clearChanges();
});


export {awards, skills, socket, users};
