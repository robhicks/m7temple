import css from './rbh-modal.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';

class RbhModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');
    this._heading = "";
    this._body = "";
    this._primary = "";
    this._cancel = "";
    this._show = true;
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
        if (name === "heading" && nVal !== this._heading) this._heading = nVal;
        if (name === "body" && nVal !== this._body) this._body = nVal;
        if (name === "primary" && nVal !== this._primary) this._primary = nVal;
        if (name === "cancel" && nVal !== this._cancel) this._cancel = nVal;
        if (name === "show" && nVal !== this._show) this._show = nVal;
      this._updateView();
    }
  }

  _clickButton(button) {
    document.dispatchEvent(new CustomEvent('rbhModalButtonClick', {detail: button}));
  }

  connectedCallback() {
    this._updateView();
  }

  disconnectedCallback() {

  }

  get heading() {
    return this._heading;
  }

  set heading(heading) {
    this._heading = heading;
    this.setAttribute("heading", heading);
  }
  get body() {
    return this._body;
  }

  set body(body) {
    this._body = body;
    this.setAttribute("body", body);
  }
  get primary() {
    return this._primary;
  }

  set primary(primary) {
    this._primary = primary;
    this.setAttribute("primary", primary);
  }
  get cancel() {
    return this._cancel;
  }

  set cancel(cancel) {
    this._cancel = cancel;
    this.setAttribute("cancel", cancel);
  }
  get show() {
    return this._show;
  }

  set show(show) {
    this._show = show;
    this.setAttribute("show", show);
  }


  _updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return ["heading","body","primary","cancel","show"];
  }
}

customElements.define('rbh-modal', RbhModal);

export { RbhModal };
