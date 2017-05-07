import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["name", "header"]
var hoisted2 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."]
var hoisted3 = ["id", "filter"]
var hoisted4 = ["for", ""]
var hoisted5 = ["type", "radio", "name", "awardsType", "value", "", "checked", ""]
var hoisted6 = ["for", ""]
var hoisted7 = ["type", "radio", "name", "awardsType", "value", "pending"]
var hoisted8 = ["for", ""]
var hoisted9 = ["type", "radio", "name", "awardsType", "value", "earned"]
var hoisted10 = ["name", "awards"]
var hoisted11 = ["type", "button", "class", "primary", "name", "accept"]
var __target

export function render (ctrl) {
elementOpen("section", "d8116420-8654-4f5d-82bd-41763d5f589c", hoisted1)
  elementOpen("input", "16b32478-b2b5-4417-b6bb-b1ff07837164", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "a609ccff-274f-4dc6-a8a4-9b798a54dfad", hoisted3)
    elementOpen("label", "9a786dda-a644-447e-9bb0-0e46be6c88f3", hoisted4)
      elementOpen("input", "49554f92-aaa2-4cc8-b162-5c44589015ff", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "5e76bcbc-c65f-45d8-9e1a-89a84072b46a", hoisted6)
      elementOpen("input", "1df4e695-9b16-40d8-9d5c-d7354f2a2629", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "d173d8be-fa50-4081-a121-ced4fdda495a", hoisted8)
      elementOpen("input", "8033c9c3-e543-4600-ac1b-2794bbb2b6b5", hoisted9, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
if (ctrl.awards.length > 0) {
  elementOpen("section", "ddaf39d9-d50f-421f-95a9-3334c57d16e6", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "ef9f5769-7dd7-41d6-9154-4e4d44900f48_" + $item
        elementOpen("div", $key, null, "class",  $item % 2 ? 'row odd' : 'row even' )
          elementOpen("user")
            elementOpen("name")
              text("Name")
            elementClose("name")
            elementOpen("value")
              text("" + (award.user.displayName) + "")
            elementClose("value")
          elementClose("user")
          elementOpen("gift")
            elementOpen("name")
              text("Gift")
            elementClose("name")
            elementOpen("value")
              text("" + (award.gift.title) + "")
            elementClose("value")
          elementClose("gift")
          elementOpen("date")
            elementOpen("name")
              text("Date")
            elementClose("name")
            elementOpen("value")
              text("" + (new Date(award.date).toLocaleDateString()) + "")
            elementClose("value")
          elementClose("date")
          elementOpen("help")
            elementOpen("name")
              text("Help")
            elementClose("name")
            if (award.help) {
              elementOpen("value")
                text("Yes")
              elementClose("value")
            }
            if (!award.help) {
              elementOpen("value")
                text("No")
              elementClose("value")
            }
          elementClose("help")
          elementOpen("share")
            elementOpen("name")
              text("Share")
            elementClose("name")
            if (award.share) {
              elementOpen("value")
                text("Yes")
              elementClose("value")
            }
            if (!award.share) {
              elementOpen("value")
                text("No")
              elementClose("value")
            }
          elementClose("share")
          if (award.story) {
            elementOpen("story")
              elementOpen("name")
                text("Story")
              elementClose("name")
              elementOpen("value")
                text("" + (award.story ? award.story : '') + "")
              elementClose("value")
            elementClose("story")
          }
          if (award.type==='pending') {
            elementOpen("actions")
              elementOpen("name")
              elementClose("name")
              elementOpen("value")
                if (award.type === 'pending') {
                  elementOpen("button", "dbc53896-019d-4c48-bc6b-12df48ff7cad_" + $key, hoisted11, "onclick", function ($event) {
                    var $element = this;
                  ctrl.grantAward(award)})
                    text("Accept")
                  elementClose("button")
                }
              elementClose("value")
            elementClose("actions")
          }
        elementClose("div")
      }, this)
    }
  elementClose("section")
}
}
