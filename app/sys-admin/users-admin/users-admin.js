import css from './users-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
import {debounce} from '../../utilities.js';
import {db} from '../../db.js';

class UsersAdmin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');
    this.user = user;
    this.model = {};

    document.addEventListener('usersChanged', this._updateView.bind(this));
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  cancelEdit() {
    this.skill = null;
    this.user = null;
    this.userId = null;
    this.userEditor = false;

    this._updateView();
  }

  connectedCallback() {
    this.uColl = db.getCollection('users');
    this.uColl.setChangesApi(true);
    this.dv = this.uColl.addDynamicView('users');
    this._updateView();
  }

  disconnectedCallback() {

  }

  editUser(_user) {
    this.user = _user;
    this.userEditor = true;
    this._updateView();
  }

  filterUsers(val) {
    let str = val ? val.toLowerCase() : null;

    this.dv.applyWhere((_user) =>
      _user.displayName && _user.displayName.toLowerCase().indexOf(str) !== -1
      || _user.name && _user.name.toLowerCase().indexOf(str) !== -1
      || _user.group && _user.group.toLowerCase().indexOf(str) !== -1
      || _user.email && _user.email.toLowerCase().indexOf(str) !== -1);

    if (!str || str === '') {
      this.dv.removeFilters();
    }

    this._updateView();
  }

  getGroupName(_user) {
    let group = _user.group;
    let groupName;
    switch(group) {
      case 'be': groupName = 'Beehive'; break;
      case 'dn': groupName = 'Deacon'; break;
      case 'eq': groupName = 'Elder'; break;
      case 'hp': groupName = 'High Priest'; break;
      case 'll': groupName = 'Laurel'; break;
      case 'mm': groupName = 'Miamaid'; break;
      case 'pr': groupName = 'Priest'; break;
      case 'py': groupName = 'Primary'; break;
      case 'rs': groupName = 'Relief Society'; break;
      case 'tr': groupName = 'Teachter'; break;
      default: groupName = null;
    }
    return groupName;
  }

  saveUser() {
    let _user = Object.assign({}, this.user);
    delete _user.authenticated;
    delete _user.initialized;
    this.uColl.update(_user);
    this.cancelEdit();
  }

  _updateView() {
    this.viewUsers = this.dv.data();
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('users-admin', UsersAdmin);

export { UsersAdmin };
