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
  elementOpen("div", "ac3f17cc-3c85-4c37-b735-6284439c73be", hoisted1)
    elementOpen("div", "1415a4ec-a4fc-47fd-b1bc-f2af8c8ed9c1", hoisted2)
      elementOpen("div", "22259f80-9b2f-4c3b-8487-da9de7be938b", hoisted3)
        elementOpen("div", "0ef2a0b6-2642-42c2-9001-6a6423663755", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "2f6230a6-a060-48e8-96d3-a6322fcdbddb", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "7026774a-4d8e-4088-a2ba-f01c5b6c9ebb", hoisted6)
          elementOpen("button", "17cbaddb-03ae-4a7d-8c10-c884c0ff50bc", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "dd923e27-6ff0-4364-81f0-8d649d8596c5", hoisted8, "onclick", function ($event) {
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
