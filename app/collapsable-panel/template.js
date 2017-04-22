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
elementOpen("div", "95ed77f7-812e-4ad0-b7cb-fecaf7a9089a", hoisted1)
  elementOpen("div", "fc014f4d-1b46-452f-908b-b2bc9c286585", hoisted2)
    elementOpen("div", "912eff6b-c55b-4475-96b4-d5f2abd1359e", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "8fefdb64-1586-4ace-ab3a-ea9c6a03f2b2", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "c0d9283b-5adf-4b79-9b49-0bbe3fa77eb3", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "406ac9d5-6036-4a5e-a4d1-17597bbfb39c", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "df5816a6-8cf1-4964-9ff2-b92c85ab464b", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "4b009bbe-1bd6-4891-b459-e586af766218", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "ba870c06-3494-443a-81e2-9768c2451cbe", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "7d5d8858-4a63-4fc6-a5b8-946b926b2df8", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "da94c38a-da8f-434e-bba5-a6adf4e0cf92", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "edc86c0d-cf5f-432a-b415-88bccc5d3813", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "d039d207-c95b-4e0e-a0e8-05b3b5433dc5", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.getHelp(ctrl.iid)})
        elementOpen("img", "f37d1af7-a1e5-4a64-88c2-298cdfdd4cbd", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "ae1bc044-f27c-4532-b15f-74b83a0a6d58", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "06577b08-ace8-4e86-bb95-b5f6dca5eb8d", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "0c29444c-7008-4299-983c-6457e93c55ae", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "b8ac1e6a-ce4f-4d50-864d-a32af6d45cbb", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "de0e2b37-12ce-4b7a-876f-1780ed1dcb87", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "5d0edf7d-bf00-4efc-bee5-ebd7cf079240", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "d6db42b9-bbaa-4850-8d11-59f6af5e8465", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "dc5577c6-ba94-4306-bfe9-36d6786812d1_" + $item
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
      elementOpen("textarea", "ffd32d08-3036-4f1b-a0b8-edc323dc29fc", hoisted23)
      elementClose("textarea")
      elementOpen("div", "a1558717-8723-4033-8986-18cb22b8d597", hoisted24)
        elementOpen("input", "f9fda98c-a4a9-4186-a2e1-255a17e597ab", hoisted25)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "59327ff3-9ae1-4089-89b8-4b255a383a4b", hoisted26)
        elementOpen("input", "3a3c89c6-9210-4db2-909d-b266ae9135e4", hoisted27)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "7e1e17ad-93a0-4477-aa01-af91461dd44a", hoisted28)
        elementOpen("button", "69a778d2-8d90-4ff5-aa52-bc49a04e22ad", hoisted29, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "0b105be7-73cc-4cab-a50c-c1a667899deb", hoisted30, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "52f310dd-c319-4b30-9ed7-83f8ece8c14a", hoisted31)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
