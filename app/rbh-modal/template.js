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
  elementOpen("div", "d580624c-3925-44ea-b54e-db9fb07c82a4", hoisted1)
    elementOpen("div", "1396565a-95fe-40b4-9902-1e300adffa46", hoisted2)
      elementOpen("div", "68cbe4ed-cc58-464d-b553-74d6ecf619be", hoisted3)
        elementOpen("div", "4763a055-b87a-4d88-91ed-0df05a129507", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "e2485ad8-9b01-48eb-85b9-18d17f44e765", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "b3720359-361b-4ca3-a08a-b3ca1559763d", hoisted6)
          elementOpen("button", "b76052df-2135-4e6f-b5fc-c9c4c6ed48d4", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "b3f9f19b-1d9c-40cd-80fd-12a6fcc72b1c", hoisted8, "onclick", function ($event) {
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
