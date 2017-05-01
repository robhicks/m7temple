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
elementOpen("a", "4dda3405-b47b-4685-adbf-a2d38e83f4e3", hoisted1)
  text("Home")
elementClose("a")
}
