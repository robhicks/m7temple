import css from './users-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
// import {firebase} from '../../db.js';
import {debounce} from '../../utilities.js';

class UsersAdmin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');
    this.user = user;
    this.model = {};
    this.db = firebase.database();
    document.addEventListener('userChanged', (evt) => {
      let user = evt.detail;
      if (!user.admin) router.navigate('/home');
    });
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
    this.viewUsers = JSON.parse(JSON.stringify(this.users));
    this._updateView();
  }

  connectedCallback() {
    this.db.ref('/users/').on('value', (snapshot) => {
      let obj = JSON.parse(JSON.stringify(snapshot.val()));
      let temp = [];
      Object.keys(obj).forEach((key) => {
        let entry = obj[key];
        entry.id = key;
        temp.push(entry)
      });
      this.users = Object.assign([], temp);
      this.viewUsers = Object.assign([], temp);
      this._updateView();
    });
  }

  disconnectedCallback() {

  }

  editUser(user) {
    this.user = user
    this.userEditor = true;
    this._updateView();
  }

  filterUsers(val) {
    let str = val ? val.toLowerCase() : null;

    this.viewUsers = this.users.filter((user) =>
      user.displayName && user.displayName.toLowerCase().indexOf(str) !== -1
      || user.name && user.name.toLowerCase().indexOf(str) !== -1
      || user.group && user.group.toLowerCase().indexOf(str) !== -1
      || user.email && user.email.toLowerCase().indexOf(str) !== -1);

    if (!str || str === '') this.viewUsers = Object.assign([], this.users);

    this._updateView();
  }

  getGroupName(user) {
    let group = user.group;
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
    let user = Object.assign({}, this.user);
    let userId = user.id;
    delete user.id;
    this.db.ref('/users/' + userId).set(user)
      .then(() => this.cancelEdit());
  }

  _updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('users-admin', UsersAdmin);

export { UsersAdmin };
