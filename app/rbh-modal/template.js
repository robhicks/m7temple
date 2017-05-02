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
  elementOpen("div", "44f8ed49-c6f3-4d08-a9fd-6dc092c0be1f", hoisted1)
    elementOpen("div", "d0bcf2e0-b530-4075-9a3a-9af6a2d183d5", hoisted2)
      elementOpen("div", "d3665fc7-6414-4247-a0a8-3a7e6731f35a", hoisted3)
        elementOpen("div", "20f83ab8-5335-492a-ae50-1dd0334fde13", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "f386c8b6-18ae-4c8b-ad15-c1365530f407", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "843d1e12-22ae-4405-8890-6476b64d5f9c", hoisted6)
          elementOpen("button", "7226b29d-10ec-4475-93fc-985f63b18904", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "b4ac50c8-92b1-49aa-93cd-9c4629bf75ce", hoisted8, "onclick", function ($event) {
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
