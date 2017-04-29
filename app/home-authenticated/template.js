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
elementOpen("section", "d3224b1b-d2e3-4fcf-8980-8f34235f1461", hoisted1)
  elementOpen("input", "c716cebc-300b-4080-9248-19d30bbc62f0", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "174c2050-856f-4e96-a258-e189b3cebae7", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "ca6dd385-baac-481f-8ff8-01404f89cf0c", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "b6cde0b1-16c6-461c-98c9-9fe0049e59d0", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "09ea60a3-66c2-4cea-89d2-94667ca1b85a", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "9ab68f22-5cb9-4fa7-8529-817c51b0b0c1", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "c180500a-5424-48c4-9066-5a0050603e55", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "5282e31d-1d83-4cb0-9a09-7963686cd62d", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "846b387d-f67e-4c91-9785-83b88686cdc8", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "4b448f4b-2811-4a87-b210-f3db8f113437", hoisted11)
    elementOpen("input", "fd59f9c1-879d-4898-8753-abd173c7072e", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "6faf5396-0806-43e6-b551-266cfd099b85", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "c9909fd4-a292-4355-949e-aad78fcb7ed2_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "62640c68-2c6c-4672-b412-8a4a952b3fc2_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
