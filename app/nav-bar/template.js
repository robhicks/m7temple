import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand", "href", "/home/authenticated"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var hoisted4 = ["href", "/help"]
var hoisted5 = ["href", "/admin"]
var hoisted6 = ["href", "/login"]
var __target

export function render (ctrl) {
elementOpen("a", "3ea2f9a8-0780-4e16-aff0-eb438730b069", hoisted1, "class", ctrl.stateContains('home'))
  elementOpen("img", "5522107e-2dfe-433c-a2a2-fa0206d14b17", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "d9b2f405-08ee-4279-ae6e-2d19ddea965e", hoisted3)
  elementOpen("a", "199558ae-0768-4690-b7f6-ae5f2513da84", hoisted4, "class", ctrl.stateContains('help'))
    text("Help")
  elementClose("a")
  if (ctrl.user.admin) {
    elementOpen("a", "f2d02a12-9b7c-453e-a952-53f4703de83d", hoisted5, "class", ctrl.stateContains('admin'))
      text("Admin")
    elementClose("a")
  }
  if (!ctrl.user.authenticated) {
    elementOpen("a", "4d5ec803-2a96-430b-aedf-59aa6554053b", hoisted6, "class", ctrl.stateContains('login'))
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
