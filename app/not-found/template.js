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
elementOpen("a", "3975353a-1a1d-42ce-bf15-8a365c6b0b60", hoisted1)
  text("Home")
elementClose("a")
}
