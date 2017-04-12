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
    this.adv = skills.addDynamicView('awards');
    this.sdv = skills.addDynamicView('skills');
    document.addEventListener('userChanged', () => {
      if (!user.authenticated) router.navigate('/login');
      else if (!user.admin) router.navigate('/home/authenticated');
      else this._updateView();
    });
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
    setTimeout(() => {
      user.getUser();
      this._updateView();
    }, 200);
  }

  _combineSkillsAndAwards() {
    this.skills.forEach((skill) => {
      skill.earned = this.skillEarned(skill);
      skill.added = this.skillAdded(skill);
      skill.pending = this.skillAppliedFor(skill);
    });
    this.skills = Object.assign([], this.skills);
    this.mySkills = this.filterMine();
    // console.log("this.viewSkills", this.viewSkills)
    this._updateView();
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

  skillAdded(skill) {
    let exists = false;
    if (skill && this.awards) {
      Object.keys(this.awards).forEach((key) => {
        let award = this.awards[key];
        if (award.skillId === skill.id) exists = true;
      });
    }
    return exists;
  }

  skillEarned(skill) {
    let earned = false;
    if (skill && this.awards) {
      Object.keys(this.awards).forEach((key) => {
        let award = this.awards[key];
        if (award.skillId === skill.id && award.earned) earned = true;
      })
    }
    return earned;
  }

  skillAppliedFor(skill) {
    let pending = false;
    if (skill && this.awards) {
      Object.keys(this.awards).forEach((key) => {
        let award = this.awards[key];
        if (award.skillId === skill.id && award.pending) pending = true;
      })
    }
    return pending;
  }

  filterMine() {
    let temp = [];
    let mySkills = [];
    if (this.awards) {
      Object.keys(this.awards).forEach((key) => {
        let award = this.awards[key];
        temp.push(award.skillId);
      });
    }
    temp.forEach((t) => {
      this.skills.forEach((skill) => {
        if (skill.id === t) mySkills.push(skill);
      })
    });
    return mySkills;
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
    console.log('home-authenticated::updateView');
    this.awards = this.adv.data();
    this.skills = this.sdv.data();
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}
customElements.define('home-authenticated', HomeAuthenticated);
