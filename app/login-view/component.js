import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './component.less';

class LoginView extends HTMLElement {
  constructor() {
    super();
    this.hello = hello;
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><section></section>`;
    this.element = this.shadowRoot.querySelector('section');

    this.updateView();
  }

  disconnectedCallback() {

  }

  updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('login-view', LoginView);

export { LoginView };
