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
elementOpen("section", "2b1c826b-b9aa-4834-85da-5a51709093fe", hoisted1)
  elementOpen("input", "3e3d55e2-8ce6-4622-8747-db57dd6d1acf", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "befe15bb-e10c-42c3-b433-eb0091a0faf9", hoisted3)
    elementOpen("label", "4785e0c2-63fc-41de-a4c5-26c555fe7b53", hoisted4)
      elementOpen("input", "f0a40c78-c9f2-4d13-9724-b1b876a49ebf", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "e74144c2-fc79-4507-8770-da5f6d164566", hoisted6)
      elementOpen("input", "46f6bc2f-801a-47a0-9332-20a44128a9ab", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "0ee71983-89bc-4717-a700-c6f75baac0e4", hoisted8)
      elementOpen("input", "83db61aa-3d1a-4d73-b44b-9b07d2748b40", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "bce0d73b-e1eb-444b-be5f-91c49d7a73d3", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "b91094e3-4bd6-4cbf-bff1-ec26646d3163_" + $item
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
                  elementOpen("button", "00dc504e-8cce-43db-b1a4-55add34688a9_" + $key, hoisted11, "onclick", function ($event) {
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
