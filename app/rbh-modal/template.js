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
  elementOpen("div", "cba9fdc6-34e2-4d40-9b4e-50fbe2957f7b", hoisted1)
    elementOpen("div", "ab08e317-50a5-4436-801b-234e38e74831", hoisted2)
      elementOpen("div", "cb97aef9-7fbb-4041-a7bd-8b34d4be11e2", hoisted3)
        elementOpen("div", "6f63f033-5474-43d1-8cc3-b7301f9ac7de", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "529d91ef-26c3-4629-8db5-8d86b27b59ba", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "db1122e9-0108-4c91-b427-e4b62db89fb1", hoisted6)
          elementOpen("button", "7a47499a-1c46-4e36-b559-4016eb2d5bdc", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "209cddc7-f6e3-46a6-995e-38165a84b5ba", hoisted8, "onclick", function ($event) {
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
