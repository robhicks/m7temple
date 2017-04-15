const socket = socketCluster.connect();
import {router} from './app-router/app-router.js';
import {RbhModal} from './rbh-modal/rbh-modal.js';
import {users} from './db.js';

const userAuthenticated = new CustomEvent('userAuthenticated');
const userUnauthenticated = new CustomEvent('userUnauthenticated');

let user = {
  authenticated: false,
  initialized: false
};

hello.init({
  facebook: '571949036329751',
  github: 'eadbc2a3055a055d3e87',
  google: '114775485033-r2ngahga742gran257rt7s0cbag7n8hg.apps.googleusercontent.com',
  twitter: 'Aam3NrtcT0K8TjbgXdTOM8fQM'
}, {
  redirect_uri: 'http://localhost:5000/oauth2callback',
  scope: 'email'
});

hello.on('auth.login', (auth) => {
  // console.log("auth", auth)
  hello(auth.network).api('me')
  .then((r) => {
    // console.log("r", r);
    if (socket.authState !== 'authenticated') socket.emit('auth', r);
    if ((/.+\/login/).test(window.location.href)) router.navigate('/home/authenticated');
  }, (err) => {
    let modal = new RbhModal();
    modal.heading = 'Authentication Provider Error';
    modal.body = err;
    modal.primary = 'OK';
    document.addEventListener('rbhModalButtonClick', (evt) => {
      modal.remove();
      // router.navigate('/login');
    });
  });
});

socket.on('authStateChange', (status) => {
  // console.log("status", status)
  if (status.newState === 'authenticated') {
    let usr = users.findOne({id: status.authToken.user.id}) || {};
    // console.log("usr", usr)
    Object.assign(user, status.authToken.user, usr, {authenticated: true});
    document.dispatchEvent(userAuthenticated);
    if ((/.+\/login/).test(window.location.href)) router.navigate('/home/authenticated');
  }
  if (status.newState === 'unauthenticated') {
    user.authenticated = false;
    document.dispatchEvent(userUnauthenticated);
    // router.navigate('/login');
  }
});

document.addEventListener('databaseLoaded', (evt) => {
  let usr = evt.detail;
  if (usr) {
    delete usr.$loki;
    delete usr.meta;
    Object.assign(user, usr);
  }
  document.dispatchEvent(new CustomEvent('userLoadedFromDb'));
});

user.logout = () => {
  hello.logout();
  Object.assign(user, { authenticated: false, admin: false });
  socket.emit('logout', user);
};

export {user};
