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
  elementOpen("div", "35374f46-65bc-42eb-83e9-8e0e66e15c89", hoisted1)
    elementOpen("div", "c323ed56-13f2-44d5-a938-fd4f583d2dcf", hoisted2)
      elementOpen("div", "8e7a3061-4930-42a3-ae1c-545561b9ceca", hoisted3)
        elementOpen("div", "234e1a3c-fbd3-412c-a142-8503e1a3f3f5", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "27b0a494-3463-4468-afa6-42160c86a36a", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "8b2bbca9-8a68-40c5-8cec-c34ae6a1ee75", hoisted6)
          elementOpen("button", "394671bb-f486-43e8-82d5-02e64c0f8c38", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "2acab51e-5d17-4d4f-a729-1311dfaff3d3", hoisted8, "onclick", function ($event) {
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
