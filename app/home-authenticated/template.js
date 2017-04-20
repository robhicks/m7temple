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
elementOpen("section", "2c129a77-6e10-45a1-8ae3-dd8046e094a3", hoisted1)
  elementOpen("input", "9104ba23-1bf1-40e6-8407-78d08d1909db", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "f6c6ad99-8676-4847-ad7f-6b002e016ba0", hoisted3)
    elementOpen("input", "174878bc-511d-4a3c-8846-d74cb01994c8", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "58ae2d37-1188-442e-b4e8-7df30588dabd", hoisted5)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "9d43088b-2382-484e-bec0-1764c25cb524_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "7dcdf294-a799-4d1c-981a-0f337e655425_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
