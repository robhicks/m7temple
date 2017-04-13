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
  elementOpen("div", "45537d73-243f-4300-ad00-705add5dcaaf", hoisted1)
    elementOpen("div", "97b3b5c1-b7e8-4f15-9193-79d889ad379f", hoisted2)
      elementOpen("div", "81dc113f-5a9f-46b7-bd60-ff4efd9b24e8", hoisted3)
        elementOpen("div", "bcafc4d0-9a9d-4342-9aee-3df1161d9fbd", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "96cfd67e-a89d-41af-87c0-0d9c267f0bde", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "21ef083c-44f1-41da-a09f-c704b9930f26", hoisted6)
          elementOpen("button", "d6094254-d393-4dd6-9955-056fe2d45a54", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "a702a38b-854e-49c2-bce6-5976b6376d49", hoisted8, "onclick", function ($event) {
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
