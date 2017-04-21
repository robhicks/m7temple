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
elementOpen("div", "5c1cc8ff-4a14-4977-9945-07cadaf61b27", hoisted1)
  elementOpen("div", "b637b542-cf96-455b-a8e7-bfe68ad75a16", hoisted2)
    elementOpen("div", "300ae8fa-1394-48af-8d47-0134f83eea46", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "2768e9b8-fece-4d81-ac2b-0207664446b2", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "c2f3c51f-c7cb-4cd7-8762-e2b512138e99", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "53b3a2da-b76c-4d93-8ed5-db65de386016", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "47a7eadc-02e3-4c90-bbce-b82abb6b3caa", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "ba825b0d-2f90-4b31-b292-75d4900dee02", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "e953d3ef-f1d3-4c96-a3b4-759a80029153", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "5417db0c-12b9-4b5b-b667-e9e20b69d81d", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "63ec9694-2c7a-444f-acff-8b4d71f04f59", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "7f6c2221-0813-4333-b90c-2c8ac0217169", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "0dfaf51c-cdd2-4f8f-a20d-438858ebc81b", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.getHelp(ctrl.iid)})
        elementOpen("img", "cb50d225-89f8-4f82-8c64-af947b883f9a", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "e27d1dd2-9007-4450-99f7-ef55b609e9ce", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "b1fa9b1a-c285-4a30-b742-b0f1caa41e88", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "b7dd589b-17be-4474-af7f-c7b78bba2868", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "8440c210-8724-49d5-911f-7c471cb9b057", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "1044f706-1f3f-4c6f-bfac-fca3e4fa9f2e", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "1072ae3c-7e44-4464-97a3-436d72d836de", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "1477a650-a4f0-4d3f-a44d-3a9437c80bb0", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "f4a77fc0-778b-4e2f-b263-360b25ec9180_" + $item
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
      elementOpen("textarea", "6e0c4862-e072-4380-ba8c-484653e3d4b2", hoisted23)
      elementClose("textarea")
      elementOpen("div", "0faba21c-756e-4d6a-ae94-e74129eaaf14", hoisted24)
        elementOpen("input", "47318adf-83a5-42d0-a8bb-edf15e8a9400", hoisted25)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "f604b480-c225-4142-bd7e-e3d0364ec4dd", hoisted26)
        elementOpen("input", "e65d7900-4afd-4ea2-acb3-974c962708bb", hoisted27)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this skill.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "abcaf7f9-cbc0-423b-9a55-ba0ff0fa6100", hoisted28)
        elementOpen("button", "7d4c9ae3-beb7-47be-abb0-e783f0d8ae5a", hoisted29, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "27220492-4f91-4626-a090-19f24ca4a75f", hoisted30, "onclick", function ($event) {
          var $element = this;
        ctrl.hideSkillEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("skill-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "430e7308-0e39-4a21-84c8-deed578513ff", hoisted31)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
