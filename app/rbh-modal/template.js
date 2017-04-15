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
  elementOpen("div", "12c418e1-72c0-41f3-a6c6-5cb9d913107e", hoisted1)
    elementOpen("div", "292ca649-e927-4031-8905-90f252bdbbd1", hoisted2)
      elementOpen("div", "cec0b9ab-ca51-4731-8f1e-aa4d8a1c3259", hoisted3)
        elementOpen("div", "8a670d01-243a-454e-99b6-b632df493ab5", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "a2338fd7-7c0f-4288-8265-861d9ed26efa", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "dce5bda0-70bf-4250-9f94-3b020b5e6148", hoisted6)
          elementOpen("button", "57c15864-08b4-4969-b696-f4b91986ae71", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "d274f239-5b0b-4b17-850f-6d4cc70f780a", hoisted8, "onclick", function ($event) {
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
