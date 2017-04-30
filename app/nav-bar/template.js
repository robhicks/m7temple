import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var __target

export function render (ctrl) {
elementOpen("a", "2d794915-3ee9-4bfb-8ba3-bcbd5dc5918b", hoisted1, "onclick", function ($event) {
  var $element = this;
ctrl.go('/home/authenticated')}, "class", ctrl.stateContains('home'))
  elementOpen("img", "f8a88b57-5164-4b4c-9160-491db52f131d", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "404aaa0a-f324-47c3-9590-cddb17fcfaf4", hoisted3)
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
