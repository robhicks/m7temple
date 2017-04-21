import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["class", "button primary", "href", "/login"]
var __target

export function render (ctrl) {
elementOpen("h1")
  text("Manila 7th Ward Temple and Family History Skills Development Site")
elementClose("h1")
elementOpen("h3")
  text("Access to this site requires user login")
elementClose("h3")
elementOpen("a", "8fd5da46-1069-4759-a79b-1b7e7996e7d2", hoisted1)
  text("Please Login")
elementClose("a")
}
