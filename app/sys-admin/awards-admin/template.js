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
elementOpen("section", "e0062b79-aa9b-4e36-a808-3d9101b67e20", hoisted1)
  elementOpen("input", "4f6efe15-1c06-4cf0-9c95-646815868929", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "aae750d4-523a-4a21-b821-62b8986de4ed", hoisted3)
    elementOpen("label", "17d6bc20-8136-490d-8fd0-fc8813ef6d15", hoisted4)
      elementOpen("input", "f1d6a7a7-ab4a-42f9-a4be-1b97af3ba62a", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "6e824d4f-a767-4264-ba0f-fe73ecab3921", hoisted6)
      elementOpen("input", "54d477ad-1285-429f-9ab9-f5fb3c363912", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "ba6f67a6-0878-4bd7-8736-5bc8514a2d1e", hoisted8)
      elementOpen("input", "9be12ae6-2f81-41b1-9334-b4d0ca6a1929", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "9a832cbb-a66c-427f-b25d-824039a9acf3", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "3c3c9da9-7299-40d8-bdda-65a6e653f37f_" + $item
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
                  elementOpen("button", "078fd30c-695d-477e-82b4-59d320c77273_" + $key, hoisted11, "onclick", function ($event) {
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
