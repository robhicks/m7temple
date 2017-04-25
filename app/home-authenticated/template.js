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
elementOpen("section", "b1b36bf0-8da9-49d0-bac8-e66fd865aa9a", hoisted1)
  elementOpen("input", "13d4c6fb-65e8-4126-8e05-2b6d1be5f555", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterSkills()})
  elementClose("input")
  elementOpen("select", "89537df9-9a3e-46bc-8137-5461e70c59f2", hoisted3, "onchange", function ($event) {
    var $element = this;
  ctrl.search.category = this.value; ctrl.filterSkills()})
    elementOpen("option", "c06fda67-eb2b-486e-885e-a5583680219d", hoisted4)
      text("Select")
    elementClose("option")
    elementOpen("option", "9610c04f-a918-4d14-8a9b-cec1977bcd8c", hoisted5, "selected", ctrl.search.category ==='booklet' ? true : null)
      text("Booklet")
    elementClose("option")
    elementOpen("option", "2ef563ce-9561-41d0-bd14-cf283dd2cb1d", hoisted6, "selected", ctrl.search.category ==='find' ? true : null)
      text("Find")
    elementClose("option")
    elementOpen("option", "23fded2e-0241-46ad-ae06-2819be3fbcd3", hoisted7, "selected", ctrl.search.category ==='take' ? true : null)
      text("Take")
    elementClose("option")
    elementOpen("option", "780850e1-6402-439d-82d8-6a90ab13b274", hoisted8, "selected", ctrl.search.category ==='teach' ? true : null)
      text("Teach")
    elementClose("option")
    elementOpen("option", "b699e707-4665-4639-8d7e-2dbabf15e37e", hoisted9, "selected", ctrl.search.category ==='memories' ? true : null)
      text("Memories")
    elementClose("option")
    elementOpen("option", "11f18d0d-dfac-4cbf-93d6-98c369f07d9b", hoisted10, "selected", ctrl.search.category ==='indexing' ? true : null)
      text("Indexing")
    elementClose("option")
  elementClose("select")
  elementOpen("label", "7efbdb06-8628-4414-943c-b5481c1fd21d", hoisted11)
    elementOpen("input", "8f7181ca-f54a-4c90-a736-f7234726f79c", hoisted12, "onchange", function ($event) {
      var $element = this;
    ctrl.toggleMine()})
    elementClose("input")
    elementOpen("span")
      text("My Skills (" + (ctrl.mySkills.length) + ")")
    elementClose("span")
  elementClose("label")
elementClose("section")
elementOpen("section", "d313bfa3-dd64-4497-91da-07f7af826d43", hoisted13)
  __target = ctrl.viewSkills
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "9fe6d159-e68c-46a2-acc0-481c01622373_" + $item
      elementOpen("div", $key, hoisted14)
        elementOpen("collapsable-panel", "9bfb0d34-9c0e-4ccd-aa5b-c9e10a7ed75a_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements)
        elementClose("collapsable-panel")
      elementClose("div")
    }, this)
  }
elementClose("section")
}
