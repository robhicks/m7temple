import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var __target

export function render (ctrl) {
elementOpen("a", "763a13af-34e4-4d3b-bec4-274d958ba0d4", hoisted1, "onclick", function ($event) {
  var $element = this;
ctrl.go('/home/authenticated')}, "class", ctrl.stateContains('home'))
  elementOpen("img", "26c2cb8a-f959-437a-8936-5908be612324", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "dd12ef6b-27ce-4055-ba01-00dec25949ad", hoisted3)
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
