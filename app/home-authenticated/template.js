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
elementOpen("section", "8203fbd3-7a73-415c-8fe2-7c7d7e872b89", hoisted1)
  elementOpen("input", "c37244d3-38a6-4f05-938e-db2122bd9d7f", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "2071cb9c-2d31-4c05-8e05-590a8512bf99", hoisted3)
    elementOpen("input", "3202c7f1-065f-4a06-a916-8e474d537443", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "16a667ca-1191-42db-87b3-2ae1c4007830", hoisted5)
  __target = ctrl.skills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "9d3531fa-517a-4c47-a441-ab3ec241d554_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "e4079a11-bcaf-4fae-975d-d0561f20e0ec_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
