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
  elementOpen("div", "d082bd90-36ec-4f68-b7e0-908353f29e28", hoisted1)
    elementOpen("div", "94b3f317-7b68-4657-ae56-b8c747628c5b", hoisted2)
      elementOpen("div", "0aa46a2a-9bc6-40a0-a011-9cdb9ae8f32c", hoisted3)
        elementOpen("div", "417a1be4-f485-46a7-a969-319c836332ef", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "00f00a79-8635-480a-b6f6-290e1a5c3a60", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "5c79434d-21e3-47f4-b5dd-cf5b63199510", hoisted6)
          elementOpen("button", "ef4e9ae5-0a28-42e2-ba50-ad5f24f4c614", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "67296fe5-7716-4744-87b3-a9edf9829f8e", hoisted8, "onclick", function ($event) {
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
