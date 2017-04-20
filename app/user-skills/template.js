import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "search-goals", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "add-button", ""]
var __target

export function render (ctrl) {
elementOpen("header")
  elementOpen("input", "b9b28265-0174-44b8-9406-2dd47440c66b", hoisted1, "onkeyup", function ($event) {
    var $element = this;
  ctrl.goalSearch(this.value)})
  elementClose("input")
  elementOpen("button", "b9ed71f7-9d9f-4cf2-b9c5-e30267c5c355", hoisted2)
    text("Add")
  elementClose("button")
elementClose("header")
elementOpen("section")
elementClose("section")
}
