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
elementOpen("div", "0d012a9d-38c0-4243-b0f5-fd4a75093b16", hoisted1)
  elementOpen("div", "222aa308-7a5c-4729-a944-6548d0a94124", hoisted2)
    elementOpen("div", "53effb0e-fcc7-431b-9dc7-968737bf27ea", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "29863053-925e-4340-b92d-cd96a8bd59b0", hoisted4)
      if (!ctrl.added && !ctrl.multiple) {
        elementOpen("button", "3fbff415-2c09-409e-9880-78ee369182d1", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "1b614105-0e43-4b44-b7cf-6cb2e223a1da", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "00db9071-516f-4fdf-91cb-cf44be5908f0", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "7eccf5d6-7271-4454-a195-1b90aab21ed5", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "86776552-b5fd-40fc-a90f-cdad8acfe4cf", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "e4fdabea-5f4a-4866-86e4-fc8b3d51aeb1", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "5f98ccd7-d287-4236-b6d4-a3a148b1d985", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "d8906d72-73e8-4733-996b-62dbcc5032ee", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "1fdead31-31c1-4e2f-91ac-a067abd47bfe", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.getHelp(ctrl.iid)})
        elementOpen("img", "2c66c44e-6f94-4872-aa3b-1af2f75a7f1f", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added) {
        elementOpen("button", "2b7d6ec3-2f02-458c-b71f-13579fc986ab", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "7cad5839-dcb1-4f39-8afe-d0c6191d6f64", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "af18648d-8847-4793-97b1-f471ee0c9f95", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "be15662c-b86d-40bc-b160-85617143dfea", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "8dfe9184-b557-416b-b6f7-e2dee331651e", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "bfadf033-9ddb-4bf6-b550-263c77e5e338", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "2f8fc253-8d45-4a3e-b6eb-d9bedc02db60", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "4dc837a5-0325-4909-b06a-009ea90aa74d_" + $item
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
      elementOpen("textarea", "b42b2549-e490-471b-bcb9-3e9dac8893c2", hoisted23)
      elementClose("textarea")
      elementOpen("div", "43fc5358-234a-4323-93f5-4f91dbc6fe55", hoisted24)
        elementOpen("input", "2e0650b5-8c64-4f1e-9678-73fcffacd2b1", hoisted25)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "7a33401d-cd9a-4225-98ff-d95f92ead94d", hoisted26)
        elementOpen("input", "b9c65d9e-bf25-4969-87ee-3e2471e19ecc", hoisted27)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "fdf0de73-db2c-4ce5-8954-ad5802e5c2ed", hoisted28)
        elementOpen("button", "28d19936-c979-43ee-a9e7-a8e076ef72a8", hoisted29, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "671f1a6b-bacb-4abb-9b3d-0cdb24b93b97", hoisted30, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "0dda4e05-15ec-4460-81e6-b81ce32c14c9", hoisted31)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
