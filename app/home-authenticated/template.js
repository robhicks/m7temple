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
elementOpen("section", "a35619e9-c806-4028-bec4-f6485148ba5d", hoisted1)
  elementOpen("input", "adde28c1-daf4-4d78-928a-ea2561470fd7", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "fc696acd-d529-4b7f-a5b9-5a237e3fca10", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "ce86e9e1-2b0f-4ba8-ad68-4e290069fcc3", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "ebfab4e6-c4ee-48c2-bffc-aa82036a16ac", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "b243313a-924d-4b3d-b6b4-9e983474c22c", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "33fc6f99-8a8a-4fa8-b40b-7726ce669de3", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "67711809-6c0d-4341-8d77-0a30750588e0", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "21fe7edf-e33e-4b2a-846d-b1e452f48e58", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "28e67ba8-9c83-42a0-9fbc-339f52f39131", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "6caef218-09b0-44ce-8cf0-b0ddac8e1ff8", hoisted11)
    elementOpen("input", "87a37348-c20b-4d92-bdb6-caf96ed9f392", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "aece07ae-2ae4-4cb7-8ed8-fa89ae52aa2e", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "885620f5-dc0a-4afe-b4a3-aefea60a8620_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "45e6ee76-1f04-4aea-97d1-d09f198bb076_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
