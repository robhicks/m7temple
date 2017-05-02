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
elementOpen("div", "5889d055-0c4c-4e81-ac56-10235dbe87f6", hoisted1)
  elementOpen("div", "7e7fd98e-83f5-4260-9535-cfdfde2d26ff", hoisted2)
    elementOpen("div", "d7ef2374-aefe-4082-93e8-276c56d8e55d", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "655de1ab-8c28-46dd-8266-5d29283dcfd0", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "9476c473-a3fa-454f-b379-375f70416122", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "ad8e0241-2093-401c-b7cf-0a9a4b3b85af", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "1a2afe66-1523-4983-8912-4869849ab629", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "1859e376-044a-4a0c-90a0-102832669326", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "ffb3c5a4-4e50-47c4-aea5-a622220e7649", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "172ea0a4-e91d-4cfb-86e2-83954b1fa90c", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "5d649003-e338-4c3c-ae1a-f535821103b7", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "d39d9faf-12a6-44ae-b92d-7e36b7b84378", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "0dd1acc8-8f7a-47b8-bcf0-986efdd2c2ac", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "88d9a083-ea86-4ab5-a899-2a0d043a0cd0", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "11eb8521-2da2-44e7-b390-197d484faa78", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "39e0df04-46de-4aa1-ae05-0c12239c8165", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "9e6d9e3c-2aa5-487d-94f7-2934d2706826", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "24b9c2e3-d1de-4dc9-9cb8-1e441a488f55", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "e8951b36-0f93-401d-9d39-20f77855b3ff", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "55b04487-9b94-4da9-9a03-259ea7274e24", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "35b6859d-b9d0-4070-805a-ad3d74bfea10", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "8abebb08-7527-4f97-becb-71c84f5a4a6f_" + $item
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
      elementOpen("textarea", "a15ea363-e5c3-43f6-ac1e-c581b1ff3367", hoisted23)
      elementClose("textarea")
      elementOpen("div", "eb2ad06a-9141-49b8-accf-a2b8a914e1ab", hoisted24)
        elementOpen("button", "c95cadf5-c1b7-441c-b954-0448fe1bac8e", hoisted25, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "1b28c06e-2ce1-4f11-9a7b-16d4709e4495", hoisted26, "onclick", function ($event) {
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
      elementOpen("textarea", "2346d6e2-1baa-42ab-ad19-2a984a153c76", hoisted27)
      elementClose("textarea")
      elementOpen("div", "25e62158-edec-4272-970d-a1fd7dd50f82", hoisted28)
        elementOpen("input", "3dd36bb1-d475-4191-9d33-88c674f60330", hoisted29)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "7f938afb-0d01-4430-aff0-683292f04480", hoisted30)
        elementOpen("input", "0b988f87-503e-4670-8e32-7939709f9313", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "ae95b9ec-ad00-4bc7-89b0-eadb8e3bfbdf", hoisted32)
        elementOpen("button", "47142a83-041f-40ba-8394-293b998e41a0", hoisted33, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "db7840e2-d2c4-48ba-a1fd-e8819dd09c48", hoisted34, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "5c2f114c-7b67-42c5-b222-93d35807aa82", hoisted35)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
