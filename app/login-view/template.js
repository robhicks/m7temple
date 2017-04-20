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
elementOpen("div", "5101d9a8-41c3-4efa-94ac-bcbef28085d3", hoisted1)
  elementOpen("a", "5d15ead1-1b30-4230-becc-5cfbaf783ae3", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "0f718a1a-24b6-409d-850f-109bca0364c4", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "5119b063-40cf-417c-97ee-f1262646e2e3", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('github').login()})
    elementOpen("img", "8503791f-8bae-4798-8a4b-26d85fb10b99", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Github")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "e6e260eb-e564-42a6-93d3-b60623c29a64", hoisted6, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "b4c3cf0d-023e-4bdd-b6f1-e814be83634d", hoisted7)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "9bc5e4a9-2195-4787-89c0-8fa2f845a4cf", hoisted8, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('twitter').login()})
    elementOpen("img", "a344de1a-0088-4320-a9c8-19a12afaae2f", hoisted9)
    elementClose("img")
    elementOpen("span")
      text("Twitter")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "7adcb38a-f4aa-402e-ab82-1e8bd5ebf443", hoisted10)
    elementOpen("span")
      text("Privacy Policy")
    elementClose("span")
  elementClose("a")
elementClose("div")
}
