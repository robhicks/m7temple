import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import css from './component.less';
// import {firebase} from '../db.js';

class LoginView extends HTMLElement {
  constructor() {
    super();
    this.hello = hello;
  }

  anchorClickHandler(evt) {
    if (evt.target.tagName !== 'A') return;
      router.navigate(evt.target.getAttribute('href'));
      evt.preventDefault();
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><section></section>`;
    // this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
    this.element = this.shadowRoot.querySelector('section');

    this.updateView();
  }

  disconnectedCallback() {

  }

  updateView() {
    // wrap in if. otherwise ff and safari fail
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return []
  }
}
customElements.define('login-view', LoginView);

export { router };
