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

    document.addEventListener('userLoadedFromDb', this.updateView.bind(this));
    document.addEventListener('userAuthenticated', this.updateView.bind(this));
    document.addEventListener('userUnauthenticated', this.updateView.bind(this));
    document.addEventListener('userLoadedFromDb', this.updateView.bind(this));
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
    this.updateView();
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this.anchorClickHandler.bind(this));
  }

  go(route) {
    // console.log("route", route)
    router.navigate(route);
    this.updateView();
  }

  stateContains(val) {
    return window.location.href.indexOf(val) !== -1 ? 'active': '';
  }

  updateView() {
    // console.log("this.user", this.user)
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('nav-bar', NavBar);

export {NavBar };
