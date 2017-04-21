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
    elementOpen("input", "96bbbfd3-2011-48f5-ae76-cf68898f2f27", hoisted1, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "00019b56-1a89-4a3b-b7f9-539b1e107d91", hoisted2)
      text("Users")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "a1e25bb0-150d-44d5-9156-03fe14491e3e", hoisted3, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "f09ab575-8131-4dcf-8706-2cbd6def45fe", hoisted4)
      text("Skills")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "eb497795-b991-4ed4-ba11-f13ff64ea774", hoisted5, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "bee69cac-a510-4a57-b5e6-8cec063b75f5", hoisted6)
      text("Awards")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "be1dab6a-9be3-4fcd-862e-345468ed4098", hoisted7, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "1c439051-ad89-4581-a3c1-da9526f3a2cc", hoisted8)
      text("Assistance")
    elementClose("label")
  elementClose("tab")
  elementOpen("tab")
    elementOpen("input", "9af18639-df74-4db7-9bad-98d6ec92de47", hoisted9, "onclick", function ($event) {
      var $element = this;
    ctrl.selectTab(this.value)})
    elementClose("input")
    elementOpen("label", "d0487941-85d1-43f6-8ea0-d91e4c51edcc", hoisted10)
      text("Reports")
    elementClose("label")
  elementClose("tab")
elementClose("tabs")
elementOpen("content")
elementClose("content")
}
