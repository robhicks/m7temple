import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';
import css from './component.less';

class UserSkills extends HTMLElement {
  constructor() {
    super();
    this.user = user;
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.innerHTML = `<style>${css}</style><div id="user-skills"></div>`;
    this.element = this.querySelector('div#user-skills');
    this.active = 'goals';
    this.updateView();
  }

  disconnectedCallback() {

  }

  selectTab(tab) {
    this.active = tab;
    this.updateView();
  }

  updateView() {
    // wrap in if. otherwise ff and safari fail
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return ['']
  }
}
customElements.define('user-skills', UserSkills);

export { UserSkills }
