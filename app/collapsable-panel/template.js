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
elementOpen("div", "3c8a142d-5517-4484-b24b-44dab1fb94b9", hoisted1)
  elementOpen("div", "1695457a-c822-4d94-bd77-ab7274f0b14d", hoisted2)
    elementOpen("div", "b068144f-5023-4187-a084-aa2f85bf8032", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "558c5b5c-276d-4805-90ca-8a8264786aaf", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "7f04a92f-e4aa-47c1-9828-0287bbcc7bfc", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "d6fbf39d-b30f-47e6-a66a-5d4654b96aa3", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "eb488013-770c-4f70-a6fb-89e0f8b69647", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "f0d7cdf9-5d0a-400e-9946-da4538f69494", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "68958253-7e14-42c4-b5ce-e84ce4c1b8a7", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "f27ecf45-7358-415f-90f9-8b81f9f8162d", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "668eef20-86e6-4613-93db-c7f73fe35ed6", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "fb0c524f-43f8-4f6a-bdf8-6e3d2a43e225", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "c0861693-5fde-4981-8916-fff6ff35279c", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "2cfe4083-c93a-4215-90d2-4986468ebf53", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.achievements > 0) {
        elementOpen("button", "f5ea25cd-ea32-4a69-9f8e-214acec4fc74", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.showSharedExperiences(ctrl.iid)})
          elementOpen("img", "a69aa2a6-d9de-4b3b-b511-e130682f4bd2", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "be0442a9-ac13-465a-bbab-55e8898d2fdc", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "2e7511e2-e150-454f-a90c-6b40a9c77b7d", hoisted18)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "9d1273bb-5d39-41ab-bcd2-ea3a13f99f64", hoisted19)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "3ef5e46f-9301-4462-8b8b-328b3c49c94e", hoisted20, "onclick", function ($event) {
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
  elementOpen("div", "86a48371-2087-4710-9b35-83d3dd8051b7", hoisted21)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "03a1af64-9932-4749-90d9-bfd31c2c8f53", hoisted22, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "374c2f14-e261-42d7-a9a6-3f3fe6af4783", hoisted23)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "a91f6952-8e3c-4636-82b8-5b9687bb17e9_" + $item
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
          var $key = "117bd2e3-447e-4bc8-b97d-0aabe624e29e_" + $item
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
      elementOpen("textarea", "72b5bf26-40e2-41fe-8048-f804b73906bd", hoisted25)
      elementClose("textarea")
      elementOpen("div", "72486e8a-a5d9-4a7e-9a77-a631e4731b48", hoisted26)
        elementOpen("button", "47c91d63-e0fa-46a9-93b8-1823a28b1c43", hoisted27, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "5850490a-dc69-48e3-8e39-c58daf1405fb", hoisted28, "onclick", function ($event) {
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
      elementOpen("textarea", "dadc91cf-9fa3-4ba0-9d02-3c2eaf4dd610", hoisted29)
      elementClose("textarea")
      elementOpen("div", "06f97c07-f9c0-44f4-999c-44254bfa352d", hoisted30)
        elementOpen("input", "261db95f-cf59-4e7a-a300-cf09ffca4147", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "94715dd6-bc35-40cf-bb8a-8c14d045520f", hoisted32)
        elementOpen("input", "fa270de6-67dc-466b-ae66-8328f345a9f8", hoisted33)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "b347de37-2f06-4ee5-b6d2-5f3a40a08c9c", hoisted34)
        elementOpen("button", "9c6232e9-ccab-4b93-85c8-a38b05b3cef3", hoisted35, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "0b93f50a-dd89-4eeb-8148-20b0837ba22f", hoisted36, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "03bcdd2c-9862-4acb-b6cd-dbee8222a8d7", hoisted37)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
