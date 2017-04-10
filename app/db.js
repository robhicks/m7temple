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
  user.getUser().then((_user) => {
    let changes = JSON.parse(db.serializeChanges())
      .filter((change) => change.operation !== 'I' && change.obj.email === _user.email);
    // console.log("changes", changes);
    if (changes) updateDbChannel.publish(JSON.stringify(changes), (err) => {
      if (err) console.error("err", err);
      if (!err) db.clearChanges();
      db.clearChanges();
    });
  });
}

function updateDb(db, changes) {
  try {
    changes.forEach((change) => {
      let coll = db.getCollection(change.name);
      if (change.operation === 'I') coll.insertOne(change.obj);
      if (change.operation === 'D') coll.findAndRemove({$loki: change.obj.$loki});
      if (change.operation === 'U') {
        let doc = coll.findOne({$loki: change.obj.$loki});
        // console.log("doc", doc)
        // console.log("JSON.stringify(doc) !== JSON.stringify(change.obj))", JSON.stringify(doc) !== JSON.stringify(change.obj))
        if (doc && JSON.stringify(doc) !== JSON.stringify(change.obj)) coll.update(change.obj);
      }
      console.log('dispatching event: ', change.name + 'Changed');
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
    awards.on(['add', 'update', 'delete'], changeHandler);
    skills.on(['add', 'update', 'delete'], changeHandler);
    users.on(['add', 'update', 'delete'], changeHandler);
  });
});

updateDbChannel.watch((data) => {
  let changes = JSON.parse(data);
  // console.log("changes", changes)
  if (Array.isArray(changes)) updateDb(db, changes);
  db.clearChanges();
});


export {awards, skills, socket, users};
