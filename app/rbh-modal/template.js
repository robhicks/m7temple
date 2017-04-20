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
  elementOpen("div", "7a4d3da2-0471-4d29-925d-b590cd762cb0", hoisted1)
    elementOpen("div", "55f301cd-0519-434a-aacb-f194e5cbbf0e", hoisted2)
      elementOpen("div", "c97c7dbd-d8b7-4ce9-9a74-52536c150ae6", hoisted3)
        elementOpen("div", "6ba96054-9ebe-4efe-818f-e4172dacb919", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "42b8e42b-8604-4997-b9f0-57be2f72623c", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "deb24de8-aea9-44e1-a24b-218fae825282", hoisted6)
          elementOpen("button", "2b200d5a-45c8-413f-8182-febec51307c8", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "2a7eaff3-49ff-4f38-a34f-712f65c48c8f", hoisted8, "onclick", function ($event) {
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
