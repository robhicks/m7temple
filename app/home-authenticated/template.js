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
elementOpen("section", "9e393178-4527-4bd7-908b-5dd1df882a3d", hoisted1)
  elementOpen("input", "549fd8fa-fa8b-477d-954b-af8a64b87739", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "3a944d0b-35ca-43a9-bcc4-a88798b04b39", hoisted3)
    elementOpen("input", "96eeb153-1de9-4aa4-8729-76115d0545c8", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "f17d2897-4059-4b57-ba0b-df5c2878ea99", hoisted5)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "7b9c3c46-a85a-4076-bdb0-b02e1c507ffe_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "1a16fbe8-2c61-4ff1-aab7-311677303a7a_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
