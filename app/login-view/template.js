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
elementOpen("div", "87ca344d-5234-4101-9be7-d77130f549cf", hoisted1)
  elementOpen("a", "f38240b5-e0c5-46bb-81c8-0896399bd1a0", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook', {display: 'page'}).login()})
    elementOpen("img", "a6f2caea-bdde-4ea2-b9c4-856031d1f2ec", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "50ec0015-e66f-4338-a8b6-2f36e6eab692", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google', {display: 'page'}).login()})
    elementOpen("img", "a535a3c3-7e4a-44a6-819c-2817a3c79839", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "7ccaa933-6ade-489d-bae2-bd39ef5e72b5", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
