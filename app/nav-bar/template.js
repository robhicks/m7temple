import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var __target

export function render (ctrl) {
elementOpen("a", "0ce95793-3872-46f7-b923-11448ecbd682", hoisted1, "onclick", function ($event) {
  var $element = this;
ctrl.go('/home/authenticated')}, "class", ctrl.stateContains('home'))
  elementOpen("img", "b6f0c103-ac6a-4417-90cb-65ff495e2d73", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "98cda448-dd0e-4eff-9f2f-3e063d3a4361", hoisted3)
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
