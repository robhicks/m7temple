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
elementOpen("div", "2fe2738f-2e20-478c-bd72-6e9d27eb2fcd", hoisted1)
  elementOpen("div", "10079a0e-fccf-45b7-8e84-84b1b9b884f3", hoisted2)
    elementOpen("div", "e0a61e10-7a12-46f8-bb9b-bfaf9785057e", hoisted3)
      text("" + (ctrl.heading) + "")
    elementClose("div")
    elementOpen("div", "8a3e11f2-0658-4472-b77e-b4c138f8fd20", hoisted4)
      if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
        elementOpen("button", "4ba7895b-4194-4d4d-bc93-94b60776f06a", hoisted5, "onclick", function ($event) {
          var $element = this;
        ctrl.add(ctrl.iid)})
          elementOpen("img", "cb1ece1c-5042-44cf-bd13-139c1eb2771e", hoisted6)
          elementClose("img")
        elementClose("button")
      }
      if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
        elementOpen("button", "9e7c61e6-66c5-4059-baa5-4a5e5b6b4a88", hoisted7, "onclick", function ($event) {
          var $element = this;
        ctrl.addAndShowAchievementEditor(ctrl.iid)})
          elementOpen("img", "ecd2cfd6-decb-4ddf-befa-44b0ade9d000", hoisted8)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.earned) {
        elementOpen("button", "7543b58f-a60b-42af-9aec-26a9e2a8491d", hoisted9, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'earned')})
          elementOpen("img", "ef71cf9b-1e94-480a-acbf-69f7e7bb4899", hoisted10)
          elementClose("img")
        elementClose("button")
      }
      if (ctrl.pending) {
        elementOpen("button", "a2538f21-4422-41a8-8527-d5fcdf0f5f2c", hoisted11, "onclick", function ($event) {
          var $element = this;
        ctrl.showAwards(ctrl.iid, 'pending')})
          elementOpen("img", "80c6c7f9-b3a4-4229-aba7-d3678496b4e5", hoisted12)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "6ced9b82-1887-40fd-b815-9e3b381f2831", hoisted13, "onclick", function ($event) {
        var $element = this;
      ctrl.showTicketEditor(ctrl.iid)})
        elementOpen("img", "5cbfa5b2-3609-4e77-859d-508ccadcc5a0", hoisted14)
        elementClose("img")
      elementClose("button")
      if (ctrl.added || ctrl.pending || ctrl.earned) {
        elementOpen("button", "be4cf389-43c0-496e-9349-10e187b5cb0f", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.delete(ctrl.iid)})
          elementOpen("img", "45830a59-1cf0-427e-a27e-9b7dc53c1b42", hoisted16)
          elementClose("img")
        elementClose("button")
      }
      elementOpen("button", "21b426c7-1a36-4eb3-8939-e7d1c70d7945", hoisted17)
        text("" + (ctrl.achievements) + "")
      elementClose("button")
      elementOpen("button", "173ed9c7-2df8-4be8-b639-e20f140496b1", hoisted18, "onclick", function ($event) {
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
  elementOpen("div", "06a82083-22ae-4550-8d55-260d663a5d71", hoisted19)
    text("" + (ctrl.description) + "")
  elementClose("div")
  if (ctrl.showAchievements) {
    elementOpen("achievements-wrapper")
      elementOpen("header")
        elementOpen("title")
          text("Achievements:")
        elementClose("title")
        elementOpen("button", "95da31a8-bf87-48c2-8b42-54e6ffb17a73", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.hideAchievements(ctrl.iid)})
          elementOpen("img", "e2c7a9e1-3dae-4d53-b329-df3a4b947bdc", hoisted21)
          elementClose("img")
        elementClose("button")
      elementClose("header")
      __target = ctrl.awards
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var item = $value
          var $key = "61200453-67f7-43d4-a7ad-4cd22f2aad24_" + $item
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
      elementOpen("textarea", "b9312b1b-d3ac-4059-9f3b-a34b21ad3862", hoisted23)
      elementClose("textarea")
      elementOpen("div", "0ada9e44-4463-4c4c-9886-b6206c0aef6a", hoisted24)
        elementOpen("button", "bdc977d7-161f-4d21-913e-38141470b85f", hoisted25, "onclick", function ($event) {
          var $element = this;
        ctrl.addTicket()})
          text("Make Request")
        elementClose("button")
        elementOpen("a", "b57bdb3e-9e7d-4333-a5d6-78b66e1bf4d0", hoisted26, "onclick", function ($event) {
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
      elementOpen("textarea", "6827d29d-4339-41da-9293-73262b87f9ba", hoisted27)
      elementClose("textarea")
      elementOpen("div", "3fb30409-5a52-4c78-bb26-a036b0480a63", hoisted28)
        elementOpen("input", "1aec7b27-0f1d-4a69-8b7e-f69b54611d80", hoisted29)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to share my experience")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "e2eeeb8a-369b-4a6c-aa94-d24e97005462", hoisted30)
        elementOpen("input", "3e7deb05-9cb9-4ae1-8b80-5716b4b7d157", hoisted31)
        elementClose("input")
        elementOpen("span")
          text("Yes, I'm willing to help others achieve this gift.")
        elementClose("span")
      elementClose("div")
      elementOpen("div", "1d945284-70ea-48ab-9a86-673db21b8160", hoisted32)
        elementOpen("button", "8346938e-bb6b-4a43-be2d-85a774210d25", hoisted33, "onclick", function ($event) {
          var $element = this;
        ctrl.applyForAchievment()})
          text("Apply")
        elementClose("button")
        elementOpen("a", "f5f0d030-3173-4956-8e3d-58b3ff746f57", hoisted34, "onclick", function ($event) {
          var $element = this;
        ctrl.hideGiftEditor()})
          text("Cancel")
        elementClose("a")
      elementClose("div")
    elementClose("gift-editor")
  }
  if (!ctrl.collapsed) {
    elementOpen("div", "622f143d-0cf5-4cb9-95a2-819015a59a1a", hoisted35)
      if (ctrl.html && ctrl.html !== '') {
              var el = currentElement();
              el.innerHTML = ctrl.html;
            }
            skip();
    elementClose("div")
  }
elementClose("div")
}
