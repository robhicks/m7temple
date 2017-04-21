import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './home-authenticated.less';
import {router} from '../app-router/app-router.js';
import {user} from '../user.js';
import CollapsablePanel from '../collapsable-panel/collapsable-panel.js';
import {db} from '../db.js';

class HomeAuthenticated extends HTMLElement {
  constructor() {
    super();
    this.user = user;
    this.skills = [];
    this.mySkills = [];
    this.mine = false;

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
    this.aColl = db.getCollection('awards');
    this.sColl = db.getCollection('skills');
    this.adv = this.aColl.addDynamicView('awards');
    this.sdv = this.sColl.addDynamicView('skills');

    this._updateView();
  }

  _combineSkillsAndAwards(_awards = [], _skills = []) {
    // console.log("_awards", _awards)
    return _skills.map((skill) => {
      let award = _awards.find((awrd) => awrd.skillId === skill.id && awrd.userId === this.user.id);
      return {
        id: skill.id,
        title: skill.title,
        description: skill.description,
        multiple: !!skill.multiple,
        achievements: skill.achievements,
        html: skill.html,
        added: !!award && award.type === 'added',
        earned: !!award && award.type === 'earned',
        pending: !!award && award.type === 'pending',
        shared: !!award && award.share,
        type: award ? award.type: null
      };
    });
  }

  disconnectedCallback() {
    this.adv.removeFilters();
    this.sdv.removeFilters();
  }

  filterSkills(val) {
    let str = val ? val.toLowerCase() : null;
    // console.log("str", str);
    this.sdv.removeFilters();
    if (str) {
      this.sdv.applyWhere((skill) => {
        if (skill.title && skill.title.toLowerCase().indexOf(str) !== -1) return true;
        if (skill.description && skill.description.toLowerCase().indexOf(str) !== -1) return true;
        if (skill.category && skill.category.toLowerCase().indexOf(str) !== -1) return true;
      });
    }
    this._updateView();
  }

  filterMine(skills) {
    return skills.filter((skill) => skill.added || skill.earned || skill.pending);
  }

  toggleMine() {
    this.mine = !this.mine;
    this._updateView();
  }

  _updateView() {
    let _awards = this.adv.data();
    let _skills = this.sdv.data();
    this.skills = this._combineSkillsAndAwards(_awards, _skills);
    this.mySkills = this.filterMine(this.skills);
    this.viewSkills = this.mine ? this.mySkills : this.skills;
    // console.log("this.viewSkills", this.viewSkills)
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('home-authenticated', HomeAuthenticated);
