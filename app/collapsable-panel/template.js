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
var hoisted23 = ["name", "achievement", "rows", "8"]
var hoisted24 = ["class", "control-container"]
var hoisted25 = ["type", "checkbox", "name", "share", "checked", ""]
var hoisted26 = ["class", "control-container"]
var hoisted27 = ["type", "checkbox", "name", "helping", "checked", ""]
var hoisted28 = ["class", "button-group"]
var hoisted29 = ["type", "button", "class", "primary"]
var hoisted30 = ["href", "javascript:void(0)"]
var hoisted31 = ["class", "html"]
var __target

export function render (ctrl) {
elementOpen("div", "acfde1a1-8c07-46fd-9666-36e7e7d8daa8", hoisted1)
  elementOpen("div", "054e9228-aa27-439b-aeb3-7c9ceb3cdc71", hoisted2)
    elementOpen("div", "2f680d40-6407-4b7d-b83d-637a95b80261", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "c58c0617-9312-4338-81b2-cb9c2a9fb22d", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "c89eb81a-f4b1-44c1-8485-a89d2775ebbb", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "d7aa05e6-5988-4092-bf92-7fd1c0ad8792", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "77c0c866-ddc8-42a7-8020-40f1f0f371d6", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "f624f804-5abd-455d-841b-fdd8da3cbecd", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "b77167cf-ca81-47dc-a2a4-06b94016910a", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "16158cbd-b159-44cb-a727-4bb50868f644", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "37c563fd-7464-4aec-8f50-e1b148a5b3ae", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "5652d873-c82e-4c00-868f-62b845b90b5b", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "e9d54a76-7579-47c2-a918-ac8c1365427f", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.getHelp(ctrl.iid)})
        elementOpen("img", "52d7b5c3-f06b-4d4b-9365-2e7d7127a6d3", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "154800a5-d960-48f9-8cdb-4a58f4d182c0", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "ae2a4bb3-2441-4cb1-ad49-3788648e60f4", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "b4578257-2a1f-4e9a-87b6-fbe928804dcf", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "d7b3eb11-5b4e-41e1-92f6-70dc28c565b0", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "cdcc1ba4-0e6c-46f0-8350-96e3f9466c53", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "d6a23e3c-d02b-48bf-b756-768d438bb015", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "e0ef86b5-37c9-4e35-a482-6eff98e9c78a", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "e6f949ad-2834-43ac-8e97-2ffb56303b29_" + $item
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
      elementOpen("textarea", "4b7182e4-17a1-49bd-957b-8f7bd4f2ae90", hoisted23)
      elementClose("textarea")
      elementOpen("div", "b5b3060a-e8c5-4da0-b2f3-676651b2f3bc", hoisted24)
        elementOpen("input", "cf025985-9e90-4236-9dad-805cc5992001", hoisted25)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "6f8ae287-ea8c-40c7-be38-f87e56e255e5", hoisted26)
        elementOpen("input", "ab1185e2-c4d1-4cf5-9048-97e8055e0366", hoisted27)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "380707d6-8348-4286-9990-3c3e975bd06a", hoisted28)
        elementOpen("button", "2f6d612e-1b9c-4d20-9fa4-7007885316e0", hoisted29, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "e5db90cf-dcbc-4b5f-b44c-b920a53fae83", hoisted30, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "61458610-a5ce-4f95-9d31-cca27efb29eb", hoisted31)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
