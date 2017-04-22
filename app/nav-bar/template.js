import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var __target

export function render (ctrl) {
elementOpen("a", "6ed6dc8a-09bd-471c-ae45-eb69da2789aa", hoisted1, "onclick", function ($event) {
  var $element = this;
ctrl.go('/home/authenticated')}, "class", ctrl.stateContains('home'))
  elementOpen("img", "df78c62e-3e5d-4ca2-a3dc-b97dd66b408a", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "2a57c6d5-83b9-4534-8580-15ab8f7fff98", hoisted3)
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
