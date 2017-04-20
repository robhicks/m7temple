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
elementOpen("section", "bc577a41-5d69-4142-83cb-5aefcbaba458", hoisted1)
  elementOpen("input", "b0d9ae4d-4fde-423d-ac72-676431647633", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterSkills(this.value)})
  elementClose("input")
  elementOpen("label", "e0d6b166-38bd-45a0-bd79-c49658dcb348", hoisted3)
    elementOpen("input", "588119b2-c041-4871-abf8-62b0f3d00098", hoisted4, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "5ae147dc-5a05-419a-867b-726001b9411d", hoisted5)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "cbcec7e2-b1bd-4ee8-b181-ca58a5b99f38_" + $item
      elementOpen("div", $key, hoisted6)
        elementOpen("collapsable-panel", "46e1b6fa-4e9c-4a36-8c8d-ed8e4564ea91_" + $key, hoisted7, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
