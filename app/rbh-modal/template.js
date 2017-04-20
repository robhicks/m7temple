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
  elementOpen("div", "885f5a5d-4133-43d8-a95d-8a30a6c0d26e", hoisted1)
    elementOpen("div", "291fdcf0-d8f7-4008-951d-da42b9d8f653", hoisted2)
      elementOpen("div", "7baf410c-90c1-4fd2-ac42-c64e7508697a", hoisted3)
        elementOpen("div", "a9e32a2e-c958-4f70-873d-a8279ece249a", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "acfb3bb3-804f-4ad4-be3c-a6e36b89cf60", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "7c05f968-7846-4f06-aec7-5d85e40d5e3c", hoisted6)
          elementOpen("button", "4e7ea4f0-faab-402d-ac0e-793d92a0aa42", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "8a64658b-3fa8-4798-8b1e-12fd6d310da7", hoisted8, "onclick", function ($event) {
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
