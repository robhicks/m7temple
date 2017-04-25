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
  elementOpen("div", "47c4349f-5f64-4288-91a9-4e0292088b49", hoisted1)
    elementOpen("div", "714c9c96-6df2-4fe0-a0ba-8e45bed3d1a4", hoisted2)
      elementOpen("div", "7301965a-46e9-4218-a054-65df6bc6b770", hoisted3)
        elementOpen("div", "0e0b8349-a211-4723-9362-bddae4be1c2c", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "092e22f9-1f5c-4d84-afda-dd6fcba614f7", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "6be55c27-25de-4c8a-9ecf-d01c958b591d", hoisted6)
          elementOpen("button", "52a8bf53-cb36-4e33-99ee-fecf22572918", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "1ae36d9b-0353-4ddd-a48d-7ef3bd658bb2", hoisted8, "onclick", function ($event) {
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
