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
elementOpen("section", "1340c379-d81c-4c80-9de1-2100d113f125", hoisted1)
  elementOpen("input", "5d1b7237-0456-468f-a17f-763078dede62", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "7b1123a2-cb52-4024-abb8-dea05acf9275", hoisted3)
    elementOpen("label", "e0516b35-6180-4b2e-ad1a-cb3f6b629afd", hoisted4)
      elementOpen("input", "52b72882-e29a-4a87-a14f-9615e5d01766", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "e2ee3452-4487-4f57-81d2-58953b4ef7d3", hoisted6)
      elementOpen("input", "7c3a881f-9fc0-4889-9d45-465a1fc3bc99", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "8ba58b6e-f2b4-4ec5-9219-e0b68a86c53e", hoisted8)
      elementOpen("input", "ee53042b-9155-48e1-972e-f0bf1eb8fffe", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "dfc3d257-11ce-4636-8cfe-ca7012ea0e92", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "cd13209e-bf31-4448-b4eb-238ca9feb6eb_" + $item
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
                elementOpen("button", "cde31dad-916e-43de-b2b9-743065dc07dd_" + $key, hoisted11, "onclick", function ($event) {
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
