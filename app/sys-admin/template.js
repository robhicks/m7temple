import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "radio", "name", "tabgroup", "id", "users-tab-control", "value", "users"]
var hoisted2 = ["for", "users-tab-control"]
var hoisted3 = ["type", "radio", "id", "gifts-tab-control", "name", "tabgroup", "value", "gifts"]
var hoisted4 = ["for", "gifts-tab-control"]
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
    elementOpen("input", "3a69680a-bb49-4de9-84f1-d4132868c137", hoisted1, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "972bbbbf-6c44-40e2-8b87-a4c3be079075", hoisted2)
      text("Users")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "95d93a21-c662-42ba-88d6-8959c4f48818", hoisted3, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "a5808a95-581a-43af-ac40-b2396c969a2c", hoisted4)
      text("Gifts")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "a719bb14-9e7f-4017-b253-52b373335796", hoisted5, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "01637e1f-5bec-4c3b-a4ee-814f8c1bef88", hoisted6)
      text("Awards")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "8d347045-cbfe-4244-9513-8fe9834f9a53", hoisted7, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "2ac5b999-3a30-4d94-a167-71e686efe534", hoisted8)
      text("Assistance")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "c548284c-1dba-4164-9e67-9a0a3552eda7", hoisted9, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "42abb0b3-b655-4172-9406-9da74c238937", hoisted10)
      text("Reports")
    elementClose("label")
  elementClose("tab")
elementClose("tabs")
elementOpen("content")
elementClose("content")
}
