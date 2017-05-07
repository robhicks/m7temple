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
elementOpen("div", "9608440d-9fc6-4d28-b34f-3e5eff3d1260", hoisted1)
  elementOpen("div", "29f26b10-9950-4d83-8298-056bdfe0035c", hoisted2)
    elementOpen("div", "7a967738-3b7f-407c-b886-25d5bafbf387", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "f3f5628f-9472-43b7-a97e-8016978b123e", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "e81ed9c4-c730-4545-a519-00e41a101a2e", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "51586e85-4425-4255-b45c-7c9b160d88d4", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "27be3c98-4654-4e84-b730-b0c89e1fe797", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "70fefe1a-b2c5-43d2-8110-5c4cba71106f", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "22c145c3-5d37-4fb0-b5cf-9660722709f7", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "7c3295de-be22-49d6-8fbf-a2005efc01fc", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "849c9afe-d4fd-429b-86d8-492d7bac93e4", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "61f61d90-9232-42ba-a927-4592fdb6ca36", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "75da65b4-cd37-4157-818a-12502f2eec51", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "2fae0804-1e9f-462f-b5c1-48e98639b2c6", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.achievements > 0 && ctrl.stories.length > 0) {
        elementOpen("button", "f539bf49-c5fe-4202-9d38-94b7cecffb38", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.showSharedExperiences(ctrl.iid)})
          elementOpen("img", "52710a77-7008-4675-8aaa-10f34a4de09e", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "6d25ac9f-5e7e-4a95-9676-6750489ae57c", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "a6f8b0ed-c7eb-4135-8d7f-b1afa738d365", hoisted18)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "2bb20f3e-2b38-4984-b5b8-1e573d4d8061", hoisted19)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "19dfa7c4-2112-41be-8ed2-b1d75153015c", hoisted20, "onclick", function ($event) {
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
  elementOpen("div", "0b4a4807-ffaa-43eb-898e-91c5890f792e", hoisted21)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "55e9fbc3-8840-46dc-8097-91009fdd70b0", hoisted22, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "30e10720-50ba-4f4a-a739-20d549dfed1b", hoisted23)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "4c87026d-8970-457f-b909-fa7376aad1d1_" + $item
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
          var $key = "71fadd6f-1712-4f6b-acee-ce5fffc25f8e_" + $item
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
      elementOpen("textarea", "f0dce793-f5fa-4a76-bb12-a914f83dd5c7", hoisted25)
      elementClose("textarea")
      elementOpen("div", "b74c00a7-84db-4b15-819a-99ab19e8fb97", hoisted26)
        elementOpen("button", "4902655a-45a8-44a5-ab59-2e84332c585e", hoisted27, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "30e6db1d-464a-4506-b0d6-2ca2e6f1d47b", hoisted28, "onclick", function ($event) {
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
      elementOpen("textarea", "38760347-ad41-4150-8490-3ae3bdbf957f", hoisted29)
      elementClose("textarea")
      elementOpen("div", "ff6f8312-bf9e-4d0e-9933-88b5fd0de033", hoisted30)
        elementOpen("input", "732edbfa-1b90-45e7-9d19-20463b059828", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "bd62f9c2-d1e2-4df9-ac3f-5c60bfc7c9a8", hoisted32)
        elementOpen("input", "d2469947-04f9-4643-aa27-64692abaa119", hoisted33)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "dc8b94de-1d36-4e3f-bf20-2551b602ab6c", hoisted34)
        elementOpen("button", "9d154493-a0b9-41e5-841c-53e5959aa9fe", hoisted35, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "4466805a-3f6e-4705-a5a7-65905e9e540b", hoisted36, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "b8e49b48-e726-4f17-8f48-33d31be2ca56", hoisted37)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
