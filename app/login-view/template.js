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
elementOpen("div", "e9bba7a1-4e80-4804-8552-05296d921688", hoisted1)
  elementOpen("a", "da8dd9bf-b8c0-4d38-8282-adf6d40dba7a", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "8d8ac458-acfe-496c-913a-8caff63280f0", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "715a2d5a-7f57-4704-bf37-950603a83a04", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('github').login()})
    elementOpen("img", "ab4790cb-12b9-42f2-ac7b-dd4db9b0ec10", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Github")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "d85dcbcd-2d9c-42b0-9536-55f61ea89e51", hoisted6, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "e0c89c1a-06be-4df9-b0a5-9b47ae5a8e01", hoisted7)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "6a32c145-905e-4597-bef7-90f2c43cf90d", hoisted8, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('twitter').login()})
    elementOpen("img", "141f56f7-b9ba-4ebf-a02f-b070a0e376b6", hoisted9)
    elementClose("img")
    elementOpen("span")
      text("Twitter")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "2c8e868d-6e0f-457e-88b4-50e8d31583bc", hoisted10)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
