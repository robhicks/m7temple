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
elementOpen("section", "8c4921a8-e2a3-45dc-824f-6ec77ec3ec1f", hoisted1)
  elementOpen("input", "bac0bf14-6e81-4bc7-85f3-1f9534135527", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "73455680-c777-4186-b4a1-cbe5c3104e2a", hoisted3)
    elementOpen("input", "22fb244b-3594-4eb9-bce2-4eff54b261af", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "215d2dbc-c4a1-4a58-87d2-fe92142dba6e", hoisted5)
  __target = ctrl.skills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "b3ca7265-2c77-4d12-94a0-33b3f0b7d85f_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "4a3978af-9121-4c69-baee-4a7a6a474438_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
