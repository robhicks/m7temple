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
  elementOpen("div", "80dbdea7-21e4-494a-bf5d-fcd3a45f0f29", hoisted1)
    elementOpen("div", "ce836fb7-3c64-4bbb-8b96-3a4f061b253f", hoisted2)
      elementOpen("div", "b3041b32-e139-464e-941d-833bece7ce14", hoisted3)
        elementOpen("div", "66016700-ed17-415c-8a68-a03937392957", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "7aecfbb0-cf81-4e7f-bf41-06827bfa59aa", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "72e83d24-491a-4527-8150-af5f3e4c7267", hoisted6)
          elementOpen("button", "a0d73a33-1e16-49e2-9fe6-97c4d954d1cd", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "60b7e0fa-40f6-4ac9-bfe0-ce0b28f1d60c", hoisted8, "onclick", function ($event) {
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
