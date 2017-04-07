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
  elementOpen("div", "df634a6e-ae9d-4867-9815-fcffcaaf5f8b", hoisted1)
    elementOpen("div", "c0244eda-4828-4810-9dee-4fd743a31baf", hoisted2)
      elementOpen("div", "9688beca-2788-4a81-aa4c-68c9108371e3", hoisted3)
        elementOpen("div", "075de124-c92e-4e74-b83e-2a6faadced45", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "b6132dc0-73bd-4480-9bdc-060854c8e0e6", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "18a7b5d3-f2ed-44b9-969e-5859264f431f", hoisted6)
          elementOpen("button", "8c67f961-34cc-422c-a58a-7b58309288a3", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "89d250bf-e51f-4f3a-a41e-28a85bfa32b0", hoisted8, "onclick", function ($event) {
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
