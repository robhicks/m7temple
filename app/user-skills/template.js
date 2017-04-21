import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "search-goals", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "add-button", ""]
var __target

export function render (ctrl) {
elementOpen("header")
  elementOpen("input", "682f6a88-8140-4890-81bb-5bc4f36e954f", hoisted1, "onkeyup", function ($event) {
    var $element = this;
  ctrl.goalSearch(this.value)})
  elementClose("input")
  elementOpen("button", "a094415b-a98f-42b3-bfb5-176f48251a43", hoisted2)
    text("Add")
  elementClose("button")
elementClose("header")
elementOpen("section")
elementClose("section")
}
