import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["class", "panel"]
var hoisted2 = ["class", "heading"]
var hoisted3 = ["class", "title"]
var hoisted4 = ["class", "button-group"]
var hoisted5 = ["type", "button", "name", "add"]
var hoisted6 = ["src", "/img/add.svg", "alt", ""]
var hoisted7 = ["type", "button", "name", "apply"]
var hoisted8 = ["src", "/img/skill-apply.svg", "alt", ""]
var hoisted9 = ["type", "button", "name", "earned"]
var hoisted10 = ["src", "/img/skill-earned.svg", "alt", ""]
var hoisted11 = ["type", "button", "name", "pending"]
var hoisted12 = ["src", "/img/skill-pending.svg", "alt", ""]
var hoisted13 = ["type", "button", "name", "add"]
var hoisted14 = ["src", "/img/help.svg", "alt", ""]
var hoisted15 = ["type", "button", "name", "delete"]
var hoisted16 = ["src", "/img/delete.svg", "alt", ""]
var hoisted17 = ["class", "achievements"]
var hoisted18 = ["type", "button", "class", "collapser", "name", "collapser"]
var hoisted19 = ["class", "description"]
var hoisted20 = ["type", "button", "name", "close"]
var hoisted21 = ["src", "/img/close.svg", "alt", ""]
var hoisted22 = ["name", "achievements"]
var hoisted23 = ["name", "request", "rows", "8", "placeholder", "Please tell us the nature of the help you need."]
var hoisted24 = ["class", "button-group"]
var hoisted25 = ["type", "button", "class", "primary"]
var hoisted26 = ["href", "javascript:void(0)"]
var hoisted27 = ["name", "achievement", "rows", "8"]
var hoisted28 = ["class", "control-container"]
var hoisted29 = ["type", "checkbox", "name", "share", "checked", ""]
var hoisted30 = ["class", "control-container"]
var hoisted31 = ["type", "checkbox", "name", "helping", "checked", ""]
var hoisted32 = ["class", "button-group"]
var hoisted33 = ["type", "button", "class", "primary"]
var hoisted34 = ["href", "javascript:void(0)"]
var hoisted35 = ["class", "html"]
var __target

export function render (ctrl) {
elementOpen("div", "2b2326ce-08ea-4dbd-90f4-765211b4043e", hoisted1)
  elementOpen("div", "c1aa02b7-17b8-442a-a583-adb02270ea42", hoisted2)
    elementOpen("div", "2d1ac7b7-9914-4a42-9191-b833098b5850", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "2869a7a3-0753-48e1-88f0-4b6b8183a169", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "66223dba-da8e-4e49-ad32-799ee469a078", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "9998477d-051b-4e47-b932-0264f6e78eec", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "1cc2f89b-b52d-47aa-9263-dc06604d0818", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "0b6510c2-35af-491a-96d3-0cb7ea9c1052", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "6510aff5-340b-4824-b5bd-ad080f252d5e", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "52ba3560-fa19-42d1-b6b6-7e9534199c0d", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "9c672ce8-f676-4d8d-a1e1-83fbb7825682", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "495c1b50-984c-441c-b120-aabf2ae75a12", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "107dbfbe-cff8-4323-b4f5-23108fd5e257", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "aee7db28-5a1f-413a-a2d6-ca6a403d7d85", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "7eed393f-f19d-4ffe-89e0-5984187c941b", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "04f53e06-6604-425d-8120-2180d0b790a8", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "0d1ec8fb-e52b-484a-9d08-07236c5bb680", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "be886c83-036e-494d-a35f-8f78aa17578a", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "13367f7c-651a-468a-9408-0c21c7ce3cb3", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "cfe2ac55-9639-4ed9-bb1e-f1d47e148952", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "3fa19bea-3f9a-4832-bc34-d0dc50b4fb05", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "da01a27b-e993-4401-acfb-e58d6a9780de_" + $item
          elementOpen("section", $key, hoisted22)
            if (ctrl.awards[item].pending && parseInt(ctrl.awards[item].skillId, 10) === parseInt(ctrl.iid, 10)) {
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
            if (ctrl.awards[item].awarded && ctrl.awards[item].skillId === ctrl.iid) {
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
  if (ctrl.showHelpEditor) {
    elementOpen("help-request")
      elementOpen("textarea", "6c1d0fa4-84f5-438b-ad56-16c13626fd8d", hoisted23)
      elementClose("textarea")
      elementOpen("div", "5c411d25-24f1-41f9-acfc-011f453e2ce1", hoisted24)
        elementOpen("button", "b4e496f1-4732-4bc6-b340-97ab6975c02d", hoisted25, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "fbd67b4e-ef63-4a3f-b4fa-4646bc5b2290", hoisted26, "onclick", function ($event) {
          var $element = this;
        ctrl._cancelEdit()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("help-request")
  }
  if (ctrl.showSkillEditor) {
    elementOpen("skill-editor")
      elementOpen("header")
        text(" \
              Applying for a Skill Achievement \
            ")
      elementClose("header")
      elementOpen("p")
        text(" \
              Congratultions on applying for a skill achievment award! Once you submit your request, \
              someone will review and approve it. Please share your experience, and sign up to help others. \
            ")
      elementClose("p")
      elementOpen("textarea", "144cbb76-f5a5-44ab-82ae-98cdcb2361ba", hoisted27)
      elementClose("textarea")
      elementOpen("div", "8aed38e8-4351-42e9-b99b-ef15de261ed0", hoisted28)
        elementOpen("input", "fe50cec0-b638-4ad3-93f5-8f098ad68e42", hoisted29)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "068df05a-ab4f-4256-aa42-e5c03e89f66e", hoisted30)
        elementOpen("input", "abf6370a-1e3b-4af5-b298-3c3616644b49", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "d99f9438-00ff-4b09-9361-a80ea0780a91", hoisted32)
        elementOpen("button", "b2d082a1-cdf4-44a6-84a4-6d5d0196966c", hoisted33, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "e86dffa8-f9d8-4d55-8b6b-d71158fd0c92", hoisted34, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "3652a07c-fa17-4ffd-95c1-c40729e4157b", hoisted35)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
