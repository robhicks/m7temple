import {patch} from 'incremental-dom';
import {render} from './template.js';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';
import css from './component.less';
// import {firebase} from '../db.js';
import {debounce} from '../utilities.js';

class SysAdmin extends HTMLElement {
  constructor() {
    super();
    this.user = user;
    this.model = {};
    this.db = firebase.database();
    document.addEventListener('userChanged', (evt) => {
      let user = evt.detail;
      if (!user.admin) router.navigate('/home');
    });
  }

  addSkill() {
    let id = this.skills.length;
    this.editSkill({id: id});
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  cancelEdit() {
    this.skill = null;
    this.user = null;
    this.userId = null;
    this.skillEditor = false;
    this.userEditor = false;
    this.viewSkills = JSON.parse(JSON.stringify(this.skills));
    this.viewUsers = JSON.parse(JSON.stringify(this.users));
    this.updateView();
  }

  connectedCallback() {
    this.innerHTML = `<style>${css}</style><div id="sys-admin"></div>`;
    this.element = this.querySelector('div#sys-admin');
    this.selectedTab = 'skills';
    this.db.ref('/skills/').on('value', (snapshot) => {
      this.skills = JSON.parse(JSON.stringify(snapshot.val()));
      this.viewSkills = JSON.parse(JSON.stringify(snapshot.val()));
      this.updateView();
    });
    this.db.ref('/users/').on('value', (snapshot) => {
      this.users = JSON.parse(JSON.stringify(snapshot.val()));
      this.viewUsers = JSON.parse(JSON.stringify(snapshot.val()));
      this.updateView();
    });
  }

  disconnectedCallback() {

  }

  editSkill(skill) {
    this.skill = skill;
    this.skillEditor = true;
    this.updateView();
    this.quill = new Quill('#skill-editor', {theme: 'snow'});
    this.quill.setContents(this.skill.delta);
  }

  filterSkills(val) {
    let str = val ? val.toLowerCase() : null;
    if (!str || str === '') this.viewSkills = JSON.parse(JSON.stringify(this.skills));
    else {
      this.viewSkills = this.skills.filter((skill) => skill.title.toLowerCase().indexOf(str) !== -1
        || skill.description.toLowerCase().indexOf(str) !== -1
        || skill.category.toLowerCase().indexOf(str) !== -1);
    }
    this.updateView();
  }

  getGroupName(user) {
    let _user = this.viewUsers[user];
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

  saveSkill() {
    this.skill.delta = this.quill.getContents();
    this.skill.html = this.element.querySelector(".ql-editor").innerHTML;
    this.skill.achievements = this.skill.achievements || 0;
    this.db.ref('/skills/' + this.skill.id).set(this.skill)
      .then(() => this.cancelEdit());
  }

  editUser(userId) {
    this.userId = userId;
    this.user = this.viewUsers[userId];
    this.userEditor = true;
    this.updateView();
  }

  filterUsers(val) {
    let str = val ? val.toLowerCase() : null;
    if (!str || str === '') this.viewUsers = JSON.parse(JSON.stringify(this.users));
    else {
      this.viewUsers = this.users.filter((user) => user.title.toLowerCase().indexOf(str) !== -1
        || user.description.toLowerCase().indexOf(str) !== -1
        || user.category.toLowerCase().indexOf(str) !== -1);
    }
    this.updateView();
  }

  saveUser() {
    this.db.ref('/users/' + this.userId).set(this.user)
      .then(() => this.cancelEdit());
  }

  selectTab(tab) {
    this.selectedTab = tab;
    this.updateView();
  }

  updateView() {
    // wrap in if. otherwise ff and safari fail
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [''];
  }
}
customElements.define('sys-admin', SysAdmin);

export { SysAdmin }
