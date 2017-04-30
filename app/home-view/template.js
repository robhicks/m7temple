import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["class", "button primary", "href", "/login"]
var __target

export function render (ctrl) {
elementOpen("h1")
  text("Manila 7th Ward Temple and Family History Gifts Development Site")
elementClose("h1")
elementOpen("h3")
  text("Access to this site requires user login")
elementClose("h3")
elementOpen("a", "8478bd69-da38-472a-9948-79f34f8b3f11", hoisted1)
  text("Please Login")
elementClose("a")
}
