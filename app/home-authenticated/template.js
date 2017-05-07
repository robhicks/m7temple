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
elementOpen("section", "07937a50-6913-40af-a26c-d8d7a8390263", hoisted1)
  elementOpen("input", "3c2cb2ed-fc5d-4afe-a281-8e0c4882abb8", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "c2eaf1a3-816c-440a-a0b3-cd601cfbc942", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "0ddc865d-2f91-45fc-92fc-296ae541f1b7", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "359025b1-fb48-48c3-baf6-487dac6843df", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "28c89500-01d6-49d3-b308-fb1010570558", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "5e76d3e2-73b6-4976-b47d-907cb928222d", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "9e55347b-33a5-4089-b4cc-3400cc9a73fb", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "d9cc3572-bc49-4bea-af8c-8cb937878c71", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "2d388ed4-dbc0-44cc-822a-b4e73cec7145", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "47a104d5-685a-40d0-ad37-2a9cc6317abd", hoisted11)
    elementOpen("input", "3ade5e2a-27b9-475c-8b8d-fe02b7ea592e", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "980a1bf5-3ea4-434c-b5ee-eab55dbf91a5", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "94bbbf69-fd37-449e-9ef7-d320b2de759d_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "b38badc8-b304-4366-bd71-8a212d6674ea_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "shared", item.shared, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
