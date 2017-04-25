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
elementOpen("section", "6afb5618-8b10-44eb-b2da-d74ce8f97436", hoisted1)
  elementOpen("input", "e6c2a79f-c2a5-413e-9696-7d78a186eb11", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "1340b7ad-f9e3-4b6b-a414-4d401fd2a41d", hoisted3)
    elementOpen("label", "0bd0758f-7682-4259-98ac-5313aab4e49d", hoisted4)
      elementOpen("input", "3009d286-52c8-4abb-94ac-8e96541d5ca0", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "d0d2d993-f457-44e1-9cc6-5c3d64bfc1b5", hoisted6)
      elementOpen("input", "f2855501-523d-49fd-865a-52737fbfbf4e", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "6a41cb61-e5c8-4551-95e9-13d5393c5416", hoisted8)
      elementOpen("input", "7be3bc46-8d4a-4770-814e-20dfd84ac344", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "2cb46085-653d-4901-b5b4-18137aa7dc60", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "5bb5e384-b6af-468e-bd22-ae56d325add7_" + $item
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
                elementOpen("button", "cefb98bd-7151-46d9-9920-99cc752e2bef_" + $key, hoisted11, "onclick", function ($event) {
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
