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
    this.gift = this.sColl.findOne({id: giftId});
    let award = this.aColl.findOne({giftId, userId: user.id});
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
    let userAwardEntry = this.aColl.findOne({giftId: this.gift.id, userId: user.id});
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
    if (name && nVal !== oVal) {
      if (name === 'earned' || name === 'added' || name === 'pending') this[name] = Boolean(nVal === 'true');
      else this[name] = nVal;
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
    this.sColl = db.getCollection('gifts');
    this.tColl = db.getCollection('tickets');
    this.aColl.setChangesApi(true);
    this.sColl.setChangesApi(true);
    this.tColl.setChangesApi(true);
    this.adv = this.aColl.addDynamicView('awards');
    this.sdv = this.sColl.addDynamicView('gifts');

    document.addEventListener('awardsChanged', this._updateView.bind(this));
    document.addEventListener('giftsChanged', this._updateView.bind(this));
    this._updateView();
  }

  _combineGiftsAndAwards() {
    this._updateView();
  }

  delete(giftId) {
    let gift = this.sColl.findOne({id: giftId});
    let pendingOrEarned = this.aColl.where((award) => award.giftId === giftId && award.userId === user.id && award.type === 'pending' || award.type === 'earned');
    this._cancelEdit();
    if (pendingOrEarned.length > 0) {
      let modal = new RbhModal();
      modal.heading = 'Already Pending or Awarded';
      modal.body = 'Deleting this gift will remove all awards and pending awards. Click "OK" to delete this gift and all awards and pending awards.';
      modal.primary = 'OK';
      modal.cancel = 'Cancel';
      document.querySelector('body').appendChild(modal);
      document.addEventListener('rbhModalButtonClick', (evt) => {
        if (evt.detail === 'primary') {
          this.aColl.findAndRemove({giftId, userId: user.id});
          this.addAlert('This gift has been removed. You may add it again at any time.', 'bad');
        }
        modal.remove();
      });
    } else {
      this.aColl.findAndRemove({giftId, userId: user.id});
      this.addAlert('This gift has been removed. You may add it again at any time.', 'bad');
    }
    this._updateView();
  }

  disconnectedCallback() {
    this.aColl.removeDynamicView('awards');
    this.sColl.removeDynamicView('gifts');
    document.removeEventListener('awardsChanged', this._updateView.bind(this));
    document.removeEventListener('giftsChanged', this._updateView.bind(this));
  }

  showTicketEditor(giftId) {
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
    let ticket = this.tColl.findOne({id: this.ticket.id});
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

  showAwards(giftId, type) {
    // TODO: fix this too
    this._updateView();
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this._updateView();
  }

  _updateView() {
    this.awards = this.adv.data();
    this.gifts = this.sdv.data();
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
