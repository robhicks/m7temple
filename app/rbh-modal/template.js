import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "overlay"]
var hoisted2 = ["id", "modal"]
var hoisted3 = ["id", "content"]
var hoisted4 = ["id", "header"]
var hoisted5 = ["id", "body"]
var hoisted6 = ["id", "buttons"]
var hoisted7 = ["type", "button", "name", "primary", "class", "button primary"]
var hoisted8 = ["type", "button", "name", "cancel", "class", "button minor"]
var __target

export function render (ctrl) {
if (ctrl._show) {
  elementOpen("div", "9163d92e-2f0f-4ca2-affe-cd103a42b2cf", hoisted1)
    elementOpen("div", "ac1635cc-b242-46c0-8c2f-392594ad98ec", hoisted2)
      elementOpen("div", "f066a6ce-9f3f-4368-afc0-2987b7a43c5d", hoisted3)
        elementOpen("div", "0006fc10-7f84-46ef-8684-6e90e1621466", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "678d7918-350d-423d-95d5-75a4e694a139", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "11803001-bc37-4f24-9f94-1363e440101c", hoisted6)
          elementOpen("button", "56c92035-ff15-448a-b28f-fccac2fdfdbc", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "59bff2b1-6084-4d77-bb18-a6c8fc1165f0", hoisted8, "onclick", function ($event) {
              var $element = this;
            ctrl._clickButton('cancel')})
              text("" + (ctrl._cancel) + "")
            elementClose("button")
          }
        elementClose("div")
      elementClose("div")
    elementClose("div")
  elementClose("div")
}
}
