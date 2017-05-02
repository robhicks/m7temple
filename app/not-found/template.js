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
elementOpen("a", "90566dcc-1841-4be9-8d82-22f151090e89", hoisted1)
  text("Home")
elementClose("a")
}
