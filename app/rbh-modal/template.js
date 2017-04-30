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
  elementOpen("div", "c7996c87-d946-480b-b7cd-e94d0393bbf8", hoisted1)
    elementOpen("div", "10298a31-c538-4dcc-8e85-f3e21f7134e9", hoisted2)
      elementOpen("div", "a819e693-16c2-45c9-9046-1724c8b2b0e8", hoisted3)
        elementOpen("div", "0f93f3c3-1186-4153-ac03-207029d8e76a", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "4bf5c748-0f3c-4c72-bac5-7cd679f6e1d7", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "3f0e26f8-9dfd-432e-9577-a45844335d2f", hoisted6)
          elementOpen("button", "8a9e67ff-4f03-410f-8ef8-a7afc21a75a7", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "6111989d-0bf9-4670-92a5-8fcff85e2a6d", hoisted8, "onclick", function ($event) {
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
