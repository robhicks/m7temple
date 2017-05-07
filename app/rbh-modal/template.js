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
  elementOpen("div", "ed8129ef-c59e-4944-9887-3cd338dccf46", hoisted1)
    elementOpen("div", "646eb4a2-e1aa-4f30-bae2-e14236593cfa", hoisted2)
      elementOpen("div", "c84cbe35-e4dc-49df-ab0a-0c1c8338c828", hoisted3)
        elementOpen("div", "f8043769-22e6-44a9-a013-75dbc93e4d56", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "c35c2847-4364-4323-ba27-46d65aff60d9", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "c630f905-97aa-41d9-95ec-5da63ecddb15", hoisted6)
          elementOpen("button", "5e15dd2d-e697-4013-80de-2cc907356829", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "406430f0-48b2-4622-a815-48a8a7b7ab02", hoisted8, "onclick", function ($event) {
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
