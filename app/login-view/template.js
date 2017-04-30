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
elementOpen("div", "9a1bef49-e171-4b31-a218-8bff7cb772dd", hoisted1)
  elementOpen("a", "d3b5135c-7155-4d74-8b07-d4455fdd7537", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook', {display: 'page'}).login()})
    elementOpen("img", "7fe9c063-2337-4e08-89e2-14a208d704ab", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "835e2871-bd17-4c69-ab5d-cd2ec70275b6", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google', {display: 'page'}).login()})
    elementOpen("img", "f35072bc-0d13-4991-a8ab-21f03f9a7edd", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "cadd7932-af97-4f42-87c9-bfc0550fbef5", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
