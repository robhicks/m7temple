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
elementOpen("div", "6450d24b-1dd7-4789-ac80-0385c1fc8481", hoisted1)
  elementOpen("a", "cd877e64-5d2d-46ee-ad16-3361f41a356b", hoisted2, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('facebook', {display: 'page'}).login()})
    elementOpen("img", "07169705-a23b-4fbe-a69e-412951a9aa53", hoisted3)
    elementClose("img")
    elementOpen("span")
      text("Facebook")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "d57895a3-a90a-4a38-9231-642c8501318c", hoisted4, "onclick", function ($event) {
    var $element = this;
  ctrl.hello('google', {display: 'page'}).login()})
    elementOpen("img", "589a3281-5d0f-4b68-b8ff-8ceadb495544", hoisted5)
    elementClose("img")
    elementOpen("span")
      text("Google")
    elementClose("span")
  elementClose("a")
  elementOpen("a", "652e0824-e73d-4032-b340-35387c6234ad", hoisted6)
    text("Privacy Policy")
  elementClose("a")
elementClose("div")
}
