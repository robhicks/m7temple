import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var __target

export function render (ctrl) {
elementOpen("a", "8a32f066-477b-4a83-95fc-d750b0e4592b", hoisted1, "onclick", function ($event) {
  var $element = this;
ctrl.go('/home/authenticated')}, "class", ctrl.stateContains('home'))
  elementOpen("img", "28e26a41-f9ea-46ba-918c-f64ffb6dfb41", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "c0fe848f-7e17-4154-8caf-9d050bf519ba", hoisted3)
  elementOpen("a", null, null, "onclick", function ($event) {
    var $element = this;
  ctrl.go('/help')}, "class", ctrl.stateContains('help'))
    text("Help")
  elementClose("a")
  if (ctrl.user.admin) {
    elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
    ctrl.go('/admin/users')}, "class", ctrl.stateContains('admin'))
      text("Admin")
    elementClose("a")
  }
  if (!ctrl.user.authenticated) {
    elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
    ctrl.go('/login')}, "class", ctrl.stateContains('login'))
      text("Login")
    elementClose("a")
  }
  if (ctrl.user.authenticated) {
    elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
    ctrl.go('/logout')}, "class", ctrl.stateContains('logout'))
      text("Logout")
    elementClose("a")
  }
elementClose("nav")
}
