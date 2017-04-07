const Loki = require('./node_modules/lokijs/src/lokijs.js');
const Lfsa = require('./node_modules/lokijs/src/loki-fs-structured-adapter.js');
const db = new Loki('m7temple.json', {
  env: 'NODEJS',
  // adapter: new Lfsa(),
  autosave: true,
  autosaveInterval: 10000,
  autoload: true,
  throttledSaves: true
});

const users = db.addCollection('users', {disableChangesApi: false});
const skills = db.addCollection('skills', {disableChangesApi: false});
const awards = db.addCollection('awards', {disableChangesApi: false});

module.exports.awards = awards;
module.exports.db = db;
module.exports.skills = skills;
module.exports.users = users;
