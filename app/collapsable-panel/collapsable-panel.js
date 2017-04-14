import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './collapsable-panel.less';
import {uuid} from '../utilities.js';
import {user} from '../user.js';
import {RbhModal} from '../rbh-modal/rbh-modal.js';
import {awards, skills} from '../db.js';

class CollapsablePanel extends HTMLElement {
  constructor(config = {}) {
    super();
    this.config = config;
    this.collapsed = true;
    this.adv = awards.addDynamicView('awards');
    this.sdv = skills.addDynamicView('skills');
    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('skillsChanged', this._updateView.bind(this));
  }

  add(skillId, type = 'added', addAlert = true, share = false, help = false) {
    let skill = skills.findOne({id: skillId});
    let award = awards.findOne({skillId, userId: user.id});
    if (skill && award && !skill.multiple) {
      if (addAlert) this.addAlert('This skill was not added to your list of skills because this skill has already been added to your list. To see your list, expand the skill.', 'bad');
      return false;
    } else if (skill && !award) {
      awards.insert({
        id: uuid(),
        skillId,
        userId: user.id,
        type,
        date: new Date().toISOString(),
        share,
        help
      });
      if (addAlert) this.addAlert('This skill has been added. You may apply for achieving this skill at any time.', 'good');
      return true;
    }
    return false;
  }

  addAlert(text, className, timeout = 5000) {
    this.showAlert = true;
    this.alertText = text;
    this.alertClass = className;
    setTimeout(() => {
      this.showAlert = false;
      this.alertText = '';
      this.alertClass = '';
      this._updateView();
    }, timeout);
    this._updateView();
  }

  addAndShowAchievementEditor(id) {
    id = parseInt(id, 10);
    this.add(id, false)
    this.skill = this.skills.find((skill) => skill.id === id);
    this.showSkillEditor = true;
    this._updateView();
  }

  applyForAchievment() {
    let userAwardEntry;
    let awardKey;
    if (this.awards) {
      for (let key in this.awards) {
        let award = this.awards[key];
        if (award.skillId === this.skill.id && award.userId === user.id) {
          awardKey = key;
          userAwardEntry = award;
        }
      }
    }
    let story = this.element.querySelector("textarea[name='achievement']").value;
    let share = this.element.querySelector("input[name='share']").value;
    let help = this.element.querySelector("input[name='helping']").value;
    if (userAwardEntry) {
      userAwardEntry.pending = {story, share, help, date: new Date().toISOString()};
      this.db.ref('/awards/' + awardKey).set(userAwardEntry);
      this.showSkillEditor = false;
      this.addAlert('You achievement application has been received. You will hear back shortly. While you are waiting, don\'t delete this skill from your list.', 'good');
    }
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (name && nVal !== oVal) {
      if (name === 'earned' || name === 'added' || name === 'pending') nVal = Boolean(nVal === 'true');
      this[name] = nVal;
      this._updateView();
    }
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="collapsable-panel"></div>`;
    this.element = this.shadowRoot.querySelector('.collapsable-panel');
    this._updateView();
  }

  _combineSkillsAndAwards() {
    this._updateView();
  }

  delete(skillId) {
    let skill = skills.findOne({id: skillId});
    let pendingOrEarned = awards.where((award) => award.skillId === skillId && award.userId === user.id && award.type === 'pending' || award.type === 'earned');
    if (pendingOrEarned.length > 0) {
      let modal = new RbhModal();
      modal.heading = 'Already Pending or Awarded';
      modal.body = 'Deleting this skill will remove all awards and pending awards. Click "OK" to delete this skill and all awards and pending awards.';
      modal.primary = 'OK';
      modal.cancel = 'Cancel';
      document.querySelector('body').appendChild(modal);
      document.addEventListener('rbhModalButtonClick', (evt) => {
        if (evt.detail === 'primary') {
          awards.findAndRemove({skillId, userId: user.id});
          this.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
        }
        modal.remove();
      });
    } else {
      console.log(awards.findAndRemove({skillId, userId: user.id}));
      this.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
    }
  }

  disconnectedCallback() {

  }

  hideAchievements(skillId) {
    skillId = parseInt(skillId, 10);
    let temp = false;
    for (let key in this.awards) {
      if (this.awards[key].skillId === skillId && this.awards[key].userId === user.id) temp = true;
    }
    if (temp) this.showAchievements = false;
    this._updateView();
  }

  hideSkillEditor() {
    this.showSkillEditor = false;
    this._updateView();
  }

  showAwards(skillId, type) {
    skillId = parseInt(skillId, 10);
    let temp = false;
    for (let key in this.awards) {
      let award = this.awards[key];
      if (award.skillId === skillId && award.userId === user.id) temp = true;
    }

    if (this.showAchievements && temp) {
      this.showAchievements = false;
    } else {
      if (temp) this.showAchievements = true;
      if (type) this['show' + type] = true;
      else this['show' + type] = false;
    }
    this._updateView();
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this._updateView();
  }

  _updateView() {
    this.skills = this.sdv.data();
    this.awards = this.adv.data();
    console.log("this.awards", this.awards)
    console.log("this.skills", this.skills)
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [
      'achievements',
      'added',
      'collapsed',
      'description',
      'earned',
      'heading',
      'html',
      'iid',
      'pending',
      'shared'
    ];
  }
}
customElements.define('collapsable-panel', CollapsablePanel);

export default CollapsablePanel;
