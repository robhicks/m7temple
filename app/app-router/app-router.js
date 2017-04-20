import '../home-view/home-view.js';
import '../login-view/component.js';
import '../nav-bar/nav-bar.js';
import '../not-found/not-found.js';
import '../home-authenticated/home-authenticated.js';
import '../user-skills/component.js';
import '../sys-admin/sys-admin.js';
import {db} from "../db.js";
import {user} from "../user.js";

const socket = socketCluster.connect();
const router = new Grapnel({pushState: true});

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

    router.add('/home/authenticated', db.loadDb, (req, evt, next) => {
      setTimeout(() => {
        if (socket.authState !== 'authenticated') router.navigate('/login');
        else this.innerHTML = `<home-authenticated></home-authenticated>`;
      }, 200);
    });

    router.add('/login', (req, evt, next) => {
      console.log('/login');
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

    router.add('/admin/*', db.loadDb, (req, evt, next) => {
      let sysAdmin = (/\<sys-admin\>/).test(this.innerHTML);
      if (!sysAdmin) this.innerHTML = `<sys-admin></sys-admin>`;
    });

    router.add('/not-found', (req, evt, next) => {
      this.innerHTML = `<not-found></not-found>`;
    });

    router.add('/oauth2callback', (req, evt, next) => {
      next();
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
