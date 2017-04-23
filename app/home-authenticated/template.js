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
elementOpen("section", "3acd9870-2aca-4c6c-8344-28f142b0832d", hoisted1)
  elementOpen("input", "d216df60-bf65-419d-84cb-a724f54172e6", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterSkills()})
  elementClose("input")
  elementOpen("skill-editor-category")
    elementOpen("select", "1716d69c-da23-4108-ba23-bf94294b38a2", hoisted3, "onchange", function ($event) {
      var $element = this;
    ctrl.search.category = this.value; ctrl.filterSkills()})
      elementOpen("option", "8c682475-9e20-4d68-9e22-5eca943a5019", hoisted4)
        text("Select")
      elementClose("option")
      elementOpen("option", "962c93b3-9931-45a5-9bfd-7ea5e58f737e", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
        text("Booklet")
      elementClose("option")
      elementOpen("option", "23d87cef-bd9a-4e43-a2f5-0a3f61b6f11b", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
        text("Find")
      elementClose("option")
      elementOpen("option", "3e0b6f2f-c31a-426a-a1fe-852f87e75e96", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
        text("Take")
      elementClose("option")
      elementOpen("option", "37eb9a3e-7270-4831-b11e-fb944b04d338", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
        text("Teach")
      elementClose("option")
      elementOpen("option", "13519062-9c65-4197-9634-36ab0327803e", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
        text("Memories")
      elementClose("option")
      elementOpen("option", "af398573-1719-40d2-a253-b7becdc8683c", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
        text("Indexing")
      elementClose("option")
    elementClose("select")
  elementClose("skill-editor-category")
  elementOpen("label", "c116f99d-e84e-44a2-a136-d8fc61703a1d", hoisted11)
    elementOpen("input", "94c3dd28-6545-4d57-b9a5-b5149fca2053", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "7cf019de-6e8e-4c4b-9af7-ceb1e998c3a0", hoisted13)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "16005b99-5bda-4154-934d-be996ede1900_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "756db349-33ea-4286-8a6d-1efed6a99be4_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
