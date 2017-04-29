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
elementOpen("div", "7f1e73b2-7113-43cd-a80e-9b60c92d5d33", hoisted1)
  elementOpen("div", "4ff7ae10-9f90-4ee2-8960-017adbf5b1c3", hoisted2)
    elementOpen("div", "076aad9e-8b73-47a9-abd5-312b885d361e", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "99ab54b8-8c5f-4cb5-9bb9-bf53ad2d5043", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "411f8ebc-582b-4b48-9a7a-766fa0608eab", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "4a9950a7-1fdc-4b53-8ca5-6485a1d06b25", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "f95c3ffc-080d-4505-b333-abeaf623e5df", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "64428de0-2848-440b-9714-80ccdc4023f2", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "90331c9d-dd17-4656-9ba1-90f9afd2cd82", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "d496f4a6-cf72-4cc3-9915-7b1cab7fc846", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "3f1bbbfa-c310-4ebc-8439-e0e0995a3b01", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "238b6009-27ad-4afc-9010-836c58ea32fa", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "e59f0955-7431-400d-adc8-c4cc3edd1140", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "35beb6d4-f2c0-4a29-93e2-530265e5df89", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "bd88ae04-d9cb-46d9-bfcb-6ce4097bb869", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "0808c14a-88b7-42e2-b3b0-ed1603605ecf", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "2675e4a3-d967-494b-966c-20d356a073c4", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "623c4d48-c3c6-44ca-b7ca-e24b2414501d", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "b52774fe-a2bb-4552-aca9-409a41e55649", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "9e9c0c9c-77d6-4da4-9ffa-618fbac54fb8", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "d26942f7-33a2-427b-a8ea-84bb1ce75e01", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "dd8c953a-b2b4-4b21-8957-e65134c81e55_" + $item
          elementOpen("section", $key, hoisted22)
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
  if (ctrl.showHelpEditor) {
    elementOpen("help-request")
      elementOpen("textarea", "50f8221e-ae83-4a0f-b046-f7cbb78795c1", hoisted23)
      elementClose("textarea")
      elementOpen("div", "1eb15306-6c85-478e-b545-a7354aed6bff", hoisted24)
        elementOpen("button", "1c8d3e2e-5b16-47fa-b6cf-0bfa1fc7bfdb", hoisted25, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "5518fec8-8b14-4658-b129-e5c9697f8feb", hoisted26, "onclick", function ($event) {
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
      elementOpen("textarea", "2c218e5a-a993-402d-b6d6-25c3715ca279", hoisted27)
      elementClose("textarea")
      elementOpen("div", "37383d0b-61c4-4260-a671-281c264abcb4", hoisted28)
        elementOpen("input", "db854764-d38e-4110-9128-fbabe422a546", hoisted29)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "dd5dcbff-0ebd-4fb4-9b21-1698829438e0", hoisted30)
        elementOpen("input", "568816c6-60f8-42fe-8d1a-4c80fc9fdc1e", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "7e9e42cb-f60c-485a-98d4-1215a14fc666", hoisted32)
        elementOpen("button", "3baa2b26-09f8-44a4-b87c-ba91f1510500", hoisted33, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "a42eaa2e-ec57-4cc4-87ec-65e92bed2d8e", hoisted34, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "2c6ca8c9-9c9e-4dee-a0c7-2306532425cf", hoisted35)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
