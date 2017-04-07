import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './component.less';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';

class HomeView extends HTMLElement {
  constructor() {
    super();
    this.user = user;
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
    this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
    this.element = this.shadowRoot.querySelector('section');
    this.updateView();

    document.addEventListener('userChanged', this.updateView);
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
customElements.define('home-view', HomeView);

export { AppRouter, router };
