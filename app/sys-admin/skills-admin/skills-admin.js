import css from './skills-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
// import {firebase} from '../../db.js';
import {debounce} from '../../utilities.js';

class SkillsAdmin extends HTMLElement {
  constructor() {
    super();
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
    this.skillEditor = false;
    this.viewSkills = JSON.parse(JSON.stringify(this.skills));
    this._updateView();
  }

  connectedCallback() {
    this.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.querySelector('container');
    this.db.ref('/skills/').on('value', (snapshot) => {
      this.skills = JSON.parse(JSON.stringify(snapshot.val()));
      this.viewSkills = JSON.parse(JSON.stringify(snapshot.val()));
      this._updateView();
    });
  }

  disconnectedCallback() {

  }

  editSkill(skill) {
    this.skill = skill;
    this.skillEditor = true;
    this._updateView();
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
    this._updateView();
  }

  saveSkill() {
    this.skill.delta = this.quill.getContents();
    this.skill.html = this.element.querySelector(".ql-editor").innerHTML;
    this.skill.achievements = this.skill.achievements || 0;
    this.db.ref('/skills/' + this.skill.id).set(this.skill)
      .then(() => this.cancelEdit());
  }

  _updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('skills-admin', SkillsAdmin);

export { SkillsAdmin };
