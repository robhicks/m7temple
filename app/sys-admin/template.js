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
    elementOpen("input", "3ccb640b-23f9-4e7e-bafc-90e9e3f80cfb", hoisted1, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "7b5dc4c8-55dd-4199-b8b1-c9dc245efc19", hoisted2)
      text("Users")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "5efb0ba4-e3bd-4128-b1ff-941dcd2dfada", hoisted3, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "eb220064-d6bd-4956-aee9-4a644fcd2b43", hoisted4)
      text("Skills")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "06881659-efd9-4938-a90c-b56e10afd784", hoisted5, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "772c552a-29c4-4833-a781-851a274c40e0", hoisted6)
      text("Awards")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "d9e66369-713b-4f68-a263-7b206008c801", hoisted7, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "1fa49877-cc2b-415f-b44c-8a69ab60d6fe", hoisted8)
      text("Assistance")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "5db822bb-f3f5-4ce0-9749-1fae40eccd5a", hoisted9, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "190698fe-aa30-4abf-b909-39d88fdad7d3", hoisted10)
      text("Reports")
    elementClose("label")
  elementClose("tab")
elementClose("tabs")
elementOpen("content")
elementClose("content")
}
