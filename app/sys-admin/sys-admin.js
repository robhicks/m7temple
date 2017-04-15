import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';
import css from './sys-admin.less';
import './assistance-admin/assistance-admin.js';
import './awards-admin/awards-admin.js';
import './reports-admin/reports-admin.js';
import './skills-admin/skills-admin.js';
import './users-admin/users-admin.js';

class SysAdmin extends HTMLElement {
  constructor() {
    super();
    document.addEventListener('userLoadedFromDb', this._userChanged.bind(this));
    document.addEventListener('userUnauthenticated', this._userChanged.bind(this));

    router.add('/admin/users', (req, evt, next) => {
      console.log('/admin/users');
      if (this.content) this.content.innerHTML = `<users-admin></users-admin>`;
    });
    router.add('/admin/skills', (req, evt, next) => {
      if (this.content) this.content.innerHTML = `<skills-admin></skills-admin>`;
    });
    router.add('/admin/awards', (req, evt, next) => {
      if (this.content) this.content.innerHTML = `<awards-admin><awards-admin>`;
    });
    router.add('/admin/assistance', (req, evt, next) => {
      if (this.content) this.content.innerHTML = `<assistance-admin></assistance-admin>`;
    });
    router.add('/admin/reports', (req, evt, next) => {
      if (this.content) this.content.innerHTML = `<reports-admin></reports-admin>`;
    });
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    let state = router.state.value;
    this.innerHTML = `<style>${css}</style><div id="sys-admin"></div>`;
    this.element = this.querySelector('div#sys-admin');
    this.updateView();
    this.content = this.element.querySelector('content');
    this.tabs = this.element.querySelector('tabs');
    this.tabItems = this.tabs.querySelectorAll('tab');

    this.tabItems.forEach((tab) => {
      let input = tab.querySelector('input');
      if (state.indexOf(input.value) !== -1) input.setAttribute('checked', true);
    });
    setTimeout(() => {
      router.navigate(state);
    }, 100);
  }

  disconnectedCallback() {

  }

  selectTab(tab) {
    router.navigate('/admin/' + tab);
  }

  updateView() {
    if (this.element) patch(this.element, render, this);
  }

  _userChanged() {
    if (!user.authenticated) router.navigate('/login');
  }

  static get observedAttributes() {
    return [''];
  }
}
customElements.define('sys-admin', SysAdmin);

export { SysAdmin }
