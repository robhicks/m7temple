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
  elementOpen("div", "4520a631-a36f-4c2e-986f-5cfc53feeb3d", hoisted1)
    elementOpen("div", "7297ef9e-05d4-47a8-b9bb-26061b7db9dd", hoisted2)
      elementOpen("div", "06400343-1a0f-4e4d-ac80-e61dea88a163", hoisted3)
        elementOpen("div", "e43501c5-cde5-4ecd-9900-bca9459ab83b", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "9ae023c0-5d31-40d7-8cc1-df060da755ee", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "295abf03-ea71-4901-9eb0-d30ce61df4e4", hoisted6)
          elementOpen("button", "e9a4264c-fd85-46fa-9ae5-f4901436f016", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "d81beef1-b5f1-44be-8041-29023b9707db", hoisted8, "onclick", function ($event) {
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
