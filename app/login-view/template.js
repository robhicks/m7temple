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
elementOpen("div", "daf48035-7c9d-4e86-8e92-85fd846fa73f", hoisted1)
  elementOpen("a", "46caf710-c498-4fea-9a2b-0494ea5d7a44", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "5dd7a0c5-c1ef-4593-baf7-27da0b2f3526", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "c4e8f4eb-b464-49e6-ad5f-77cb1d69e720", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "0f31f9b1-1754-44bc-9f92-662915422320", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "77b66b56-5ca0-410e-8bc7-117ca4934a1f", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
