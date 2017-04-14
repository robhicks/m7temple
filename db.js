const Loki = require('./node_modules/lokijs/src/lokijs.js');
const Lfsa = require('./node_modules/lokijs/src/loki-fs-structured-adapter.js');
const db = new Loki('m7temple.json', {
  // adapter: new Lfsa(),
  autoload: true,
  autosave: true,
  autosaveInterval: 5000,
  disableChangesApi: false,
  env: 'NODEJS',
  throttledSaves: true,
  verbose: true
});

const users = db.addCollection('users');
const skills = db.addCollection('skills');
const awards = db.addCollection('awards');

function updateDb(db, changes) {
  console.log("changes", changes)
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
      if (change.operation === 'U' && doc) coll.update(change.obj);
    });
  } catch (err) {
    console.error("err", err);
  }
}

module.exports.awards = awards;
module.exports.db = db;
module.exports.skills = skills;
module.exports.users = users;
module.exports.updateDb = updateDb;
