import css from './site-help.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';

class SiteHelp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');

    this._updateView = () => {
      if (this.element) patch(this.element, render, this);
    };
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  connectedCallback() {
    this._updateView();
  }

  disconnectedCallback() {

  }


  static get observedAttributes() {
    return [];
  }
}

customElements.define('site-help', SiteHelp);

export { SiteHelp };
