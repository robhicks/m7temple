import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './home-authenticated.less';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';
import CollapsablePanel from '../collapsable-panel/collapsable-panel.js';
import {db} from '../db.js';

class HomeAuthenticated extends HTMLElement {
  constructor() {
    super();
    this.user = user;
    this.gifts = [];
    this.myGifts = [];
    this.mine = false;
    this.search = {};
  }

  anchorClickHandler(evt) {
    if (evt.target.tagName !== 'A') return;
      router.navigate(evt.target.getAttribute('href'));
      evt.preventDefault();
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><div id="home"></div>`;
    this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
    this.element = this.shadowRoot.querySelector('div#home');
    this.aColl = db.getCollection('awards');
    this.sColl = db.getCollection('gifts');

    this.aColl.setChangesApi(true);
    this.sColl.setChangesApi(true);

    this.adv = this.aColl.addDynamicView('awards');
    this.sdv = this.sColl.addDynamicView('gifts');

    document.addEventListener('userUnauthenticated', () => {router.navigate('/login');});
    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('giftsChanged', this._updateView.bind(this));

    this._updateView();
  }

  _combineGiftsAndAwards(_awards = [], _gifts = []) {
    // console.log("_awards", _awards)
    return _gifts.map((gift) => {
      let award = _awards.find((awrd) => awrd.giftId === gift.id && awrd.userId === this.user.id);
      return {
        id: gift.id,
        title: gift.title,
        description: gift.description,
        multiple: !!gift.multiple,
        achievements: gift.achievements,
        html: gift.html,
        added: !!award && award.type === 'added',
        earned: !!award && award.type === 'earned',
        pending: !!award && award.type === 'pending',
        shared: !!award && award.share,
        type: award ? award.type: null
      };
    });
  }

  disconnectedCallback() {
    this.adv.removeFilters();
    this.sdv.removeFilters();
    document.removeEventListener('userUnauthenticated', () => {router.navigate('/login');});
    document.removeEventListener('awardsChanged', this._updateView.bind(this));
    document.removeEventListener('giftsChanged', this._updateView.bind(this));
  }

  filterGifts() {
    let text = this.search.text && this.search.text !== '' ? this.search.text : null;
    let category = this.search.category ? this.search.category : null;

    this.sdv.removeFilters();
    if (text) {
      if (category) {
        this.sdv.applyWhere((gift) => {
          if (gift.category === category && gift.title && gift.title.toLowerCase().indexOf(text) !== -1) return true;
          if (gift.category === category && gift.description && gift.description.toLowerCase().indexOf(text) !== -1) return true;
          if (gift.category === category && gift.category && gift.category.toLowerCase().indexOf(text) !== -1) return true;
        });
      } else {
        this.sdv.applyWhere((gift) => {
          if (gift.title && gift.title.toLowerCase().indexOf(text) !== -1) return true;
          if (gift.description && gift.description.toLowerCase().indexOf(text) !== -1) return true;
          if (gift.category && gift.category.toLowerCase().indexOf(text) !== -1) return true;
        });
      }
    } else if (category) {
      this.sdv.applyWhere((gift) => {
        if (gift.category === category) return true;
      });
    }
    this._updateView();
  }

  filterMine(gifts) {
    return gifts.filter((gift) => gift.added || gift.earned || gift.pending);
  }

  toggleMine() {
    this.mine = !this.mine;
    this._updateView();
  }

  _updateView() {
    let _awards = this.adv.data();
    let _gifts = this.sdv.data();
    this.gifts = this._combineGiftsAndAwards(_awards, _gifts);
    this.myGifts = this.filterMine(this.gifts);
    this.viewGifts = this.mine ? this.myGifts : this.gifts;
    // console.log("this.viewGifts", this.viewGifts)
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('home-authenticated', HomeAuthenticated);
