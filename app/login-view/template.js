import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "buttons"]
var hoisted2 = ["class", "provider"]
var hoisted3 = ["src", "/img/facebook.svg", "alt", ""]
var hoisted4 = ["class", "provider"]
var hoisted5 = ["src", "/img/google.svg", "alt", ""]
var hoisted6 = ["class", "privacy", "href", "/privacy-policy"]
var __target

export function render (ctrl) {
elementOpen("h1")
  text("Manila 7th Ward Temple and Family History Gifts Development Site")
elementClose("h1")
elementOpen("h3")
  text("Select a Provider")
elementClose("h3")
elementOpen("div", "070c1ac2-084a-4ed8-ab95-5b798ada4459", hoisted1)
  elementOpen("a", "1cd1a111-1d1b-402a-aa3f-402e3d5eb62a", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "3ac6195b-665d-4c5e-981c-1ae587beaddf", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "dc74c103-af5f-460f-a5c6-dc444757557d", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "2e2e63a2-7dfc-4979-b8b9-dee0c4e968c2", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "eff3bac6-c975-4c3c-87d8-830d61169984", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
