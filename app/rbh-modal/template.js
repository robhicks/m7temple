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
  elementOpen("div", "789f8c16-1f69-4134-9c35-b1d67d00d10c", hoisted1)
    elementOpen("div", "90b4b60c-ed00-4391-aff0-7977ab1a9821", hoisted2)
      elementOpen("div", "afba3321-f4db-42bd-b358-5a74982c9373", hoisted3)
        elementOpen("div", "88ae86cc-5775-4fc4-9739-beca45c2b8f2", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "c2a3870b-ef30-4839-80ac-b80707f57bc9", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "59ddb536-af22-4194-8b70-3146a65a50c6", hoisted6)
          elementOpen("button", "167e8d6e-a54d-4f14-95ea-ba97803c67b4", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "6a9d2d5e-8d7b-4098-89cd-e82be85bc290", hoisted8, "onclick", function ($event) {
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
