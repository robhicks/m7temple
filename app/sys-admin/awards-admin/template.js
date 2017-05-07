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
elementOpen("section", "e2af5044-7a26-4b11-b5ae-d0fefa0f6538", hoisted1)
  elementOpen("input", "e821c86e-6429-4c9f-bd32-9a74a6c6994d", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "2827b858-faf5-4f25-b98d-cce9faaa0805", hoisted3)
    elementOpen("label", "ec3122f7-f647-4ede-8b92-4a371dc9aff5", hoisted4)
      elementOpen("input", "3ff83260-5331-47a6-b64b-0ceaa5db2d57", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "fecd99a7-c40b-4db4-b7aa-69b3d342d714", hoisted6)
      elementOpen("input", "6da81469-b5b4-41ed-bc6f-5a3c5dbdd27f", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "7b2db262-3ec4-42d9-ba8b-68e13d6ee791", hoisted8)
      elementOpen("input", "576b16ea-09e5-4ea9-a35b-c191ac128bb1", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "ffe1506d-776a-4a07-b8df-1267046e2d2e", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "8e22a0a7-aeaf-46d9-816c-dbb1d27d1c97_" + $item
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
                  elementOpen("button", "16ba691d-b398-4d23-b3f9-6f4234876f86_" + $key, hoisted11, "onclick", function ($event) {
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
