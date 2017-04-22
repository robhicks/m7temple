import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "search-goals", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "add-button", ""]
var __target

export function render (ctrl) {
elementOpen("header")
  elementOpen("input", "7e3a7719-aa04-469c-bf46-7bf9dec2a81e", hoisted1, "onkeyup", function ($event) {
    var $element = this;
  ctrl.goalSearch(this.value)})
  elementClose("input")
  elementOpen("button", "7f2d2337-8032-4b1a-a225-a9174df9fda7", hoisted2)
    text("Add")
  elementClose("button")
elementClose("header")
elementOpen("section")
elementClose("section")
}
