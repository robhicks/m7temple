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
var hoisted13 = ["id", "gifts"]
var hoisted14 = ["class", "item"]
var hoisted15 = ["collapsed", "true"]
var __target

export function render (ctrl) {
elementOpen("section", "f797d7df-405f-4185-9ac6-973a3447f829", hoisted1)
  elementOpen("input", "7427bcd7-6dc6-4ec9-9c54-605a65529f5e", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "7bf76a0f-550f-4cb4-8e75-73b59b1f2cbf", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "74ab644f-8335-4605-a024-e5de78cdd6ab", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "60f481e8-c8a8-4fd3-9290-ab7ee362e127", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "ac1fb14b-7759-40eb-9c81-f54c63e8383c", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "020ca725-182b-41e1-b797-c5cc181d4a0f", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "5ae44e7f-5356-4963-a647-705b3f9c25f4", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "f19be84b-d8e5-4439-a26f-c385fe387a21", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "e575940e-1c27-44c9-9507-ba8bbbe01231", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "42c33586-ed4c-4b37-8c24-c062e17ba110", hoisted11)
    elementOpen("input", "ee44cc8f-3830-47cf-bb9b-764433467e3b", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "36d973b9-9fa9-4f19-b62e-4f7f0024e9b9", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "3a3d943c-515d-45dc-814c-e7bdbc89647b_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "05d538ca-a6ae-41b6-8590-3ec4413162d4_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "shared", item.shared, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
