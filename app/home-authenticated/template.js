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
elementOpen("section", "bb141dc9-0818-489f-8600-26406d5a07dd", hoisted1)
  elementOpen("input", "4bbdbe16-9e40-4286-86f0-4c51b748a269", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "d62e9e27-cebe-4513-8720-c5c9ccc4ce9c", hoisted3)
    elementOpen("input", "3637026e-1dab-4397-b25b-01435954e467", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "6de01e45-cc80-4a01-907e-a9b58aca8717", hoisted5)
  __target = ctrl.skills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "e701718d-f4b8-47b9-94da-b716582faa4e_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "91b871b1-9199-4fd6-941d-a81f6df3771f_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
