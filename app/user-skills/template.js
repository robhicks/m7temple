import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "search-goals", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "add-button", ""]
var __target

export function render (ctrl) {
elementOpen("header")
  elementOpen("input", "f9d61113-3942-4c9a-9559-33cca137d8e9", hoisted1, "onkeyup", function ($event) {
    var $element = this;
  ctrl.goalSearch(this.value)})
  elementClose("input")
  elementOpen("button", "5f7847a1-8e0e-464d-8788-d66929d036f1", hoisted2)
    text("Add")
  elementClose("button")
elementClose("header")
elementOpen("section")
elementClose("section")
}
