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
  elementOpen("div", "a5296eaa-208c-47cd-b852-4c9571382cf9", hoisted1)
    elementOpen("div", "4b02c0d3-dde0-435a-b106-0177506f9e6f", hoisted2)
      elementOpen("div", "ee854d74-ba7b-4f90-aad4-33f1414a95ce", hoisted3)
        elementOpen("div", "95ecaca0-50f9-4b32-9809-041c4dc58a9e", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "23cc20f8-0c09-4a23-b2d0-856fbecad4db", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "8c9236e2-18f3-4917-8efc-68c6328edbb4", hoisted6)
          elementOpen("button", "ff846583-1520-42a7-a35d-7669f37fcfc2", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "b0df66e0-2d31-4238-a6f7-282403926b34", hoisted8, "onclick", function ($event) {
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
