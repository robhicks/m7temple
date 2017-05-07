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
elementOpen("div", "a2563804-cf46-43eb-93e5-b919db05b8f7", hoisted1)
  elementOpen("div", "f47f8a3a-6783-4c25-8120-c0e59c670ae3", hoisted2)
    elementOpen("div", "54c1087f-04c2-4876-9e7e-e74909ef592a", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "d705a89c-9c6e-400b-825c-761852089a4f", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "16645ea8-0a82-4dff-aadc-23c65e084a09", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "10d3a098-93c7-4eeb-816b-7bc5ea6ecae0", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "1f972f1d-f19f-4bf3-8f7b-69a60055440f", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "46de20ae-2331-4854-bbdd-ea42a300d445", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "06b997a2-20f8-44ab-8f60-cf6d7447b373", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "735b3e6a-4721-43bd-813f-8251d64a7349", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "4d18d810-7887-4cff-bffc-b63104442c7d", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "f3fc9583-d9c2-41fb-9b60-79ace852cb5e", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "82c60d1b-69ea-4bea-bd3d-dd1a0cb8008a", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "04e6c080-3429-4c0c-b8f5-bb1fbef7335a", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.shared && ctrl.earned) {
        elementOpen("button", "e7984aa6-2ab0-492a-9c1b-0aa8fc27b51f", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.showSharedExperiences(ctrl.iid)})
          elementOpen("img", "2be146ed-a39c-4afe-a995-1a4c9c95d6d4", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "d7c3a9df-62f2-4de1-83f3-8cf1d62b8449", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "e616c94e-121b-455d-9ff0-d39dfd3f0ffa", hoisted18)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "e629ab2f-a718-4d6b-a2e1-aa980fca4aa7", hoisted19)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "4849b566-f0b7-4251-b710-61c69ce206c7", hoisted20, "onclick", function ($event) {
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
  elementOpen("div", "505513fe-4644-4bfb-9602-dbfc7586e79a", hoisted21)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "4f7bc8a4-16fe-4a24-b627-ab1c24830435", hoisted22, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "6823f346-311f-426b-90ff-69a17754aa43", hoisted23)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "afce6b9f-4449-41f4-9e36-32d27008475e_" + $item
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
          var $key = "262db998-9a41-49af-b59b-2ce1a093d51a_" + $item
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
      elementOpen("textarea", "76085b7e-3610-4be3-8d4b-2257e76d7743", hoisted25)
      elementClose("textarea")
      elementOpen("div", "5675e641-1e2d-4748-9dc0-521ad9d275a9", hoisted26)
        elementOpen("button", "6ba72e5b-657f-47e6-a4aa-501c2ad01945", hoisted27, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "4f373764-4bd7-4c9c-899d-2f405f376656", hoisted28, "onclick", function ($event) {
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
      elementOpen("textarea", "f8061ed7-275f-4cbf-93c8-5c11541c0de5", hoisted29)
      elementClose("textarea")
      elementOpen("div", "26b2f1ea-6e03-4f67-9ecd-7d32e3d85dfd", hoisted30)
        elementOpen("input", "60df6ed2-556f-498d-8fa9-d7c45a517605", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "a60fc664-15f3-43f2-bd3a-8d8bcc1b81f4", hoisted32)
        elementOpen("input", "29552c61-065c-4adc-9373-62f7cbf09e23", hoisted33)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "3cfae6aa-7d5d-4e80-ae4d-739623085fd8", hoisted34)
        elementOpen("button", "1a95d48f-7d25-41c5-898b-c7c978d741eb", hoisted35, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "3fb3787e-16ba-45c8-8eed-1f489eaaac55", hoisted36, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "0c7053ce-8fa5-4a14-b95c-7cd98abe7730", hoisted37)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
