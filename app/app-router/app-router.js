import Router from 'esnext-router';
import '../home-view/home-view.js';
import '../login-view/component.js';
import '../nav-bar/nav-bar.js';
import '../not-found/not-found.js';
import '../home-authenticated/home-authenticated.js';
import '../user-skills/component.js';
import '../sys-admin/sys-admin.js';
import {user} from "../user.js";

const router = new Router();

class AppRouter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

    router.add('/', (req, evt, next) => {
      router.navigate('/login');
    });

    router.add('/home', (req, evt, next) => {
      router.navigate('/home/authenticated');
    });

    router.add('/home/authenticated', (req, evt, next) => {
      setTimeout(() => {
        this.innerHTML = `<home-authenticated></home-authenticated>`;
      }, 200);
    });

    router.add('/login', (req, evt, next) => {
      this.innerHTML = `<login-view></login-view>`;
    });

    router.add('/logout', (req, evt, next) => {
      user.logout();
      router.navigate('/login');
    });

    router.add('/help', (req, evt, next) => {
      router.navigate('/not-found');
    });

    router.add('/admin', (req, evt, next) => {
      router.navigate('/admin/users');
    });

    router.add('/admin/*', (req, evt, next) => {
      let sysAdmin = (/\<sys-admin\>/).test(this.innerHTML);
      if (!sysAdmin) this.innerHTML = `<sys-admin></sys-admin>`;
    });

    router.add('/not-found', (req, evt, next) => {
      this.innerHTML = `<not-found></not-found>`;
    });

    router.add('/*', (req, evt, next) => {
      if (!evt.parent()) router.navigate('/not-found');
    });
  }

  static get observedAttributes() {
    return [''];
  }
}

customElements.define('app-router', AppRouter);

export { AppRouter, router };
