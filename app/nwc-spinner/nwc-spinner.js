import css from './nwc-spinner.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';

class NwcSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><spinner-container></spinner-container>`;
    this.element = this.shadowRoot.querySelector('container');
    this._show = "";
    this._size = "";
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
        if (name === "show" && nVal !== this._show) this._show = nVal;
        if (name === "size" && nVal !== this._size) this._size = nVal;
      this._updateView();
    }
  }

  connectedCallback() {
    this._updateView();
  }

  disconnectedCallback() {

  }

  get show() {
    return this._show;
  }

  set show(show) {
    this._show = show;
    this.setAttribute("show", show);
  }
  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
    this.setAttribute("size", size);
  }


  _updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return ["show", "size"];
  }
}

customElements.define('nwc-spinner', NwcSpinner);

export { NwcSpinner };
