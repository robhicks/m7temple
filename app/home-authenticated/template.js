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
elementOpen("section", "c2bc075b-a89a-46ed-8d73-a4fa2a174f58", hoisted1)
  elementOpen("input", "643d3fdb-5ead-4109-a3d8-bc06203906bd", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "71e8cc32-3e18-4ed7-8bb1-455e574d3b7c", hoisted3)
    elementOpen("input", "dead1744-3cb9-452a-8588-46639cf5837b", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "5b9d259a-ab34-4ec5-8d33-6d1fe7aed477", hoisted5)
  __target = ctrl.skills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "16ccc546-a0ff-4c36-aff2-6dc50d3c3eb0_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "045255c4-47eb-49e9-af13-87ba3c14d3da_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
