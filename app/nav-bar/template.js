import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand", "href", "/home/authenticated"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var hoisted4 = ["href", "/help"]
var hoisted5 = ["href", "/admin"]
var hoisted6 = ["href", "/login"]
var __target

export function render (ctrl) {
elementOpen("a", "aac637e1-0ac0-4624-851b-68fa20ca3141", hoisted1, "class", ctrl.stateContains('home'))
  elementOpen("img", "f31fcbbd-6e6f-4d37-8df2-47148eb8f686", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "b45ae2e8-e289-49bd-92c0-1b51e782b06a", hoisted3)
  elementOpen("a", "c7353532-25c1-409c-9e7a-a6ec75613f40", hoisted4, "class", ctrl.stateContains('help'))
    text("Help")
  elementClose("a")
  if (ctrl.user.admin) {
    elementOpen("a", "4cdc21b0-ecc1-4fed-b35b-9083272891d4", hoisted5, "class", ctrl.stateContains('admin'))
      text("Admin")
    elementClose("a")
  }
  if (!ctrl.user.authenticated) {
    elementOpen("a", "0e37c93c-ccb1-4ab7-aaf2-379d9c29b261", hoisted6, "class", ctrl.stateContains('login'))
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
