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
  elementOpen("div", "5f3c0421-22c1-4478-8b0b-d068b9be39e7", hoisted1)
    elementOpen("div", "86e8b421-21fd-433f-8147-cb931cbd4d91", hoisted2)
      elementOpen("div", "0460519c-547e-4f8d-a0f8-b8af8b2dd965", hoisted3)
        elementOpen("div", "d0527d3e-de82-40a2-a8f1-b8dc99fbea21", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "a016711b-db50-4e96-9186-eb167e29eab7", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "dcd0a3f8-f04e-4335-88c6-6d2445b8a4c9", hoisted6)
          elementOpen("button", "e96c66c1-2fb9-44be-8291-f6eb78dcb334", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "a08a4988-35ff-40d5-8e6e-75a928e87a8c", hoisted8, "onclick", function ($event) {
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
