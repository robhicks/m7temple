import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["name", "header"]
var hoisted2 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."]
var hoisted3 = ["id", "filter"]
var hoisted4 = ["for", ""]
var hoisted5 = ["type", "radio", "name", "awardsType", "value", "added", "checked", ""]
var hoisted6 = ["for", ""]
var hoisted7 = ["type", "radio", "name", "awardsType", "value", "pending"]
var hoisted8 = ["for", ""]
var hoisted9 = ["type", "radio", "name", "awardsType", "value", "earned"]
var hoisted10 = ["name", "awards"]
var hoisted11 = ["class", "row"]
var hoisted12 = ["type", "button", "class", "primary", "name", "accept"]
var __target

export function render (ctrl) {
elementOpen("section", "8317c5d8-bacf-4450-b64d-0e608cf322c9", hoisted1)
  elementOpen("input", "494f20fb-5303-4f1d-bcee-06c248bc4fc2", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.filterAwards(this.value)})
  elementClose("input")
  elementOpen("div", "f533c30d-5078-4dd8-a98d-0e0dd7f0583f", hoisted3)
    elementOpen("label", "0475c524-7d92-4823-b46e-4bbed690332d", hoisted4)
      elementOpen("input", "2c7b1c07-12a2-4c98-aee8-0a00e4bc86e8", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.filterByType(this.value)})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "00bb2ba0-71a6-4127-aec8-ba6f67f413b7", hoisted6)
      elementOpen("input", "32df4fe5-2d17-4a29-936d-0a49b2965ad0", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.filterByType(this.value)})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "9590e092-3f9c-4d51-82a3-3f1bf2dab105", hoisted8)
      elementOpen("input", "c81df26c-d05a-414d-892c-2b9a4e9bb61a", hoisted9, "onchange", function ($event) {
        var $element = this;
      ctrl.filterByType(this.value)})
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
if (ctrl.awards.length > 0) {
  elementOpen("section", "5a997f40-be01-4448-aef2-d105b7fb037b", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "2241aad7-1460-43b7-8597-a6d9e2e02abd_" + $item
        elementOpen("div", $key, hoisted11)
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
              text("" + (award.date) + "")
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
              text("" + (award.story) + "")
            elementClose("value")
          elementClose("story")
          elementOpen("actions")
            elementOpen("name")
            elementClose("name")
            elementOpen("value")
              if (award.pending) {
                elementOpen("button", "8b6d9f01-7edc-4202-9332-8a3256bcf146_" + $key, hoisted12)
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
