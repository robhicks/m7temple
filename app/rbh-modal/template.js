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
  elementOpen("div", "220e8912-caf9-4019-9371-41ad745763fe", hoisted1)
    elementOpen("div", "0d22a927-7eec-4143-86ed-3792c3240f1e", hoisted2)
      elementOpen("div", "da26e4c3-1bd2-4ff0-b6f7-ff6000016081", hoisted3)
        elementOpen("div", "8b9f6b52-cb1a-477f-bf2c-1abc960b9a9c", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "856c569d-ca63-43bc-82a7-e9a6c4524aa4", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "152356da-6655-42b2-9a7e-8a6458fbc02e", hoisted6)
          elementOpen("button", "a3affd6d-ca57-4b80-ac39-39b295889c7b", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "a0ea7e24-1aca-49ff-b3a2-5ef548ab5be4", hoisted8, "onclick", function ($event) {
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
