import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import css from './nav-bar.less';
import {user} from '../user.js';
import {contains} from '../utilities.js';

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.state = 'home';
    this.user = user;

    document.addEventListener('userChanged', () => {
      this.updateView();
    });
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  collapseToggle() {
    let button = this.shadowRoot.querySelector('button');
    let nav = this.shadowRoot.querySelector('.list');
    button.classList.toggle('-active');
    button.classList.toggle('-on');
    nav.classList.toggle('-on');
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><div id="navbar"></div>`;
    this.element = this.shadowRoot.querySelector('div#navbar');
    setTimeout(() => {
      this.updateView();
    }, 10);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this.anchorClickHandler.bind(this));
  }

  go(path) {
    router.navigate(path);
  }

  stateContains(val) {
    if (router && router.state.value.indexOf(val) !== -1) return 'active';
    return '';
  }

  updateView() {
    // console.log('navbar::updateView');
    if (this.element) {
      this.user = user;
      patch(this.element, render, this);
      setTimeout(() => {
        router.addComponentAnchorEventListeners(this.element);
      }, 10);
    }
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('nav-bar', NavBar);

export {NavBar };
