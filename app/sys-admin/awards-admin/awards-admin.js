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
    this.search = {};

    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('giftsChanged', this._updateView.bind(this));
    document.addEventListener('usersChanged', this._updateView.bind(this));
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  _joinData() {
    let awards = this.adv.data();
    let gifts = this.sdv.data();
    let users = this.udv.data();
    awards.forEach((award) => {
      award.gift = gifts.find((gift) => gift.id === award.giftId);
      award.user = users.find((user) => user.id === award.userId);
    });
    return awards;
  }

  connectedCallback() {
    this.aColl = db.getCollection('awards');
    this.sColl = db.getCollection('gifts');
    this.uColl = db.getCollection('users');

    this.adv = this.aColl.addDynamicView('awards');
    this.sdv = this.sColl.addDynamicView('gifts');
    this.udv = this.uColl.addDynamicView('users');

    this._updateView();
  }

  disconnectedCallback() {
    this.adv.removeFilters();
    this.sdv.removeFilters();
    this.udv.removeFilters();
    document.removeEventListener('awardsChanged', this._updateView.bind(this));
    document.removeEventListener('giftsChanged', this._updateView.bind(this));
    document.removeEventListener('usersChanged', this._updateView.bind(this));
  }

  filterAwards() {
    // console.log("this.search", this.search)
    this.adv.removeFilters();
    let re = this.search.text && this.search.text !== '' ? new RegExp(this.search.text) : null;

    if (!!(this.search.type && this.search.type !== '' && re)) {
      this.adv.applyWhere((award) => {
        return award.type === this.search.type && award.gift && award.gift.title && re.test(award.gift.title)
          || award.type === this.search.type && award.gift && award.gift.description && re.test(award.gift.description)
          || award.type === this.search.type && award.user && award.user.displayName && re.test(award.user.displayName)
          || award.type === this.search.type && award.user && award.user.firstName && re.test(award.user.firstName)
          || award.type === this.search.type && award.user && award.user.lastName && re.test(award.user.lastName)
          || award.type === this.search.type && award.user && award.user.email && re.test(award.user.email);
      });
    } else if (!!re) {
      this.adv.applyWhere((award) => {
        return award.gift && award.gift.title && re.test(award.gift.title)
          || award.gift && award.gift.description && re.test(award.gift.description)
          || award.user && award.user.displayName && re.test(award.user.displayName)
          || award.user && award.user.firstName && re.test(award.user.firstName)
          || award.user && award.user.lastName && re.test(award.user.lastName)
          || award.user && award.user.email && re.test(award.user.email);
      });
    } else if (this.search.type !== '') {
      this.adv.applyWhere((award) => {
        return award.type === this.search.type;
      });
    }
    this._updateView();
  }

  grantAward(award) {
    console.log("award", award)
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
