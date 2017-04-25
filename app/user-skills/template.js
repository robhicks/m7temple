import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "search-goals", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "add-button", ""]
var __target

export function render (ctrl) {
elementOpen("header")
  elementOpen("input", "4d37492f-800b-423c-beca-e14c1bbfd4fa", hoisted1, "onkeyup", function ($event) {
    var $element = this;
  ctrl.goalSearch(this.value)})
  elementClose("input")
  elementOpen("button", "886a0a0e-d0f9-40fd-9196-e01da6b6bfca", hoisted2)
    text("Add")
  elementClose("button")
elementClose("header")
elementOpen("section")
elementClose("section")
}
