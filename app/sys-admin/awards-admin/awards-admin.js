import css from './awards-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {db} from '../../db.js';

class AwardsAdmin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');

    document.addEventListener('awardsChanged', this._updateView.bind(this));
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  connectedCallback() {
    this.aColl = db.getCollection('awards');
    this.dv = this.aColl.addDynamicView('awards');
    this._updateView();
  }

  disconnectedCallback() {

  }

  _updateView() {
    this.awards = this.dv.data();
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('awards-admin', AwardsAdmin);

export { AwardsAdmin };
