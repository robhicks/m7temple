let awards, skills, users;
let socket = socketCluster.connect();
let outgoingDbChannel = socket.subscribe('toServerDbChannel');
let incomingDbChannel = socket.subscribe('fromServerDbChannel');

outgoingDbChannel.waitForAuth = true;

const idbAdapter = new LokiIndexedAdapter('loki');
const db = new loki('m7temple.db', {
  autosave: true,
  autosaveInterval: 10000, // 10 seconds
  adapter: idbAdapter,
  disableChangesApi: false
});

function loadHandler() {
  awards = db.getCollection('awards');
  skills = db.getCollection('skills');
  users = db.getCollection('ussers');
  if (!awards) awards = db.addCollection('awards');
  if (!skills) skills = db.addCollection('skills');
  if (!users) users = db.addCollection('users');
}

export {awards, skills, socket, users};

socket.on('connect', function () {
  socket.emit('loadDatabase', (err) => console.log("err", err));
});

socket.on('loadDatabase', (data, err) => {
  if (data) db.loadJSON(data);
  console.log("db loaded", db)
})

db.on('changes', () => {
  let changes = db.serializeChanges();
  console.log("client:::changes", changes)
  if (changes) outgoingDbChannel.publish(changes, (err) => {
    if (!err) db.clearChanges();
  });
});

incomingDbChannel.watch((data) => {
  let changes = JSON.parse(data);
  console.log("dbSyncFromServerChannel:::changes", changes)
});
