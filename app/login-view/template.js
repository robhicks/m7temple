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
elementOpen("div", "effdc4dc-d280-49de-b66c-f352c28a96ea", hoisted1)
  elementOpen("a", "123e5534-8517-48ad-bfb2-27cf601af907", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook', {display: 'page'}).login()})
    elementOpen("img", "5097014e-94de-41e9-a672-6edb1c2999cf", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "57ae45e3-2366-4bb5-8933-58d5af728762", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google', {display: 'page'}).login()})
    elementOpen("img", "bb543ea3-6296-4fe4-b08d-5f5552d0a7ce", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "31c6a12c-1786-4e9c-9e62-014964b29a18", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
