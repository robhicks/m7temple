import css from './skills-admin.less';
import {render} from './template.js';
import {patch} from 'incremental-dom';
import isJson from './isJson.js';
import {router} from '../../app-router/app-router.js';
import {user} from '../../user.js';
import {db} from '../../db.js';
import {uuid} from '../../utilities.js';

class SkillsAdmin extends HTMLElement {
  constructor() {
    super();
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
    this.sColl = db.getCollection('skills');
    this.sColl.setChangesApi(true);
    this.dv = this.sColl.addDynamicView('skills');
    this.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.querySelector('container');
    this._updateView();
  }

  deleteSkill() {
    this.sColl.findAndRemove({id: this.skill.id});
    this.cancelEdit();
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
    // console.log("this.skill", this.skill)
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
    // console.log("this.skill.id", this.skill.id)
    let savedSkill = this.sColl.findOne({id: this.skill.id});
    // console.log("savedSkill", savedSkill)
    this.skill.delta = this.quill.getContents();
    this.skill.html = this.element.querySelector(".ql-editor").innerHTML;
    this.skill.achievements = this.skill.achievements || 0;
    if (savedSkill) this.sColl.update(Object.assign(savedSkill, this.skill));
    else this.sColl.insertOne(this.skill);
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
