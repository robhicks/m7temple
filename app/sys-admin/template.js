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
    elementOpen("input", "86463111-21f1-4e4d-8484-692459ac5c8e", hoisted1, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "eab1aa3f-6a9a-4fcc-ad3d-2a15f62d01fe", hoisted2)
      text("Users")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "7a76244d-c539-45c7-847f-51218f18e95b", hoisted3, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "f78931c1-fc99-4e67-8c88-2a49bdc02dbb", hoisted4)
      text("Skills")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "cf3879ea-c942-406f-a173-47aada7d5b8d", hoisted5, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "c184543a-e906-4b55-8e3b-8f392acde0e7", hoisted6)
      text("Awards")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "bf015779-539d-4df3-b959-32647df9f05d", hoisted7, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "44a4cb5e-2802-4b4d-a942-5892085d1b7f", hoisted8)
      text("Assistance")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "c180948e-237b-4a7a-84d9-4e8ea40a264e", hoisted9, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "554fb3c0-bdbe-4afb-b6ea-bd49ac8d3679", hoisted10)
      text("Reports")
    elementClose("label")
  elementClose("tab")
elementClose("tabs")
elementOpen("content")
elementClose("content")
}
