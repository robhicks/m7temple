import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import css from './nav-bar.less';
import {user} from '../user.js';
import {contains} from '../utilities.js';

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.user = user;
    this.state = 'home';

    setTimeout(() => {
      this.state = router.state.value;
      router.on('navigate', () => {
        this.state = router.state.value;
        this.updateView();
      });
      this.updateView();
    }, 500);
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
    document.addEventListener('userChanged', this.userChanged.bind(this));
    this.updateView();
    setTimeout(() => {
      router.addComponentAnchorEventListeners(this.element);
    }, 10);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this.anchorClickHandler.bind(this));
    document.removeEventListener('userChanged', this.userChanged.bind(this));
  }

  go(path) {
    router.navigate(path);
  }

  stateContains(val) {
    if (contains(this.state, val)) return 'active';
    return '';
  }

  updateView() {
    if (this.element) patch(this.element, render, this);
  }

  userChanged(evt) {
    console.log("this.user", this.user)
    this.updateView();
  }

  static get observedAttributes() {
    return []
  }
}
customElements.define('nav-bar', NavBar);

export {NavBar };
