import css from './awards-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
// import {firebase} from '../../db.js';

class AwardsAdmin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');
    this.db = firebase.database();
    this.awardsTable = this.db.ref('/awards');
    this.usersTable = this.db.ref('/users');
    this.skillsTable = this.db.ref('/skills')
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  connectedCallback() {
    this.awardsTable.on('value', (snapshot) => {
      this.awards = [];
      let awards = snapshot.val();
      for (let key in awards) {
        this.awards.push(Object.assign({id: key}, awards[key]));
      }
      console.log("this.awards", this.awards)
    });
    this._updateView();
  }

  disconnectedCallback() {

  }



  _updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('awards-admin', AwardsAdmin);

export { AwardsAdmin };
