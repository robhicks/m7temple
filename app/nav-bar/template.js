import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "brand", "href", "/home/authenticated"]
var hoisted2 = ["src", "/img/favicon.svg", "alt", ""]
var hoisted3 = ["role", "navigation", "id", "navigation"]
var hoisted4 = ["href", "/help"]
var hoisted5 = ["href", "/admin"]
var hoisted6 = ["href", "/login"]
var __target

export function render (ctrl) {
elementOpen("a", "81efbc29-5a1d-4b98-8921-bb1bada51007", hoisted1, "class", ctrl.stateContains('home'))
  elementOpen("img", "7fd1cca8-3549-43a6-9470-d26665fe622c", hoisted2)
  elementClose("img")
  elementOpen("span")
    text("Home")
  elementClose("span")
elementClose("a")
elementOpen("nav", "8c5574a6-9877-414d-b642-f584ecb31956", hoisted3)
  elementOpen("a", "8bd1eb9e-1b48-4f4f-acb9-479e57c95750", hoisted4, "class", ctrl.stateContains('help'))
    text("Help")
  elementClose("a")
  if (ctrl.user.admin) {
    elementOpen("a", "b8f52a7d-d7aa-4999-8584-266a87a5df97", hoisted5, "class", ctrl.stateContains('admin'))
      text("Admin")
    elementClose("a")
  }
  if (!ctrl.user.authenticated) {
    elementOpen("a", "68dc857a-a012-42d8-9233-202e660bd43b", hoisted6, "class", ctrl.stateContains('login'))
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
