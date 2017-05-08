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
elementOpen("section", "08c92e41-6b4f-4174-90b2-86f31e3ce64a", hoisted1)
  elementOpen("input", "1b8c9993-7247-4bc6-abc7-120e0a2ebbe5", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterAwards()})
  elementClose("input")
  elementOpen("div", "3fafe7f2-9372-4f42-b4e0-b070cb31b094", hoisted3)
    elementOpen("label", "82474183-94ff-497b-b97e-16f57a9d758e", hoisted4)
      elementOpen("input", "dd60fa8f-ebaf-4a34-92e9-ca919e5d48fe", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "0fedfec6-54dd-48e7-b94c-66eacd65c25e", hoisted6)
      elementOpen("input", "9a899293-258e-43da-a011-d84b940423b4", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterAwards()})
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "5cc35466-9eb3-4815-bdb2-5b9980221a45", hoisted8)
      elementOpen("input", "563ce90d-801d-4f41-9a6c-8315ff23a25d", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "395e2cce-8476-4005-addc-64a81051641c", hoisted10)
    __target = ctrl.awards
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var award = $value
        var $key = "e84bf6c1-4e18-42d7-ac1b-5866f863c7fc_" + $item
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
                  elementOpen("button", "10b3b51a-c3b5-4776-a734-93dd62f9ddb9_" + $key, hoisted11, "onclick", function ($event) {
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
