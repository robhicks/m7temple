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
  elementOpen("div", "95e19c51-64f7-4904-a4ef-4bd0656cda47", hoisted1)
    elementOpen("div", "080de989-6b4e-4a50-85c7-eeffd1e5fe80", hoisted2)
      elementOpen("div", "0f794f92-7305-44e4-b3da-01dbd76ace42", hoisted3)
        elementOpen("div", "148501b3-52c9-41cc-a0ef-3c30d1a8bd92", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "1503f6e5-e539-42d9-80a1-5e5c2f65fdca", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "9ce7732f-c680-4ff0-899e-b235a783fae4", hoisted6)
          elementOpen("button", "8d4db2b5-dbd6-4122-aba3-d2369aeacd9b", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "d2598ce2-3655-4781-b20d-2fd98fb21278", hoisted8, "onclick", function ($event) {
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
