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
  elementOpen("div", "882d79d2-856b-4a06-9b7d-9430cfbd008e", hoisted1)
    elementOpen("div", "20f96f71-08bb-47b6-b3c2-1b4c0c366aab", hoisted2)
      elementOpen("div", "b82aac7e-3c88-4887-a2c1-a27d6a351cc9", hoisted3)
        elementOpen("div", "5dfee494-4ef1-4a75-8bb7-07ed6194350e", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "f8bdaf56-057c-4bae-8804-65a30bd14c88", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "bb4e29fd-1fe7-45ea-957d-0a4a84b635b7", hoisted6)
          elementOpen("button", "9d168eca-ffe5-4e91-92c4-af39fae4c29c", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "24bb875e-74f6-42d9-baac-b33e4d2e4321", hoisted8, "onclick", function ($event) {
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
