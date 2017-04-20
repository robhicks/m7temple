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
elementOpen("a", "6f58f1de-12fc-4a2f-9c46-f7d5964482cd", hoisted1)
  text("Home")
elementClose("a")
}
