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
elementOpen("section", "5389f653-170e-4a29-9892-916dcf206345", hoisted1)
  elementOpen("input", "9f3ec6d1-848a-42ed-a6f2-c8d89f3f9929", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "85c02181-4688-485c-9d3e-cff6b7b2cf61", hoisted3)
    elementOpen("label", "21d4273a-7923-4ca7-992a-c32f30692711", hoisted4)
      elementOpen("input", "8214295b-f06f-4c9e-9283-bd22eed45081", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "39e0b8a7-43d1-4f99-9aed-edc761315607", hoisted6)
      elementOpen("input", "a6250657-f121-47c9-9a07-31d1360b098c", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "61ce470d-ed4f-48c6-a5c9-5c7583f4e4a4", hoisted8)
      elementOpen("input", "1d1d2d4e-4ca7-4959-b200-2ea2fc7dd64d", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "377862ce-8a8d-4169-97ac-91c39cb8f4ac", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "2aaaf87b-e137-4df1-a488-e836026704a5_" + $item
        elementOpen("div", $key, null, "class",  $item % 2 ? 'row odd' : 'row even' )
          elementOpen("user")
            elementOpen("name")
              text("Name")
            elementClose("name")
            elementOpen("value")
              text("" + (award.user.displayName) + "")
            elementClose("value")
          elementClose("user")
          elementOpen("skill")
            elementOpen("name")
              text("Skill")
            elementClose("name")
            elementOpen("value")
              text("" + (award.skill.title) + "")
            elementClose("value")
          elementClose("skill")
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
              text("Will Help")
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
              text("Will Share")
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
          elementOpen("story")
            elementOpen("name")
              text("Story")
            elementClose("name")
            elementOpen("value")
              text("" + (award.story ? award.story : '') + "")
            elementClose("value")
          elementClose("story")
          elementOpen("actions")
            elementOpen("name")
            elementClose("name")
            elementOpen("value")
              if (award.type === 'pending') {
                elementOpen("button", "417e739b-e4a7-4c80-b181-ed787c8ebaa8_" + $key, hoisted11, "onclick", function ($event) {
                  var $element = this;
                ctrl.grantAward(award)})
                  text("Accept")
                elementClose("button")
              }
            elementClose("value")
          elementClose("actions")
        elementClose("div")
      }, this)
    }
  elementClose("section")
}
}
