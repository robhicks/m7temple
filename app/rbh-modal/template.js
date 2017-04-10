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
  elementOpen("div", "a57422bf-e246-408a-953c-4456b71cf06a", hoisted1)
    elementOpen("div", "d46cdcfd-0df6-4e4d-90d5-294cbb68940c", hoisted2)
      elementOpen("div", "e3dc33c3-8bdf-4ddd-b07c-8a41731f08e8", hoisted3)
        elementOpen("div", "a01113b3-fc08-4beb-892f-a1bd33ddeeca", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "5e94737a-30c3-4403-bd9e-27ebe520de32", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "355201ed-419d-466a-8ee7-f1304e54972b", hoisted6)
          elementOpen("button", "4f1bc8aa-6b80-486d-b022-7e6a34e4a7dc", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "dff0dc57-3a69-40c5-93cb-fa12fa073427", hoisted8, "onclick", function ($event) {
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
