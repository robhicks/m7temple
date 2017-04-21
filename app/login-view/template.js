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
elementOpen("div", "a3db392d-3ef3-44be-825a-963185d009d8", hoisted1)
  elementOpen("a", "0a45256f-5d79-437c-b11d-9359e4cc5c47", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "4b35e983-2d22-49c5-9bb4-d7d287fa706a", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "d639c6e2-c087-4323-ad73-8952eac81c0b", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('github').login()})
    elementOpen("img", "40d9165d-c6da-4c41-bc5c-092bb0ba8ae4", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Github")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "6146b13d-eafe-4f06-bc0c-2e7981d95895", hoisted6, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "02c2b5cc-e973-4c5e-bb5d-823820af82ee", hoisted7)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "ea732d56-c104-41ef-8f71-a5d0cc3e2727", hoisted8, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('twitter').login()})
    elementOpen("img", "0b083008-8b8d-4b05-9415-f32e98fa8f0e", hoisted9)
    elementClose("img")
    elementOpen("span")
      text("Twitter")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "cece925c-06bf-420d-aa26-f665b68d6951", hoisted10)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
