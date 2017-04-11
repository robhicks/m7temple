import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand", "href", "/home/authenticated"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var hoisted4 = ["href", "/help"]
var hoisted5 = ["href", "/admin"]
var hoisted6 = ["href", "/login"]
var __target

export function render (ctrl) {
elementOpen("a", "6947d302-dd43-4ae1-bddd-cdce55256970", hoisted1, "class", ctrl.stateContains('home'))
  elementOpen("img", "5d480859-3255-416b-9f68-85da070e4e89", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "a1b08c75-13ba-445e-b7f6-730a8da059de", hoisted3)
  elementOpen("a", "1ab882b6-0ad3-498a-9752-be6bcf081d4d", hoisted4, "class", ctrl.stateContains('help'))
    text("Help")
  elementClose("a")
  if (ctrl.user.admin) {
    elementOpen("a", "dfa07cfa-006c-4df4-975c-a8156f08a9a8", hoisted5, "class", ctrl.stateContains('admin'))
      text("Admin")
    elementClose("a")
  }
  if (!ctrl.user.authenticated) {
    elementOpen("a", "3d48b93b-f0a2-4e22-a349-d79a22b2b550", hoisted6, "class", ctrl.stateContains('login'))
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
