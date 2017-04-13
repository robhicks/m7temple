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
elementOpen("div", "78daab05-d3ab-401c-aa7f-f71188841658", hoisted1)
  elementOpen("div", "3f33edd6-ba48-4dd3-9d98-3e4e05dcdcf1", hoisted2)
    elementOpen("div", "65b11e9b-64d5-4336-9e0b-3d1ef7b210f7", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "152ba55f-e46c-4e48-b64c-288778896ace", hoisted4)
      if (!ctrl.added && !ctrl.multiple) {
        elementOpen("button", "6aaebb8d-5d91-4db3-a04e-0535ab39d631", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "7a0b3b3e-bad3-4d4e-bc26-9e03a5301ed6", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "d89783a2-c5d9-44b4-96a6-ea834d3c5ff2", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "d0921a3e-a81e-4af1-8d9b-452d8babaeee", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "288f3391-0bea-42e3-a413-594fa1afda9a", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "bd27b4bd-ad80-4f3a-ad94-d2e8a30fe0c6", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "4339a2f8-01b3-49a7-a375-80600b5697d5", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "f84f1a11-3513-42ad-ae54-268b2f5eef7f", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "6bcbc7f5-7a7d-46bc-949d-201b73a169af", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.getHelp(ctrl.iid)})
        elementOpen("img", "b52bc1fd-ebfb-48f4-9f70-dbfb3748a912", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added) {
        elementOpen("button", "1b058a32-5a8d-4352-94f0-69927878bc73", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "0b5c54b9-9839-40c8-9118-9b5a3cd2bcb0", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "398b6c49-ea22-4a08-9e10-1251488f9324", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "11e51db2-c3bb-4384-8425-6243ea662e8a", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "b38a9031-1bcf-418b-b535-6ed9ba5b71b3", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "fed80351-7269-41e8-a41d-2a491b2082d5", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "f63e587e-9647-43b0-bfb0-d8beab5b6774", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "43d521a6-db8a-45c1-9f54-d6cdb1e7b279_" + $item
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
      elementOpen("textarea", "4e44084b-2b8b-46f0-b8a9-e39d61e083ee", hoisted23)
      elementClose("textarea")
      elementOpen("div", "9142e57c-3bea-41b6-be8d-37acc126c216", hoisted24)
        elementOpen("input", "26dc74da-0e2b-47c7-99c9-746180a81a96", hoisted25)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "ca316c48-b441-465f-8b4c-f5579c7688a6", hoisted26)
        elementOpen("input", "260ad4f5-c432-4fe4-a4c3-be17896e6da4", hoisted27)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "3aa326eb-7492-48ef-be65-cd68ac75ab2d", hoisted28)
        elementOpen("button", "1e3885dc-1b9c-430a-bc05-a44caf23267a", hoisted29, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "6f37301f-6f0b-4617-ab60-b9086bd4aa3f", hoisted30, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "21d32647-2d63-466f-8fc5-59a6cf37381d", hoisted31)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
