import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "search"]
var hoisted2 = ["type", "text", "name", "search", "placeholder", "Search ..."]
var hoisted3 = ["name", "category", "required", ""]
var hoisted4 = ["value", ""]
var hoisted5 = ["value", "booklet"]
var hoisted6 = ["value", "find"]
var hoisted7 = ["value", "take"]
var hoisted8 = ["value", "teach"]
var hoisted9 = ["value", "memories"]
var hoisted10 = ["value", "indexing"]
var hoisted11 = ["for", "mine-checkbox", "id", "mine-wrapper"]
var hoisted12 = ["type", "checkbox", "id", "mine-checkbox"]
var hoisted13 = ["id", "skills"]
var hoisted14 = ["class", "item"]
var hoisted15 = ["shared", "", "collapsed", "true"]
var __target

export function render (ctrl) {
elementOpen("section", "154149a4-a496-4d46-a35e-72b397469ca9", hoisted1)
  elementOpen("input", "b9638cc9-e5fb-4c1d-8ae5-c5ace73d48a6", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterSkills()})
  elementClose("input")
  elementOpen("select", "0a9f0b91-3c07-4707-9cf0-2612b57f8edf", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterSkills()})
    elementOpen("option", "e4b33753-8864-4151-9115-57f0fabc6374", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "c7bf409d-a8f6-4c86-a4e2-60093510da74", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "ae6c5d33-12df-4c1b-a663-05f002f30ee4", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "ae20de2e-9573-4b54-84f6-1982d457a5a9", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "1db65060-d7c9-4a62-b0ca-67920f20ff6e", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "bccb180d-686f-4380-83f8-b11b20c62534", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "51591f8a-77ea-4be6-9ab8-2a2c0deaa256", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "f01b8193-3edf-4a95-a934-f5af9f03342b", hoisted11)
    elementOpen("input", "0c8fd95d-0927-4b03-9d2b-00303c49b65d", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "eceefb81-cb9b-44df-b6bd-b6a86c4d9b12", hoisted13)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "7d9072b9-0d9c-440d-83ac-913a2f11c4cb_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "1a868e99-d210-4c51-a5d9-0724b4012b40_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
