import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import css from './not-found.less';

class NotFound extends HTMLElement {
  constructor() {
    super();
  }

  anchorClickHandler(evt) {
    console.log(evt);
    if (evt.target.tagName !== 'A') return;
      evt.preventDefault();
      router.navigate(evt.target.getAttribute('href'));
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><div id="not-found"></div>`;
    this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
    this.element = this.shadowRoot.querySelector('div#not-found');
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
customElements.define('not-found', NotFound);
