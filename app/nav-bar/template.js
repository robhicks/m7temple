import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand", "href", "/home"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var hoisted4 = ["href", "/help"]
var hoisted5 = ["href", "/admin"]
var hoisted6 = ["href", "/login"]
var __target

export function render (ctrl) {
elementOpen("a", "184f2e88-5769-4ebf-99cb-7dc89b18b82a", hoisted1, "class", ctrl.stateContains('home'))
  elementOpen("img", "f183d481-9c33-4abb-b673-5d1d08b2827d", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "30a24b8b-83a0-4741-8352-22c7c58e5950", hoisted3)
  elementOpen("a", "0ed9e1f5-4b1b-4e18-a54e-a1102d31e3b5", hoisted4, "class", ctrl.stateContains('help'))
    text("Help")
  elementClose("a")
  if (ctrl.user.admin) {
    elementOpen("a", "fa95b82b-ea83-412e-a031-c2e01cced340", hoisted5, "class", ctrl.stateContains('admin'))
      text("Admin")
    elementClose("a")
  }
  if (!ctrl.user.authenticated) {
    elementOpen("a", "fa51dc17-71e7-4859-a65a-864ca01f6541", hoisted6, "class", ctrl.stateContains('login'))
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
