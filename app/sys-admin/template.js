import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "radio", "name", "tabgroup", "id", "users-tab-control", "value", "users"]
var hoisted2 = ["for", "users-tab-control"]
var hoisted3 = ["type", "radio", "id", "skills-tab-control", "name", "tabgroup", "value", "skills"]
var hoisted4 = ["for", "skills-tab-control"]
var hoisted5 = ["type", "radio", "id", "awards-tab-control", "name", "tabgroup", "value", "awards"]
var hoisted6 = ["for", "awards-tab-control"]
var hoisted7 = ["type", "radio", "id", "assistance-tab-control", "name", "tabgroup", "value", "assistance"]
var hoisted8 = ["for", "assistance-tab-control"]
var hoisted9 = ["type", "radio", "id", "reports-tab-control", "name", "tabgroup", "value", "reports"]
var hoisted10 = ["for", "reports-tab-control"]
var __target

export function render (ctrl) {
elementOpen("tabs")
  elementOpen("tab")
    elementOpen("input", "85a3d50b-0537-4b26-b2f1-02f655b59708", hoisted1, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "b48537cb-e788-4e3d-8dd1-f2c08400fbfa", hoisted2)
      text("Users")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "0cd188e1-5d96-4c28-a06d-516a3ad340db", hoisted3, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "008a201e-1876-4ffa-b2be-bef500dd5c0c", hoisted4)
      text("Skills")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "7ef0d61a-3466-4409-9b5d-bfb5f871d00c", hoisted5, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "3bf3e0f7-12f8-49b8-b384-e080100c2a1d", hoisted6)
      text("Awards")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "1d59b967-01e0-4ff1-9d12-1c2ab13787f6", hoisted7, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "b6202feb-3212-4919-861f-1304676a6d71", hoisted8)
      text("Assistance")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "b6c1508f-2357-4bef-9683-01ca69e12722", hoisted9, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "65b7ac52-96f6-4787-9f5b-fbdbd97168cd", hoisted10)
      text("Reports")
    elementClose("label")
  elementClose("tab")
elementClose("tabs")
elementOpen("content")
elementClose("content")
}
