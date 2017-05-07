import css from './gifts-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
import {db} from '../../db.js';
import {uuid} from '../../utilities.js';

class GiftsAdmin extends HTMLElement {
  constructor() {
    super();
    document.addEventListener('giftsChanged', this._updateView.bind(this));
  }

  addGift() {
    this.editGift();
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  cancelEdit() {
    this.gift = null;
    this.giftEditor = false;
    this._updateView();
  }

  connectedCallback() {
    this.sColl = db.getCollection('gifts');
    this.sColl.setChangesApi(true);
    this.dv = this.sColl.getDynamicView('gifts') || this.sColl.addDynamicView('gifts');
    this.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.querySelector('container');
    this._updateView();
  }

  deleteGift() {
    this.sColl.findAndRemove({id: this.gift.id});
    this.cancelEdit();
  }

  disconnectedCallback() {
    if (this.dv) this.dv.removeFilters();
  }

  editGift(gift = {}) {
    this.gift = gift;
    this.gift.id = gift.id || uuid();
    this.giftEditor = true;
    this._updateView();
    this.quill = new Quill('#gift-editor', {theme: 'snow'});
    if (this.gift.delta) this.quill.setContents(this.gift.delta);
    // console.log("this.gift", this.gift)
  }

  filterGifts(val) {
    let str = val ? val.toLowerCase() : null;

    // console.log("str", str)
    this.dv.removeFilters();

    this.dv.applyWhere((gift) => {
      if (gift.title && gift.title.toLowerCase().indexOf(str) !== -1) return true;
      if (gift.description && gift.description.toLowerCase().indexOf(str) !== -1) return true;
      if (gift.category && gift.category.toLowerCase().indexOf(str) !== -1) return true;
    });

    if (!str || str === '') {
      this.dv.removeFilters();
    }
    this._updateView();
  }

  saveGift() {
    // console.log("this.gift.id", this.gift.id)
    let savedGift = this.sColl.findOne({id: this.gift.id});
    // console.log("savedGift", savedGift)
    this.gift.delta = this.quill.getContents();
    this.gift.html = this.element.querySelector(".ql-editor").innerHTML;
    this.gift.achievements = this.gift.achievements || 0;
    if (savedGift) this.sColl.update(Object.assign(savedGift, this.gift));
    else this.sColl.insertOne(this.gift);
    this.cancelEdit();
  }

  _updateView() {
    this.viewGifts = this.dv.data();
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('gifts-admin', GiftsAdmin);

export { GiftsAdmin };
