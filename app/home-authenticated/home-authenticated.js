import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './home-authenticated.less';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';
import CollapsablePanel from '../collapsable-panel/collapsable-panel.js';
import {awards, skills} from '../db.js';

class HomeAuthenticated extends HTMLElement {
  constructor() {
    super();
    this.user = user;
    this.skills = [];
    this.mySkills = [];
    this.mine = false;
    this.adv = awards.addDynamicView('awards');
    this.sdv = skills.addDynamicView('skills');
    document.addEventListener('userUnauthenticated', () => {router.navigate('/login');});
    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('skillsChanged', this._updateView.bind(this));
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

    this._updateView();
  }

  _combineSkillsAndAwards(_awards = [], _skills = []) {
    return _skills.map((skill) => ({
      id: skill.id,
      title: skill.title,
      description: skill.description,
      multiple: !!skill.multiple,
      achievements: skill.achievements,
      html: skill.html,
      added: !!_awards.find((awrd) => awrd.skillId === skill.id && awrd.userId === this.user.id && awrd.type === 'added'),
      earned: !!_awards.find((awrd) => awrd.skillId === skill.id && awrd.userId === this.user.id && awrd.type === 'earned'),
      pending: !!_awards.find((awrd) => awrd.skillId === skill.id && awrd.userId === this.user.id && awrd.type === 'pending'),
      shared: !!_awards.find((awrd) => awrd.skillId === skill.id && awrd.userId === this.user.id && awrd.share)
    }));
  }

  disconnectedCallback() {

  }

  filterSkills(val) {
    let str = val ? val.toLowerCase() : null;
    if (!str || str === '') this.skills = JSON.parse(JSON.stringify(this.skills));
    else {
      this.skills = this.skills.filter((skill) => skill.title.toLowerCase().indexOf(str) !== -1
        || skill.description.toLowerCase().indexOf(str) !== -1
        || skill.category.toLowerCase().indexOf(str) !== -1);
    }
    this._updateView();
  }

  filterMine() {
    return this.skills.filter((skill) => skill.added || skill.earned || skill.pending);
  }

  toggleMine() {
    if (!this.mine) {
      this.viewSkills = this.mySkills;
      this.mine = true;
    } else {
      this.mine = false;
      this.viewSkills = Object.assign([], this.skills);
    }
    this._updateView();
  }

  _updateView() {
    let _awards = this.adv.data();
    let _skills = this.sdv.data();
    this.skills = this._combineSkillsAndAwards(_awards, _skills);
    this.mySkills = this.filterMine(this.skills);
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('home-authenticated', HomeAuthenticated);
