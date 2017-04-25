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
elementOpen("section", "184f429c-8b08-4717-b501-f65da610c822", hoisted1)
  elementOpen("input", "210d51e4-d4de-40b0-b0ad-073333bc6f41", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterSkills()})
  elementClose("input")
  elementOpen("select", "d6ef46a1-6ae2-462b-af0b-a002a54ffdfe", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterSkills()})
    elementOpen("option", "0ac39939-17b7-4838-be99-6ff0c38b8740", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "8d2a6d4a-7445-43f2-af42-9ddb507d4a69", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "387b2471-a41d-4f8f-8307-7ba409b70a22", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "2936ecbc-47c5-42a0-ba92-f6d25eb59f6f", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "3652aefc-399c-4a5c-ae63-9d9d307cc09c", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "47a62a57-725e-4226-896e-f99b0c7af35f", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "a8535c70-ce27-425a-98d1-035376ffb140", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "6966d5a1-e6a7-442b-b3dd-cd3688bad095", hoisted11)
    elementOpen("input", "a2244478-d267-4af8-832e-c815ca160d8a", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "f8d8cda1-e414-4f13-8889-d98020d9c9eb", hoisted13)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "1a5da076-4c96-4112-ba6b-cf65418d5da9_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "978eccb9-8db7-4556-8bbc-98f1bcbe8225_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
