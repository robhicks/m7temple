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

  add(giftId, addAlert = true, type = 'added', share = false, help = false) {
    this.showStories = false;
    this.gift = this.gColl.find().find((g) => g.id === giftId);
    let award = this.aColl.find().find((awrd) => awrd.giftId === giftId && awrd.userId === user.id);
    if (this.gift && award && !this.gift.multiple) {
      if (addAlert) this.addAlert('This gift was not added to your list of gifts because it has already been added to your list. To see your list, check the My Gifts checkbox.', 'bad');
    } else if (this.gift && !award) {
      this.aColl.insert({
        id: uuid(),
        giftId,
        userId: user.id,
        type,
        date: new Date().toISOString(),
        share,
        help
      });
      if (addAlert) this.addAlert('This gift has been added. You may apply for achieving this gift at any time.', 'good');
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
    this.showGiftEditor = true;
    this._updateView();
  }

  applyForAchievment() {
    let userAwardEntry = this.aColl.find().find((a) => a.giftId === this.gift.id && a.userId === user.id);
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
      this.addAlert('You achievement application has been received. You will hear back shortly. While you are waiting, don\'t delete this gift from your list.', 'good');
      this._cancelEdit();
    }
  }

  attributeChangedCallback(name, oVal, nVal) {
    // console.log("name, nVal", name, nVal)
    if (name && nVal && nVal !== oVal) {
      if (name === 'earned' || name === 'added' || name === 'pending' || name === 'shared') this[name] = Boolean(nVal === 'true');
      else this[name] = nVal;
      if (name === 'iid') this.stories = this.getStories(nVal);
      this._updateView();
    }
  }

  _cancelEdit() {
    this.showGiftEditor = false;
    this.showHelpEditor = false;
    this.gift = null;
    this.ticket = null;
    this._updateView();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="collapsable-panel"></div>`;
    this.element = this.shadowRoot.querySelector('.collapsable-panel');
    this.aColl = db.getCollection('awards');
    this.gColl = db.getCollection('gifts');
    this.tColl = db.getCollection('tickets');
    this.aColl.setChangesApi(true);
    this.gColl.setChangesApi(true);
    this.tColl.setChangesApi(true);
    this.adv = this.aColl.getDynamicView('awards') || this.aColl.addDynamicView('awards');
    this.gdv = this.gColl.getDynamicView('gifts') || this.gColl.addDynamicView('gifts');

    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('giftsChanged', this._updateView.bind(this));
    this._updateView();
  }

  _combineGiftsAndAwards() {
    this._updateView();
  }

  delete(giftId) {
    this.showStories = false;
    let gift = this.gColl.find().find((gft) => gft.id === giftId);
    let pending = this.aColl.find().filter((a) => a.userId === user.id && a.type === 'pending').length;
    let earned = this.aColl.find().filter((a) => a.userId === user.id && a.type === 'earned').length;
    // let pending = this.aColl.count({giftId: giftId, userId: user.id, type: 'pending'});
    // let earned = this.aColl.count({giftId: giftId, userId: user.id, type: 'earned'});
    let pendingOrEarned = pending > 0 || earned > 0;
    this._cancelEdit();

    if (pendingOrEarned) {
      let modal = new RbhModal();
      modal.heading = 'Already Pending or Awarded';
      modal.body = 'Deleting this gift will remove all awards and pending awards. Click "OK" to delete this gift and all awards and pending awards.';
      modal.primary = 'OK';
      modal.cancel = 'Cancel';
      document.querySelector('body').appendChild(modal);
      document.addEventListener('rbhModalButtonClick', (evt) => {
        if (evt.detail === 'primary') {
          this.addAlert('This gift has been removed. You may add it again at any time.', 'bad');
          if (earned) {
            if (gift.achievements > 0) {
              gift.achievements--;
              this.gColl.update(gift);
            }
          }
          let award = this.aColl.find().find((a) => a.giftId === giftId && a.userId === user.id);
          if (award) this.aColl.remove(award);
        }
        modal.remove();
      });
    } else {
      let award = this.aColl.find().find((a) => a.giftId === giftId && a.userId === user.id);
      if (award) this.aColl.remove(award);
      this.addAlert('This gift has been removed. You may add it again at any time.', 'bad');
    }
    this._updateView();
  }

  disconnectedCallback() {
    this.aColl.removeDynamicView('awards');
    this.gColl.removeDynamicView('gifts');
    document.removeEventListener('awardsChanged', this._updateView.bind(this));
    document.removeEventListener('giftsChanged', this._updateView.bind(this));
  }

  getStories(giftId) {
    if (giftId) {
      let awards = this.aColl.find({giftId});
      return awards ? awards.map((award) => ({
        text: award.story ? award.story : '',
        username: award && award.user && award.user.displayName ? award.user.displayName : ''
      })) : [];
    }
    return [];
  }

  showSharedExperiences(giftId) {
    this.showStories = !this.showStories;
    this._updateView();
  }

  showTicketEditor(giftId) {
    this.showStories = false;
    this.showHelpEditor = true;
    this.ticket = {
      date: new Date().toISOString(),
      giftId: giftId,
      id: uuid(),
      userId: user.id,
      type: 'open'
    };
    this._updateView();
  }

  addTicket() {
    this.showStories = false;
    let ticket = this.tColl.find().find((t) => t.id === this.ticke.id);
    if (ticket) this.addAlert('You have already requested help with this gift. Someone will be contacting you shortly.', 'bad');
    else {
      this.tColl.insertOne(Object.assign(this.ticket, {request: this.element.querySelector('textarea[name=request]').value}));
      this._cancelEdit();
      this.addAlert('Your reqeust for help has been logged. You will be contacted shortly.', 'good');
    }
  }

  hideAchievements(giftId) {
    // TODO: fix this
    this.showAchievements = false;
    this._updateView();
  }

  hideGiftEditor() {
    this.showGiftEditor = false;
    this._updateView();
  }

  toggle() {
    this.showStories = false;
    this.collapsed = !this.collapsed;
    this._updateView();
  }

  _updateView() {
    this.awards = this.adv.data();
    this.gifts = this.gdv.data();
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
