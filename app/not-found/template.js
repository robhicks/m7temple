import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["href", "/home", "class", "button primary"]
var __target

export function render (ctrl) {
elementOpen("h1")
  text("404")
elementClose("h1")
elementOpen("h2")
  text("Page Not Found")
elementClose("h2")
elementOpen("a", "dd4ab34a-c41c-4f9d-a25a-71e9498f26f1", hoisted1)
  text("Home")
elementClose("a")
}
