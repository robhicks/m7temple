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
    document.addEventListener('skillsChanged', this._updateView.bind(this));
    document.addEventListener('usersChanged', this._updateView.bind(this));
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  _joinData() {
    let awards = this.adv.data();
    let skills = this.sdv.data();
    let users = this.udv.data();
    awards.forEach((award) => {
      award.skill = skills.find((skill) => skill.id === award.skillId);
      award.user = users.find((user) => user.id === award.userId);
    });
    return awards;
  }

  connectedCallback() {
    this.aColl = db.getCollection('awards');
    this.sColl = db.getCollection('skills');
    this.uColl = db.getCollection('users');

    this.adv = this.aColl.addDynamicView('awards');
    this.sdv = this.aColl.addDynamicView('skills');
    this.udv = this.aColl.addDynamicView('users');

    this._updateView();
  }

  disconnectedCallback() {
    this.adv.removeFilters();
  }

  filterAwards(val) {
    let str = val ? val.toLowerCase() : null;
    this.adv.removeFilters();

    if (str) {
      this.adv.applyWhere((award) => {

      })
    }
    this._updateView();
  }

  filterByType(type) {
    this.adv.removeFilters();
    this.adv.applyWhere((award) => award.type === type);
    this._updateView();
  }

  _updateView() {
    this.awards = this._joinData();
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('awards-admin', AwardsAdmin);

export { AwardsAdmin };
