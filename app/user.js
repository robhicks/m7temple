const socket = socketCluster.connect();
import {router} from './app-router/app-router.js';
import {RbhModal} from './rbh-modal/rbh-modal.js';

const userAuthenticated = new CustomEvent('userAuthenticated');
const userUnauthenticated = new CustomEvent('userUnauthenticated');

let user = {
  authenticated: false,
  initialized: false
};

hello.init({
  facebook: window.SERVER_ENV.FACEBOOK_KEY,
  github: window.SERVER_ENV.GITHUB_KEY,
  google: window.SERVER_ENV.GOOGLE_KEY,
  twitter: window.SERVER_ENV.TWITTER_KEY
}, {
  redirect_uri: window.SERVER_ENV.REDIRECT_URL,
  scope: 'email'
});

hello.on('auth.login', (auth) => {
  // console.log("auth", auth)
  hello(auth.network).api('me')
  .then((r) => {
    // console.log("hellojs:auth.login user", r);
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

user.loadUser = (req, evt, next) => {
  if (socket.authState === 'authenticated') next();
  else router.navigate('/login');
};

socket.on('authStateChange', (status) => {
  // console.log("status", status)
  // console.log("socket", socket)
  if (status.newState === 'authenticated') {
    // console.log("usr", usr)
    Object.assign(user, status.authToken.user, {authenticated: true});
    document.dispatchEvent(userAuthenticated);
    if ((/.+\/login/).test(window.location.href)) router.navigate('/home/authenticated');
  }
  if (status.newState === 'unauthenticated') {
    user.authenticated = false;
    document.dispatchEvent(userUnauthenticated);
  }
});


user.logout = () => {
  hello.logout();
  Object.assign(user, { authenticated: false, admin: false });
  socket.emit('logout', user);
};

export {user};
