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
var __target

export function render (ctrl) {
elementOpen("h1")
  text("Manila 7th Ward Temple and Family History Skills Development Site")
elementClose("h1")
elementOpen("h3")
  text("Select a Provider")
elementClose("h3")
elementOpen("div", "c5e8a8fd-1b86-4cc3-9f4d-ce2d159dfb0c", hoisted1)
  elementOpen("a", "27803176-cb39-4d0e-a064-7104b4713218", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook').login()})
    elementOpen("img", "8622db1e-43ac-4032-8423-6b89eb92360a", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "dba3aedb-6eb3-464b-bc53-38ac5af66eee", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('github').login()})
    elementOpen("img", "23e9affa-dfb5-4af6-b689-a765e0c649ae", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Github")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "a7d01fba-6c1c-42d1-8ff7-02bc7680be11", hoisted6, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google').login()})
    elementOpen("img", "c2dbdbc8-a9ab-430b-bccf-8382f2fcbe8f", hoisted7)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "44440fbe-e20e-46cc-a51a-5768998000fb", hoisted8, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('twitter').login()})
    elementOpen("img", "7d1e9e50-3be1-4f18-b665-92304d9d7b1b", hoisted9)
    elementClose("img")
    elementOpen("span")
      text("Twitter")
    elementClose("span")
  elementClose("a")
elementClose("div")
}
