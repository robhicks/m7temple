import css from './x-spinner.scss!';

class XSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  attributeChangedCallback(name, oVal, nVal) {
    console.log("name", name, nVal)
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = '<style>' + css + '</style>\n\n' + `<div class="spinner-container"><div class="spinner medium"></div></div>`;
  }
  disconnectedCallback() {

  }
  static get observedAttributes() {
    return ['show', 'size']
  }
}
customElements.define('x-spinner', XSpinner);

export default XSpinner
