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
elementOpen("section", "f20c20d0-c545-45e3-b04d-ea238c54c17d", hoisted1)
  elementOpen("input", "e98422e1-6cae-4d9c-958f-fcc62b35c174", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "c15d53f1-40f1-4e3a-be69-0fb6e10bbc1b", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "c218a86a-49b4-4d0d-a6cf-668806252737", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "e77df1c8-9559-4b83-8a06-46bacdbc97d0", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "0bd25944-6ce6-4807-9193-8a61281176f5", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "0d892aa9-598a-46bc-8414-12017bc678c3", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "6ddbe06b-bc31-490f-ad9e-a0aafcd5eedc", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "f089cad6-2fdc-4d91-8f47-5f4c7522d82c", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "61e838c3-c280-4a06-b662-5faab6856da5", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "db305c87-7b4e-4703-beeb-df1381019c8a", hoisted11)
    elementOpen("input", "312793c3-aa6f-4dbc-91bc-a0c5a3cce2fe", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "a05f268c-0e4b-4f61-ac90-daf76696f0ca", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "55fc75fc-96d8-46f7-aba4-da4efb9a4750_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "e7cab26e-c0fc-4eff-908a-ec5070d76c47_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "shared", item.shared, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
