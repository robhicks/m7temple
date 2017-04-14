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
  elementOpen("div", "d59df4c0-4ea8-44b7-90c2-4d1553fa529f", hoisted1)
    elementOpen("div", "9eb7f204-cdab-4ffd-9868-d61f29e6d7d1", hoisted2)
      elementOpen("div", "cba2ec90-2e3e-4bd2-9dd2-96b6f96d8445", hoisted3)
        elementOpen("div", "fb1ac019-e788-410e-b73a-11eb3bd4a3b8", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "20160400-ae5e-41b9-96a3-a13207305762", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "1c7ce958-7cc4-45c9-b8ee-6c177b383c95", hoisted6)
          elementOpen("button", "fb8f9d06-21a2-4ade-9465-07c0c794930d", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "e5cb3431-87a4-4935-853f-101523a4d898", hoisted8, "onclick", function ($event) {
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
