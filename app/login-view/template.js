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
elementOpen("div", "79e0bca1-e3c6-4029-9633-c58f822193e3", hoisted1)
  elementOpen("a", "3b95a487-e87f-4069-9890-a987eddb4983", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "ee831e52-19bc-4cad-8c30-cbddcb741bb3", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "4ef38e95-46d6-4dc4-a7ef-b1567c9fcca6", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "b67f3c7b-6fc0-4d07-8157-12f8492b4726", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "635ed5ae-6511-41bb-a145-1e5a3410d99f", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
