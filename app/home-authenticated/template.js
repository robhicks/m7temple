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
var hoisted15 = ["shared", "", "collapsed", "true"]
var __target

export function render (ctrl) {
elementOpen("section", "6980afb3-adc3-4d35-a374-2d692c23f887", hoisted1)
  elementOpen("input", "f3e0be3c-6d72-414a-9eda-1ad36fb11f68", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "d99e6033-3d96-4b44-8f17-65b8dab5c101", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "5e6dc50b-6a09-423b-9752-0f5feb8449c0", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "f02fca66-3aed-495c-ad07-328f7a1df950", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "6cd6420d-6f23-4a9f-aed0-f3906456cf50", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "d669a7e1-cdef-4a97-a6a6-d8fcbb4365ad", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "78dd72ac-6ab3-494f-8906-f34c7a96b47f", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "15790ecc-9a86-4e2c-ac3e-d0e6977cf00e", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "018b49e8-f1f3-40c1-aa63-9aae98789204", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "7780ebce-f0c6-4403-b908-78aba6cef10f", hoisted11)
    elementOpen("input", "8d3f9c8d-8eb9-4395-adb9-dd07f3336daa", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "bd18aab1-062d-44ff-9da4-2f55d882dda4", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "5ee80ebe-62c5-414d-8141-ecd3e427e2fb_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "fe1ca09c-ab1c-43f4-91e7-4f2353ec097c_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
