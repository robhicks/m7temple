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
  elementOpen("div", "c01c06a7-e4cd-4835-9c52-3dc9d1fb99e4", hoisted1)
    elementOpen("div", "0f447860-bc61-49be-8aea-2f70c2ff9922", hoisted2)
      elementOpen("div", "43dbee8d-9147-4af1-81e9-da154247381d", hoisted3)
        elementOpen("div", "cc3f1c6a-ebd6-48ee-9f1a-74c391461f68", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "4b378f56-ee74-4655-9e55-8dee7a9a131a", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "12f3929e-f380-45a6-b51b-39d6c9d1e6c9", hoisted6)
          elementOpen("button", "12d06497-9405-4b6b-872a-1e04df4f40d2", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "42791799-c9b7-47dd-9f6d-08aa7d1884f1", hoisted8, "onclick", function ($event) {
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
