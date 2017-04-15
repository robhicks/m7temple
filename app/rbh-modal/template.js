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
  elementOpen("div", "c5956220-66be-4d60-8ac6-7a2cd84ff6e8", hoisted1)
    elementOpen("div", "7d71745f-5ee6-48bc-bf8c-60a79cac9396", hoisted2)
      elementOpen("div", "ca889635-67ec-4df4-ba82-46393dfd0708", hoisted3)
        elementOpen("div", "d02e284c-a7a5-4646-bf9b-f202246bf23e", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "fb79a3bb-d6c4-4512-a877-ca2a73f00b8f", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "e34cab16-b9e4-44a0-91e1-6c6c38fe8def", hoisted6)
          elementOpen("button", "2d3abbd5-6057-438c-8133-73d1153f6208", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "dfd3bd83-18ca-45cb-b696-66eee9b1cbe0", hoisted8, "onclick", function ($event) {
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
