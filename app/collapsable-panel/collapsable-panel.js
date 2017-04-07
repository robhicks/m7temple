import {patch} from 'incremental-dom';
import {render} from './template.js';
import css from './collapsable-panel.less';
import {throttle} from '../utilities.js';
import {user} from '../user.js';
// import {firebase} from '../db.js';
import {RbhModal} from '../rbh-modal/rbh-modal.js';

class CollapsablePanel extends HTMLElement {
  constructor(config = {}) {
    super();
    this.config = config;
    this.collapsed = true;
    this.db = firebase.database();
    this.skills = [];
    this.db.ref('/skills/').on('value', (snapshot) => {
      this.skills = snapshot.val();
      this._combineSkillsAndAwards();
    });
    this.db.ref('/awards/').orderByChild('userId').equalTo(user.id).on('value', (snapshot) => {
      this.awards = snapshot.val();
      this._combineSkillsAndAwards();
    });
  }

  add(id, addAlert = true) {
    id = parseInt(id, 10);
    this.skill = this.skills.find((skill) => skill.id === id);
    let awarded;
    if (this.awards && this.skill) {
      Object.keys(this.awards).forEach((key) => {
        let award = this.awards[key];
        awarded = !!(award.skillId === this.skill.id && award.userId === user.id);
      })
    }
    let multiple = this.skill && this.skill.multiple;
    if (this.skill && !awarded || multiple) {
      this.award = {
        userId: user.id,
        skillId: this.skill.id,
        created: new Date().toISOString()
      };
      this.db.ref('/awards').push(this.award);
      if (addAlert) this.addAlert('This skill has been added. You may apply for achieving this skill at any time.', 'good');
      return true;
    } else {
      if (addAlert) this.addAlert('This skill was not added to your list of skills because this skill has already been added to your list. To see your list, expand the skill.', 'bad');
      return false;
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

  delete(id) {
    id = parseInt(id, 10);
    let skill = this.skills.find((skill) => skill.id === id);
    if (skill) {
      let addedKey = null;
      let awardedOrPending = false;
      for (let key in this.awards) {
        let award = this.awards[key];
        if (award.skillId === skill.id && award.userId === user.id) {
          addedKey = key;
          if (award.pending || award.earned) awardedOrPending = true;
        }
      }
      if (addedKey) {
        if (awardedOrPending) {
          let modal = new RbhModal();
          modal.heading = 'Already Pending or Awarded';
          modal.body = 'Deleting this skill will remove all awards and pending awards. Click "OK" to delete this skill and all awards and pending awards.';
          modal.primary = 'OK';
          modal.cancel = 'Cancel'
          document.querySelector('body').appendChild(modal);
          document.addEventListener('rbhModalButtonClick', (evt) => {
            if (evt.detail === 'primary') {
              this._deleteAward(addedKey)
            }
            modal.remove();
          });
        } else {
          this._deleteAward(addedKey);
        }

      }
    }
  }

  _deleteAward(key) {
    this.db.ref('/awards/' + key).remove()
      .then(() => {
        this.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
      })
      .catch((err) => {
        this.addAlert('There was an error removing this skill.', 'bad');
      })
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
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return ['heading', 'description', 'html', 'shared', 'collapsed', 'iid', 'earned', 'achievements', 'added', 'pending'];
  }
}
customElements.define('collapsable-panel', CollapsablePanel);

export default CollapsablePanel;
