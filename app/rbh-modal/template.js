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
  elementOpen("div", "838322ed-7152-4111-8390-d032e8d2f232", hoisted1)
    elementOpen("div", "d4abf0d1-de26-4347-a7d2-762215dacb0f", hoisted2)
      elementOpen("div", "bae1b3d7-cd73-4251-9441-0f9a928f2a47", hoisted3)
        elementOpen("div", "7c1e79af-6ca0-44d3-8b89-f69a4b0a92ab", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "00b5b4ba-86b2-4232-9e2f-84bfe941ce0a", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "66614e1a-426b-4ae1-9bcb-3b11aaeed8d9", hoisted6)
          elementOpen("button", "8a24d88f-3323-4e2f-b05b-c8be04fcda84", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "14cdc439-a636-4d38-ad8b-5964b716a575", hoisted8, "onclick", function ($event) {
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
