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
elementOpen("div", "0487d04b-20e1-4538-9614-6c53f4d92bbd", hoisted1)
  elementOpen("div", "e2da703d-4cef-4553-bbf9-cf1792cd15d0", hoisted2)
    elementOpen("div", "131185bc-ab09-439d-b18a-0bc23d1be83e", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "0b167893-f4e4-454d-a9ee-c18f64952444", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "421abb4b-0bf2-4c37-8805-0770ac126e5d", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "0f17b24b-c797-43c7-8997-2d44c9e31dae", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "7551d4b4-d276-4817-8822-835df35af61d", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "c814e56f-350a-421d-98fa-b64a1fb87832", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "e18e4814-5eab-4328-b795-e41a5fa493a0", hoisted9)
          elementOpen("img", "cb7059a6-f422-419c-ab89-4c99826d94a4", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "199606e1-f5a3-4df1-923c-f97f7bc529f0", hoisted11)
          elementOpen("img", "e780d7b1-ee22-4e9e-a620-0539e06f30ed", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "a75ed7da-9aff-41af-ab9d-ffc187989852", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "b79597b3-459b-410b-a13a-769574747072", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.achievements > 0 && ctrl.stories.length > 0) {
        elementOpen("button", "03e968e8-5ceb-432d-9f92-c87d288ce9a3", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.showSharedExperiences(ctrl.iid)})
          elementOpen("img", "8539718f-2140-4c43-83b0-38c82587ac57", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "f123f605-d949-4cfa-be01-7e02ce7e95e8", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "9cb485f2-bdd7-45d1-ae55-bfa157d08da7", hoisted18)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "159ad922-03be-4633-aa52-24e586c8006a", hoisted19)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "19d1c440-52c6-4013-afd7-215e3c5246d5", hoisted20, "onclick", function ($event) {
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
  elementOpen("div", "16edfea2-5d54-4828-a13b-8724322b5884", hoisted21)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "24297d83-1f89-49d3-9477-83a9b497ea3b", hoisted22, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "4b4dd7b2-fe40-4c5a-a678-cfb4229426bf", hoisted23)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "0cf10fa2-dba4-4743-bc9f-b216591eb6f3_" + $item
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
          var $key = "863a0cfc-23da-4082-b4e2-fc73730deea9_" + $item
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
      elementOpen("textarea", "ced50062-dfc8-4de3-b2e9-e135bee28193", hoisted25)
      elementClose("textarea")
      elementOpen("div", "02a513b3-4c8b-4b0d-9d73-8f7a03d827c6", hoisted26)
        elementOpen("button", "80f8c81f-74e7-44b2-b19e-060052a8bea9", hoisted27, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "b83dd280-81c2-4d48-8132-beef3518a5c4", hoisted28, "onclick", function ($event) {
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
      elementOpen("textarea", "0d56dfc1-c34d-414e-a0cb-2be5eaf367e6", hoisted29)
      elementClose("textarea")
      elementOpen("div", "cdfcd5cc-9c1d-4315-935c-c5b2b136f1b8", hoisted30)
        elementOpen("input", "769ec960-46b1-4119-8e28-463bf099aa56", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "436c52c3-15f4-46e1-9963-db2267873646", hoisted32)
        elementOpen("input", "1e0beaf6-81b1-4ab5-b7fa-7583e0649048", hoisted33)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "52c2f002-133c-4de6-9ccb-dd6d9462c327", hoisted34)
        elementOpen("button", "f5517b9a-f1da-4620-89f9-2632702c872f", hoisted35, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "232862bc-dc4b-4512-88fa-06fd9bf2336d", hoisted36, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "ccf1185f-4423-4177-a247-6406ef2fd909", hoisted37)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
