import css from './assistance-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {db} from '../../db.js';

class AssistanceAdmin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');
    this.search = {};

    this._updateView = () => {
      this.tickets = this._joinData();
      if (this.element) patch(this.element, render, this);
    };
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  close(ticket) {
    ticket.type = 'closed';
    this.tColl.update(ticket);
    this._updateView();
  }

  connectedCallback() {
    this.sColl = db.getCollection('gifts');
    this.tColl = db.getCollection('tickets');
    this.uColl = db.getCollection('users');

    this.tColl.setChangesApi(true);

    this.sdv = this.sColl.getDynamicView('gifts') || this.sColl.addDynamicView('gifts');
    this.tdv = this.tColl.getDynamicView('tickets') || this.tColl.addDynamicView('tickets');
    this.udv = this.uColl.getDynamicView('users') || this.uColl.addDynamicView('users');

    document.addEventListener('ticketsChanged', this._updateView.bind(this));
    document.addEventListener('giftsChanged', this._updateView.bind(this));
    document.addEventListener('usersChanged', this._updateView.bind(this));

    this._updateView();
  }

  delete(ticket) {
    this.tColl.remove(ticket);
    this._updateView();
  }

  disconnectedCallback() {
    this.sdv.removeFilters();
    this.tdv.removeFilters();
    this.udv.removeFilters();
    document.removeEventListener('ticketsChanged', this._updateView.bind(this));
    document.removeEventListener('giftsChanged', this._updateView.bind(this));
    document.removeEventListener('usersChanged', this._updateView.bind(this));
  }

  filterTickets() {
    // console.log("this.search", this.search)
    this.tdv.removeFilters();
    let re = this.search.text && this.search.text !== '' ? new RegExp(this.search.text) : null;

    if (!!(this.search.type && this.search.type !== '' && re)) {
      this.tdv.applyWhere((ticket) => {
        return ticket.type === this.search.type && ticket.gift && ticket.gift.title && re.test(ticket.gift.title)
          || ticket.type === this.search.type && ticket.gift && ticket.gift.description && re.test(ticket.gift.description)
          || ticket.type === this.search.type && ticket.user && ticket.user.displayName && re.test(ticket.user.displayName)
          || ticket.type === this.search.type && ticket.user && ticket.user.firstName && re.test(ticket.user.firstName)
          || ticket.type === this.search.type && ticket.user && ticket.user.lastName && re.test(ticket.user.lastName)
          || ticket.type === this.search.type && ticket.user && ticket.user.email && re.test(ticket.user.email);
      });
    } else if (!!re) {
      this.tdv.applyWhere((ticket) => {
        return ticket.gift && ticket.gift.title && re.test(ticket.gift.title)
          || ticket.gift && ticket.gift.description && re.test(ticket.gift.description)
          || ticket.user && ticket.user.displayName && re.test(ticket.user.displayName)
          || ticket.user && ticket.user.firstName && re.test(ticket.user.firstName)
          || ticket.user && ticket.user.lastName && re.test(ticket.user.lastName)
          || ticket.user && ticket.user.email && re.test(ticket.user.email);
      });
    } else if (this.search.type !== '') {
      this.tdv.applyWhere((ticket) => {
        return ticket.type === this.search.type;
      });
    }
    this._updateView();
  }

  _joinData() {
    let tickets = this.tdv.data();
    let gifts = this.sdv.data();
    let users = this.udv.data();
    tickets.forEach((ticket) => {
      ticket.gift = gifts.find((gift) => gift.id === ticket.giftId);
      ticket.user = users.find((user) => user.id === ticket.userId);
    });
    return tickets;
  }

  open(ticket) {
    ticket.type = 'open';
    this.tColl.update(ticket);
    this._updateView();
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('assistance-admin', AssistanceAdmin);

export { AssistanceAdmin };
