import css from './skills-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
import {skills} from '../../db.js';
import {debounce} from '../../utilities.js';

class SkillsAdmin extends HTMLElement {
  constructor() {
    super();
  }

  addSkill() {
    this.editSkill();
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (nVal && nVal !== '' && nVal !== oVal) {
      this._updateView();
    }
  }

  cancelEdit() {
    this.skill = null;
    this.skillEditor = false;
    this.viewSkills = skills.find();
    this._updateView();
  }

  connectedCallback() {
    this.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.querySelector('container');
    if (skills && skills.find) {
      this.viewSkills = skills.find();
      this._updateView();
    } else {
      setTimeout(() => {
        this.viewSkills = skills.find();
        this._updateView();
      }, 500);
    }
  }

  disconnectedCallback() {

  }

  editSkill(skill = {}) {
    this.skill = skill;
    this.skillEditor = true;
    this._updateView();
    this.quill = new Quill('#skill-editor', {theme: 'snow'});
    if (this.skill.delta) this.quill.setContents(this.skill.delta);
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
    skills.insertOne(this.skill);
    this.cancelEdit();
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
