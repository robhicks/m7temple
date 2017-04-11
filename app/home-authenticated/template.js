import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "search"]
var hoisted2 = ["type", "text", "name", "search", "placeholder", "Search ..."]
var hoisted3 = ["for", "mine-checkbox", "id", "mine-wrapper"]
var hoisted4 = ["type", "checkbox", "id", "mine-checkbox"]
var hoisted5 = ["id", "skills"]
var hoisted6 = ["class", "item"]
var hoisted7 = ["shared", "", "collapsed", "true"]
var __target

export function render (ctrl) {
elementOpen("section", "30e0ac40-13c5-4b5c-ad67-0f1668bdea2e", hoisted1)
  elementOpen("input", "7fa9124f-ddf4-44d3-a040-37fc245bebe9", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "f036bdaa-94f6-4609-9037-ffeda20bdf6c", hoisted3)
    elementOpen("input", "6bd72106-869a-41d0-a144-61aaf38c97e6", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "6becc2cc-47bd-4b51-bbc7-f9a5a9a3593b", hoisted5)
  __target = ctrl.skills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "861340a7-5ecd-4a2f-99ac-bd6853e711f9_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "357c41fc-e47f-4959-aa9a-2a9347a59b4f_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
