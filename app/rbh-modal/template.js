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
  elementOpen("div", "286c99e4-b02d-48e6-a442-f86fa0592014", hoisted1)
    elementOpen("div", "43ad4868-e05c-4de7-816e-c88681e46d33", hoisted2)
      elementOpen("div", "80714bdb-7bd7-45ef-a07c-87003f07c35f", hoisted3)
        elementOpen("div", "f8beecec-a6d8-4275-bfd9-b6ec642c87bd", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "a6f5f367-05f5-4046-8170-da5f84f3b227", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "c31412e3-7827-4fb3-bbf1-0d865c845397", hoisted6)
          elementOpen("button", "3e33504e-0cd4-4111-835b-062a6507771a", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "540dacea-423e-4269-a980-6126e9a16d11", hoisted8, "onclick", function ($event) {
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
