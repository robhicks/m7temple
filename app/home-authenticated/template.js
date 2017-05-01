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
elementOpen("section", "9a36dcef-4ca7-4cb8-856d-8f00211baaab", hoisted1)
  elementOpen("input", "25a02e32-7dfe-4ded-9e8f-44905f0a7891", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterGifts()})
  elementClose("input")
  elementOpen("select", "8607569c-cb1c-4eda-b63b-1cb3e9ac4070", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterGifts()})
    elementOpen("option", "2175cd4f-dd5b-4895-88f9-10aa8feb137c", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "89d62c70-4782-4dd3-a3ba-410b43d2acdd", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "0b8ae49a-4c3d-4630-b04b-674264bafef1", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "f40a8a11-ce1a-446c-9107-038825fbae1a", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "cebe57a8-5d7c-413e-b2fd-4e6109da3e5f", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "6d696cee-4314-44f4-a88d-fd34dc6910fd", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "bbab5c92-d22b-4d15-8e42-6c9c90a478fb", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "225c12e0-7c26-42b3-b56e-51dbbaa54458", hoisted11)
    elementOpen("input", "a2ee6464-341e-44a1-9b13-36a3d1ee5e23", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Gifts (" + (ctrl.myGifts.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "9d13df71-13df-4d21-bcaf-b62549c27a83", hoisted13)
  __target = ctrl.viewGifts
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "a64517c4-807e-4cce-a99c-eb070ceb74ff_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "797b9908-48f1-4bc5-9f74-de9d11dd4e89_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
