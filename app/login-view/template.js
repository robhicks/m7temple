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
elementOpen("div", "a0a5d18f-3cc7-4ca5-9bd2-60a73e61d9fb", hoisted1)
  elementOpen("a", "fe4cdf62-064f-401f-9453-551951f787e7", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook', {display: 'page'}).login()})
    elementOpen("img", "77e85b59-7734-477d-a9ac-a063cf243c22", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "4108807a-61cb-49ce-82df-9df382a451ce", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google', {display: 'page'}).login()})
    elementOpen("img", "8cbcfd04-60c4-4240-b74b-50249f10cafe", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "6981d8b8-d990-45f7-9344-faca6f4b6bf1", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
