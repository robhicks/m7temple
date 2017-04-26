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
  elementOpen("div", "83a8f544-ef86-4296-9adb-d25b8d405d08", hoisted1)
    elementOpen("div", "46cdd357-5130-4a76-9227-e62b72aafad8", hoisted2)
      elementOpen("div", "3de88398-41da-42a9-bde1-115a69d5253c", hoisted3)
        elementOpen("div", "3e9a39ec-06ea-4cbd-b2f3-46a3a73d899c", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "6d7a53d3-b43e-44ee-b161-a95255d537b6", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "3ae162c4-4788-44a8-9d69-ebb5b67c85dd", hoisted6)
          elementOpen("button", "39887900-4802-4eb5-b154-eb33a84dbc05", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "15dd6cad-4fd8-489a-994c-6ea879ee7384", hoisted8, "onclick", function ($event) {
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
