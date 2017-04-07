import {socket, users} from './db.js';
import {router} from './app-router/app-router.js';
import {RbhModal} from './rbh-modal/rbh-modal.js';

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
    console.log("r", r)
    user.initialized = true;
    user.displayName = r.displayName;
    user.id = r.id;
    user.firstName = r.first_name;
    user.lastName = r.last_name;
    user.email = r.email;
    socket.emit('auth', user);
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


user.logout = () => {
  hello.logout();
  router.navigate('/home');
};

export {user};
