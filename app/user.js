import {router} from './app-router/app-router.js';
import {RbhModal} from './rbh-modal/rbh-modal.js';
import {socket} from './db.js';

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
    Object.assign(user, r);
    user.authenticate();
  }, (err) => {
    let modal = new RbhModal();
    modal.heading = 'Authentication Provider Error';
    modal.body = err;
    modal.primary = 'OK';
    document.addEventListener('rbhModalButtonClick', (evt) => {
      modal.remove();
      router.navigate('/login');
    });
  });
});

user.authenticate = () => {
  return new Promise((resolve, reject) => {
    socket.emit('auth', user, (err) => {
      if (err) {
        reject(err);
        router.navigate('/login');
      } else {
        Object.assign(user, socket.authToken.user, {authenticated: true, admin: true});
        document.dispatchEvent(new CustomEvent('userChanged', {detail: user}));
        resolve(user);
        // console.log("socket.authToken", socket.authToken)
        // console.log("router.desiredRoute", router.desiredRoute)
        if (router.state.value === '/login') router.navigate('/home/authenticated');
      }
    });
  });
};


user.logout = () => {
  hello.logout();
  user = { authenticated: false };
  document.dispatchEvent(new CustomEvent('userChanged', {detail: user}));
};

user.getUser = () => {
  if (user.authenticated) return Promise.resolve(user);
  return user.authenticate();
}

export {user};


// document.dispatchEvent(new CustomEvent('userChanged', {detail: usr}));
