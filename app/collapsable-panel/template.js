import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["class", "panel"]
var hoisted2 = ["class", "heading"]
var hoisted3 = ["class", "title"]
var hoisted4 = ["class", "button-group"]
var hoisted5 = ["type", "button", "name", "add"]
var hoisted6 = ["src", "/img/add.svg", "alt", ""]
var hoisted7 = ["type", "button", "name", "apply"]
var hoisted8 = ["src", "/img/gift-apply.svg", "alt", ""]
var hoisted9 = ["type", "button", "name", "earned"]
var hoisted10 = ["src", "/img/gift-earned.svg", "alt", ""]
var hoisted11 = ["type", "button", "name", "pending"]
var hoisted12 = ["src", "/img/gift-pending.svg", "alt", ""]
var hoisted13 = ["type", "button", "name", "add"]
var hoisted14 = ["src", "/img/help.svg", "alt", ""]
var hoisted15 = ["type", "button", "name", "shared"]
var hoisted16 = ["src", "/img/shared-with.svg", "alt", ""]
var hoisted17 = ["type", "button", "name", "delete"]
var hoisted18 = ["src", "/img/delete.svg", "alt", ""]
var hoisted19 = ["class", "achievements"]
var hoisted20 = ["type", "button", "class", "collapser", "name", "collapser"]
var hoisted21 = ["class", "description"]
var hoisted22 = ["type", "button", "name", "close"]
var hoisted23 = ["src", "/img/close.svg", "alt", ""]
var hoisted24 = ["name", "achievements"]
var hoisted25 = ["name", "request", "rows", "8", "placeholder", "Please tell us the nature of the help you need."]
var hoisted26 = ["class", "button-group"]
var hoisted27 = ["type", "button", "class", "primary"]
var hoisted28 = ["href", "javascript:void(0)"]
var hoisted29 = ["name", "achievement", "rows", "8"]
var hoisted30 = ["class", "control-container"]
var hoisted31 = ["type", "checkbox", "name", "share", "checked", ""]
var hoisted32 = ["class", "control-container"]
var hoisted33 = ["type", "checkbox", "name", "helping", "checked", ""]
var hoisted34 = ["class", "button-group"]
var hoisted35 = ["type", "button", "class", "primary"]
var hoisted36 = ["href", "javascript:void(0)"]
var hoisted37 = ["class", "html"]
var __target

export function render (ctrl) {
elementOpen("div", "9d78e598-c2d4-4b3a-b845-251d17888be5", hoisted1)
  elementOpen("div", "da32a357-3d24-4027-ab0e-fc762e7f7c8d", hoisted2)
    elementOpen("div", "a1851fe6-92c6-4bc9-b2cb-d915828197b3", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "5dc41906-d92a-45bf-b4c6-a03faa7c6d38", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "9356849a-3207-4f98-92ad-8f32cca3cb53", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "d0fe6d8c-08c7-481e-b14b-b149c836bf15", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "71ef3f77-fd8f-484a-bb23-4a1c2104c8c3", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "b9176451-c90d-4cad-aa31-ec87ff695d27", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "580905ef-cfed-41a2-abc6-947121c85698", hoisted9)
          elementOpen("img", "295ccec0-ef20-46f4-b948-8a65caceede8", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "d11f113e-7815-4d1f-bda1-49795f618a0b", hoisted11)
          elementOpen("img", "47ef71ba-c688-46d8-b526-03ab916c4842", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "0f8abebd-6b52-495f-a903-0cc00b0cb8e9", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "dae6e98c-1c82-4736-8d8f-b52c5614f905", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.achievements > 0 && ctrl.stories.length > 0) {
        elementOpen("button", "f8d5310d-e0c9-4fb7-9ffe-8fc4aa882781", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.showSharedExperiences(ctrl.iid)})
          elementOpen("img", "62d9b068-b0f3-4fe8-a7f1-d45797f7633c", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "813a5fe7-33e1-4fae-9873-d4c573136dfd", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "fa980e75-041c-4811-bb79-dc17b827b267", hoisted18)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "15288192-b82e-4620-ba3f-072262899461", hoisted19)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "d5ae4e6f-ab89-4115-8fd5-2bd8a1ed3ff8", hoisted20, "onclick", function ($event) {
        var $element = this;
      ctrl.toggle()})
        if (!ctrl.collapsed) {
          elementOpen("span")
            text("▲")
          elementClose("span")
        }
        if (ctrl.collapsed) {
          elementOpen("span")
            text("▼")
          elementClose("span")
        }
      elementClose("button")
    elementClose("div")
  elementClose("div")
  elementOpen("div", "dc974eb8-a9f7-4419-99ab-a1326b6392b5", hoisted21)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "7ddf3f83-1047-4616-beed-4f558c2017b0", hoisted22, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "56248bbb-b033-4a69-9ddc-a5292e51be23", hoisted23)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "e0a65557-2200-4472-8e24-65bf7a88d4b5_" + $item
          elementOpen("section", $key, hoisted24)
            if (ctrl.awards[item].pending && parseInt(ctrl.awards[item].giftId, 10) === parseInt(ctrl.iid, 10)) {
              elementOpen("story")
                text("" + (ctrl.awards[item].pending.story) + "")
              elementClose("story")
              elementOpen("status")
                elementOpen("state")
                  text("Pending")
                elementClose("state")
                elementOpen("date")
                  text("Date: (" + (new Date(ctrl.awards[item].pending.date).toLocaleString()) + ")")
                elementClose("date")
              elementClose("status")
            }
            if (ctrl.awards[item].awarded && ctrl.awards[item].giftId === ctrl.iid) {
              elementOpen("story")
                text("" + (ctrl.awards[item].awarded.story) + "")
              elementClose("story")
              elementOpen("status")
                elementOpen("state")
                  text("Awarded")
                elementClose("state")
                elementOpen("date")
                  text("Date: (" + (new Date(ctrl.awards[item].awarded.date).toLocaleString()) + ")")
                elementClose("date")
              elementClose("status")
            }
          elementClose("section")
        }, this)
      }
    elementClose("achievements-wrapper")
  }
  if (ctrl.showAlert) {
    elementOpen("alert", null, null, "class", ctrl.alertClass)
      text("" + (ctrl.alertText) + "")
    elementClose("alert")
  }
  if (ctrl.showStories) {
    elementOpen("stories")
      __target = ctrl.stories
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var story = $value
          var $key = "e0374ca9-82c9-42f3-b71a-278a2a8df90a_" + $item
          elementOpen("story", $key)
            elementOpen("text")
              text("" + (story.text) + "")
            elementClose("text")
            elementOpen("username")
              text("" + (story.username) + "")
            elementClose("username")
          elementClose("story")
        }, this)
      }
    elementClose("stories")
  }
  if (ctrl.showHelpEditor) {
    elementOpen("help-request")
      elementOpen("textarea", "74ec3491-6404-4b76-bd50-cec1f100d458", hoisted25)
      elementClose("textarea")
      elementOpen("div", "97a962af-3fe9-451a-ac9f-43dda51c4af2", hoisted26)
        elementOpen("button", "7f70c587-f1de-4dc5-ac1c-db01f65e363c", hoisted27, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "2a078940-550c-4ad1-8e11-a720c9595247", hoisted28, "onclick", function ($event) {
          var $element = this;
        ctrl._cancelEdit()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("help-request")
  }
  if (ctrl.showGiftEditor) {
    elementOpen("gift-editor")
      elementOpen("header")
        text(" \
              Applying for a Gift Achievement \
            ")
      elementClose("header")
      elementOpen("p")
        text(" \
              Congratultions on applying for a gift achievment award! Once you submit your request, \
              someone will review and approve it. Please share your experience, and sign up to help others. \
            ")
      elementClose("p")
      elementOpen("textarea", "f1d00247-3002-4565-88c1-d128af46eb04", hoisted29)
      elementClose("textarea")
      elementOpen("div", "a337d7b2-95a3-452a-8376-babf98f57abc", hoisted30)
        elementOpen("input", "7b84584c-7b60-4bb4-9f7b-1baf291ab21f", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "d4dc581a-6eea-4484-9334-c0020e2bc748", hoisted32)
        elementOpen("input", "1beaa70a-2b86-4c5f-88af-97456ad3405e", hoisted33)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "ccb2778d-9b5b-4d2e-91dc-fd5145941c87", hoisted34)
        elementOpen("button", "73f3eb2b-0ddd-4fd4-ba85-8fc28f65ac93", hoisted35, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "6ec54a0e-162b-47fd-82d5-9e2fffb0f5ba", hoisted36, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "3f71ba30-0f7c-409f-9a9e-44a6ab0399e9", hoisted37)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
