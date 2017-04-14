import css from './skills-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
import {skills} from '../../db.js';
import {uuid} from '../../utilities.js';

class SkillsAdmin extends HTMLElement {
  constructor() {
    super();
    this.dv = skills.addDynamicView('skills');
    document.addEventListener('skillsChanged', this._updateView.bind(this));
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
    this._updateView();
  }

  connectedCallback() {
    this.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.querySelector('container');
    this._updateView();
  }

  disconnectedCallback() {

  }

  editSkill(skill = {}) {
    this.skill = skill;
    this.skill.id = skill.id || uuid();
    this.skillEditor = true;
    this._updateView();
    this.quill = new Quill('#skill-editor', {theme: 'snow'});
    if (this.skill.delta) this.quill.setContents(this.skill.delta);
    console.log("this.skill", this.skill)
  }

  filterSkills(val) {
    let str = val ? val.toLowerCase() : null;

    this.dv.applyWhere((skill) => skill.title.toLowerCase().indexOf(str) !== -1
      || skill.description.toLowerCase().indexOf(str) !== -1
      || skill.category.toLowerCase().indexOf(str) !== -1);

    if (!str || str === '') {
      this.dv.removeFilters();
    }
    this._updateView();
  }

  saveSkill() {
    console.log("this.skill.id", this.skill.id)
    let savedSkill = skills.findOne({id: this.skill.id});
    console.log("savedSkill", savedSkill)
    this.skill.delta = this.quill.getContents();
    this.skill.html = this.element.querySelector(".ql-editor").innerHTML;
    this.skill.achievements = this.skill.achievements || 0;
    if (savedSkill) skills.update(Object.assign(savedSkill, this.skill));
    else skills.insertOne(this.skill);
    this.cancelEdit();
  }

  _updateView() {
    this.viewSkills = this.dv.data();
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('skills-admin', SkillsAdmin);

export { SkillsAdmin };
