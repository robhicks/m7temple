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
elementOpen("section", "7b609db4-929f-4500-b350-8b168c459b36", hoisted1)
  elementOpen("input", "673c0dcc-67ad-4f07-aef6-0a8ea54291b1", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "4170a409-4f94-4686-899e-1925157923dc", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "0603291d-18ba-4338-951f-5f25ae60b84b", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "d0e06014-ad49-4565-832c-b7354263628a", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "dddee3fa-e555-4c83-9be2-648c69a259d8", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "26158893-cbef-4830-9f80-195169b653f2", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "1ba1bc3f-099f-4496-9d67-81037b56b1f9", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "fdf3258b-3425-467f-801d-77a67febb0c2", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "8badaf40-8e77-47fa-9c3a-b6af4ea2b19c", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "79d1e721-2c1b-4ec4-af9d-2164d40c0f20", hoisted11)
    elementOpen("input", "f555b317-bd4d-493a-9b43-988d9b51fd73", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "4045a470-088a-4e59-914c-a6e959518c8c", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "beb42704-e581-4c61-ad5d-79ec34a83ec9_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "9c8a625d-6ebc-41a6-b75b-26d9e1d9b97d_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
