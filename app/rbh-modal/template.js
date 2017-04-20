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
  elementOpen("div", "fc613adc-d4de-4ca8-87d0-4c8875034a15", hoisted1)
    elementOpen("div", "3a2d021e-401f-4e2e-9c00-fd583ba65d98", hoisted2)
      elementOpen("div", "fbc2999e-e828-4f46-9028-bfd95672f471", hoisted3)
        elementOpen("div", "fa3f12d7-1d55-42b4-a9c3-db1dd2bb83c7", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "2d07b233-7666-4ec9-af6f-26a737e4a87a", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "33959763-c20b-4c0f-8177-bd4158edc00e", hoisted6)
          elementOpen("button", "92dc2e32-fad3-4af2-9cec-2efdbedc2c76", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "1b3d8ac0-f878-482e-b60f-88886ca9465d", hoisted8, "onclick", function ($event) {
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
