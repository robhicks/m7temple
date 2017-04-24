import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './collapsable-panel.less';
import {uuid} from '../utilities.js';
import {user} from '../user.js';
import {RbhModal} from '../rbh-modal/rbh-modal.js';
import {db} from '../db.js';

class CollapsablePanel extends HTMLElement {
  constructor(config = {}) {
    super();
    this.config = config;
    this.collapsed = true;
  }

  add(skillId, addAlert = true, type = 'added', share = false, help = false) {
    this.skill = this.sColl.findOne({id: skillId});
    let award = this.aColl.findOne({skillId, userId: user.id});
    if (this.skill && award && !this.skill.multiple) {
      if (addAlert) this.addAlert('This skill was not added to your list of skills because it has already been added to your list. To see your list, check the My Skills checkbox.', 'bad');
    } else if (this.skill && !award) {
      this.aColl.insert({
        id: uuid(),
        skillId,
        userId: user.id,
        type,
        date: new Date().toISOString(),
        share,
        help
      });
      if (addAlert) this.addAlert('This skill has been added. You may apply for achieving this skill at any time.', 'good');
    }
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
    this.add(id, false);
    this.showSkillEditor = true;
    this._updateView();
  }

  applyForAchievment() {
    let userAwardEntry = this.aColl.findOne({skillId: this.skill.id, userId: user.id});
    let story = this.element.querySelector("textarea[name='achievement']").value;
    let share = this.element.querySelector("input[name='share']").value;
    let help = this.element.querySelector("input[name='helping']").value;

    if (userAwardEntry) {
      userAwardEntry.type = 'pending';
      userAwardEntry.date = new Date().toISOString();
      userAwardEntry.story = story;
      userAwardEntry.share = share;
      userAwardEntry.help = help;
      this.aColl.update(userAwardEntry);
      this.addAlert('You achievement application has been received. You will hear back shortly. While you are waiting, don\'t delete this skill from your list.', 'good');
      this._cancelEdit();
    }
  }

  attributeChangedCallback(name, oVal, nVal) {
    if (name && nVal !== oVal) {
      if (name === 'earned' || name === 'added' || name === 'pending') this[name] = Boolean(nVal === 'true');
      else this[name] = nVal;
      this._updateView();
    }
  }

  _cancelEdit() {
    this.showSkillEditor = false;
    this.skill = null;
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="collapsable-panel"></div>`;
    this.element = this.shadowRoot.querySelector('.collapsable-panel');
    this.aColl = db.getCollection('awards');
    this.sColl = db.getCollection('skills');
    this.tColl = db.getCollection('tickets');
    this.aColl.setChangesApi(true);
    this.sColl.setChangesApi(true);
    this.tColl.setChangesApi(true);
    this.adv = this.aColl.addDynamicView('awards');
    this.sdv = this.sColl.addDynamicView('skills');

    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('skillsChanged', this._updateView.bind(this));
    this._updateView();
  }

  _combineSkillsAndAwards() {
    this._updateView();
  }

  delete(skillId) {
    let skill = this.sColl.findOne({id: skillId});
    let pendingOrEarned = this.aColl.where((award) => award.skillId === skillId && award.userId === user.id && award.type === 'pending' || award.type === 'earned');
    this._cancelEdit();
    if (pendingOrEarned.length > 0) {
      let modal = new RbhModal();
      modal.heading = 'Already Pending or Awarded';
      modal.body = 'Deleting this skill will remove all awards and pending awards. Click "OK" to delete this skill and all awards and pending awards.';
      modal.primary = 'OK';
      modal.cancel = 'Cancel';
      document.querySelector('body').appendChild(modal);
      document.addEventListener('rbhModalButtonClick', (evt) => {
        if (evt.detail === 'primary') {
          this.aColl.findAndRemove({skillId, userId: user.id});
          this.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
        }
        modal.remove();
      });
    } else {
      this.aColl.findAndRemove({skillId, userId: user.id});
      this.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
    }
    this._updateView();
  }

  disconnectedCallback() {
    this.aColl.removeDynamicView('awards');
    this.sColl.removeDynamicView('skills');
    document.removeEventListener('awardsChanged', this._updateView.bind(this));
    document.removeEventListener('skillsChanged', this._updateView.bind(this));
  }

  showTicketEditor(skillId) {
    this.showHelpEditor = true;
    this._updateView();
  }

  addTicket(skillId) {
    let ticket = this.tColl.findOne({skillId, userId: user.id});
    if (ticket) this.addAlert('You have already requested help with this skill. Someone will be contacting you shortly.', 'bad');
    else {
      this.tColl.insertOne({
        skillId,
        userId: user.id,
        date: new Date().toISOString(),
        type: 'open'
      });
      this.addAlert('Your reqeust for help has been logged. You will be contacted shortly.', 'good');
    }
  }

  hideAchievements(skillId) {
    // TODO: fix this
    this.showAchievements = false;
    this._updateView();
  }

  hideSkillEditor() {
    this.showSkillEditor = false;
    this._updateView();
  }

  showAwards(skillId, type) {
    // TODO: fix this too
    this._updateView();
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this._updateView();
  }

  _updateView() {
    this.awards = this.adv.data();
    this.skills = this.sdv.data();
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
