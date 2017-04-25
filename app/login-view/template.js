import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "buttons"]
var hoisted2 = ["class", "provider"]
var hoisted3 = ["src", "/img/facebook.svg", "alt", ""]
var hoisted4 = ["class", "provider"]
var hoisted5 = ["src", "/img/github.svg", "alt", ""]
var hoisted6 = ["class", "provider"]
var hoisted7 = ["src", "/img/google.svg", "alt", ""]
var hoisted8 = ["class", "provider"]
var hoisted9 = ["src", "/img/twitter.svg", "alt", ""]
var hoisted10 = ["class", "privacy", "href", "/privacy-policy"]
var __target

export function render (ctrl) {
elementOpen("h1")
  text("Manila 7th Ward Temple and Family History Skills Development Site")
elementClose("h1")
elementOpen("h3")
  text("Select a Provider")
elementClose("h3")
elementOpen("div", "c24ebfa6-2c0d-403f-bc78-41fb4d000824", hoisted1)
  elementOpen("a", "26082990-12f9-47fc-803a-77bf8871c261", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "4a4d7954-36f6-47e7-88fa-113ee0ef2393", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "95c471f5-4c6f-4a8b-b678-5ed4b227ba8d", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('github').login()})
    elementOpen("img", "82a8c0ff-4dbc-43f2-bf75-391e5aeaa1a5", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Github")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "1d74de86-b42f-4ccb-a38d-47fe2cdf184b", hoisted6, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "0b52b827-ef94-4109-b293-0a99d46c9855", hoisted7)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "fab42689-3d4b-4233-ba36-6caf9bdae3f6", hoisted8, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('twitter').login()})
    elementOpen("img", "63f07407-27d7-445e-80a4-d7768520fb04", hoisted9)
    elementClose("img")
    elementOpen("span")
      text("Twitter")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "c5f6c0a8-a8eb-44e0-becf-2e662241d54b", hoisted10)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
