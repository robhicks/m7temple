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
elementOpen("div", "420c56cd-1ab5-4d6a-8311-fe1db0a68fb8", hoisted1)
  elementOpen("div", "20ff96e0-555f-4601-a622-05c65d1c67a7", hoisted2)
    elementOpen("div", "3d06aedc-95d0-44e9-a2a2-de9b8cbb5ad1", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "42a2045d-ff08-4c71-becf-2f37e9c5ec08", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "f46a6e54-1892-485b-b7a8-f0733f78de32", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "95ba2da7-e5de-445f-a1d6-c127b600584b", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "bb07b22a-5b56-4bf3-b9cb-7a440a82dc4b", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "c8f40777-a824-494f-8ab4-ce59aaaf6a7f", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "04812530-18cf-4297-a082-f93e5bfe3137", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "dd231fd6-d25f-49a1-967b-60d3c6fb5a8a", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "d027476e-7cbf-4ab6-b182-ddd1d293b63f", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "633b00c7-a2ef-42aa-827a-16eb5636254d", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "56fc5f88-5237-4cce-816d-e5050c51d13a", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "69fe07c3-a7fb-403b-ba2d-33cb1621e43f", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "442c85dc-d7bf-4d0e-bf3d-159900a3ec42", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "985de966-5044-4bd4-987f-b60357c08b15", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "34c75c83-f09a-47f5-938d-601721db4e1e", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "6affcc3d-d764-477d-8cf0-0c4d93ef6c45", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "b0d05da2-2e62-4712-93f9-0800a9a6193a", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "2925aad3-7c5d-472e-80b7-30e8ecb502d9", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "7a4f6079-bde0-4c4f-bf00-ea60ff3649a1", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "0efdc131-1eee-4bc0-a32a-7f803195d5a5_" + $item
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
      elementOpen("textarea", "1b503a33-1d22-4eaf-a54f-26e28e4a37c8", hoisted23)
      elementClose("textarea")
      elementOpen("div", "bef55d7b-8309-45d3-a570-3d5691f396e5", hoisted24)
        elementOpen("button", "eb37e316-62d9-4e3f-9805-1c83f325fdc5", hoisted25, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "a1f03d7a-002a-4afd-b8b4-f6b4d71cb9a9", hoisted26, "onclick", function ($event) {
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
      elementOpen("textarea", "f5790e0f-5fa9-416f-abe1-e3a536641e23", hoisted27)
      elementClose("textarea")
      elementOpen("div", "2ae82cee-9501-4729-b8da-fc76ed9f3583", hoisted28)
        elementOpen("input", "7bf01de3-8296-420f-bf3d-dd6b31457467", hoisted29)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "29c34b9f-bf3f-4a1a-8986-9411e60cff40", hoisted30)
        elementOpen("input", "863d8dfc-41d6-4ed8-bdf6-fe1dda67722c", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "7687a320-4a4d-4c7b-8899-96d5d40411d9", hoisted32)
        elementOpen("button", "d1684c0b-2ee3-4282-9929-3be054cb0468", hoisted33, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "e2dd4d37-b562-4106-b7b3-0a3cc5d0f15b", hoisted34, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "76e6ead8-a11c-411d-902a-d34983f7cc61", hoisted35)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
