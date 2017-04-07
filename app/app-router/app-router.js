import Router from 'esnext-router';
import '../home-view/home-view.js';
import '../login-view/component.js';
import '../nav-bar/nav-bar.js';
import '../not-found/not-found.js';
import '../home-authenticated/home-authenticated.js';
import '../user-skills/component.js';
import '../sys-admin/sys-admin.js';

import auth from '../auth.js';

const router = new Router();

class AppRouter extends HTMLElement {
  constructor() {
    super();

    router.add('/', (req, evt, next) => {
      router.navigate('/home');
    });

    router.add('/home', auth, (req, evt, next) => {
      if (req.user.authenticated) router.navigate('/home/authenticated');
      else this.innerHTML = `<home-view></home-view>`;
    });

    router.add('/home/authenticated', auth, (req, evt, next) => {
      this.innerHTML = `<home-authenticated></home-authenticated>`;
    });

    router.add('/login', (req, evt, next) => {
      this.innerHTML = `<login-view></login-view>`;
    });

    router.add('/logout', auth, (req, evt, next) => {
      req.user.logout();
    });

    router.add('/help', (req, evt, next) => {
      router.navigate('/not-found');
    });

    router.add('/admin', (req, evt, next) => {
      router.navigate('/admin/users');
    });

    router.add('/admin/*', auth, (req, evt, next) => {
      if (req.user.initialized && !req.user.admin) router.navigate('/home');
      else {
        let sysAdmin = /\<sys-admin\>/.test(this.innerHTML);
        if (!sysAdmin) this.innerHTML = `<sys-admin></sys-admin>`;
      }
    });

    router.add('/not-found', (req, evt, next) => {
      this.innerHTML = `<not-found></not-found>`;
    });

    router.add('/*', (req, evt, next) => {
      if (!evt.parent()) router.navigate('/not-found');
    });

  }

  static get observedAttributes() {
    return ['']
  }
}

customElements.define('app-router', AppRouter);

export { AppRouter, router };
