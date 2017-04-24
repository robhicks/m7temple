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
var hoisted23 = ["for", ""]
var hoisted24 = ["name", "request", "rows", "8"]
var hoisted25 = ["class", "button-group"]
var hoisted26 = ["type", "button", "class", "primary"]
var hoisted27 = ["href", "javascript:void(0)"]
var hoisted28 = ["name", "achievement", "rows", "8"]
var hoisted29 = ["class", "control-container"]
var hoisted30 = ["type", "checkbox", "name", "share", "checked", ""]
var hoisted31 = ["class", "control-container"]
var hoisted32 = ["type", "checkbox", "name", "helping", "checked", ""]
var hoisted33 = ["class", "button-group"]
var hoisted34 = ["type", "button", "class", "primary"]
var hoisted35 = ["href", "javascript:void(0)"]
var hoisted36 = ["class", "html"]
var __target

export function render (ctrl) {
elementOpen("div", "4bd52474-fa5c-415e-a398-256b72ebfceb", hoisted1)
  elementOpen("div", "906619a0-bca7-4e03-94cc-233989afbb92", hoisted2)
    elementOpen("div", "e2f71788-0f8f-4e38-beec-fe07c504b166", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "3a394219-379a-4fbc-bf7c-8f89a86a101c", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "be94c88f-1ca6-4fab-be12-371f174a5b2f", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "f68ad030-60dd-4e40-b245-ea9fa21fa4b4", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "c9ca00fa-20b1-4d4f-83e1-38a80a07491b", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "2b483294-cf73-408b-86aa-9e3aec600197", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "6a5948df-40cf-4881-aa4d-fdab98abd1c6", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "94c95b5e-34da-4a81-a649-3e1c937fa882", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "35b5c8d8-93f2-4a6d-a3cd-9ca801d3eb34", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "d6ac4928-b7f0-4657-8118-850ea7ba73ca", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "8bf778e4-fbef-44ed-a451-19f8af2783de", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "75c8ee86-6476-4753-ae41-49d21b6c68d9", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "6e365d2f-f37d-458e-87ab-b86b2a286535", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "fbe51515-b8e9-4214-8cc4-91781614d67e", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "91823206-7fe2-44ae-9c96-67a86d302e46", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "6d2d16a1-6bee-4c45-9f06-6efe0b4d4ea8", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "3000087d-568a-4536-a252-a2015023e301", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "96624b9f-f7ac-4d7b-a5df-8dd8080e8e7a", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "2d12eda9-5e8f-41be-b684-7ed548cfa9d3", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "8ee38371-0316-483c-b36c-7141555294c6_" + $item
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
      elementOpen("label", "48ccd32b-9587-49fd-8082-dfeed1d46209", hoisted23)
        text("If you want or need special help, please tell us about it")
      elementClose("label")
      elementOpen("textarea", "615fcb86-c218-4626-8414-81b44604d8d1", hoisted24)
      elementClose("textarea")
      elementOpen("div", "7ab2f799-008a-4ece-8e0f-4f8538d0a813", hoisted25)
        elementOpen("button", "73e9fa92-dea8-439d-bd27-3cf93b18c784", hoisted26, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "e5c16094-22bf-457e-94fa-49e1ee4bf8c8", hoisted27, "onclick", function ($event) {
          var $element = this;
        ctrl.hideHelpEditor()})
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
      elementOpen("textarea", "44f20f80-99eb-4cbc-8070-9da2066a231a", hoisted28)
      elementClose("textarea")
      elementOpen("div", "99f226fa-13b5-42d8-947f-c701212ec023", hoisted29)
        elementOpen("input", "2d8d5ba0-249d-4ddb-855f-8356361b76dd", hoisted30)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "a42ef929-d7c9-4ed2-9d89-a9457060c658", hoisted31)
        elementOpen("input", "dcb29777-3c31-4a04-ab0e-49333e6ebbc0", hoisted32)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "1e454b90-b228-4525-9256-8a3cbcbadeca", hoisted33)
        elementOpen("button", "7eb49a71-e7ba-40da-8397-d60ceaf4ae21", hoisted34, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "6bbe44d2-cd9b-43f6-86d8-250bc2c9d6c9", hoisted35, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "934c8273-3a90-4a2d-bad3-cee1cdd81351", hoisted36)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
