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
elementOpen("section", "a5b39350-88c5-48b8-8068-ec228e10e191", hoisted1)
  elementOpen("input", "3621ae6c-1090-4405-8b3f-969b6ebd8f57", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "681d94a2-a31b-419e-bf70-a82fff5cc885", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "65c37e2f-3048-445b-af04-1871aa5be051", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "0d90b7b2-6876-47eb-8a44-156fa65bcc14", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "504443ef-4ad4-4f2b-83c3-26d46eb9936d", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "0f28c05f-9bc2-417d-8877-39db8de28d52", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "af441d82-11ec-4201-965d-f9076cefd98c", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "515d1c81-ccf7-4ab9-ae24-2cb8c3072bea", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "f1cfbc7e-fe08-4aee-8702-b1aacb3baa4b", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "25b045d5-cb36-48f1-b8c2-cb9adfda36d1", hoisted11)
    elementOpen("input", "f0d26346-107e-42c9-bc4c-50c043e5106b", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "d8367fa7-3cd3-487d-bb9d-362ce53e1ea1", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "1e152482-8a3b-46be-98ad-8fcc3af12887_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "5023f2c6-1fef-421d-9688-7c63d081884c_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "shared", item.shared, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
