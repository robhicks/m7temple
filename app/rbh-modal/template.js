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
  elementOpen("div", "67f6bb56-d7d8-45b0-bbef-27ec85eb1cc3", hoisted1)
    elementOpen("div", "ba0d72e3-8bca-48a0-8784-31020cf1b39f", hoisted2)
      elementOpen("div", "975bf747-7a8c-4986-a8ef-47da7e9d2208", hoisted3)
        elementOpen("div", "7fad6fa4-19cb-46f0-a9da-9368e1c59170", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "4976c9f6-c5a1-4fe2-8d2e-7a1e6bdeb172", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "beaa9a3c-57e9-4d58-9c1b-7e4ea5d6e08f", hoisted6)
          elementOpen("button", "e8214a3f-3a4a-4b0e-9dd7-3dd86e17fff9", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "957fa2c4-edd8-4d8c-8c74-f3d961786aca", hoisted8, "onclick", function ($event) {
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
