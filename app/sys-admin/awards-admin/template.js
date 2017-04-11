import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["name", "header"]
var hoisted2 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."]
var hoisted3 = ["id", "filter"]
var hoisted4 = ["for", ""]
var hoisted5 = ["type", "radio", "name", "awardsFilter", "value", ""]
var hoisted6 = ["for", ""]
var hoisted7 = ["type", "radio", "name", "awardsFilter", "value", "", "checked", ""]
var hoisted8 = ["for", ""]
var hoisted9 = ["type", "radio", "name", "awardsFilter", "value", ""]
var hoisted10 = ["name", "awards"]
var hoisted11 = ["class", "row"]
var hoisted12 = ["type", "button", "class", "primary", "name", "accept"]
var __target

export function render (ctrl) {
elementOpen("section", "cf061897-0cc8-423f-9144-d499ffabc6c4", hoisted1)
  elementOpen("input", "e07eb196-21a1-4fba-9d9e-522985783bd5", hoisted2)
  elementClose("input")
  elementOpen("div", "61e75f7b-94e7-413a-b3e8-05edd5e40edb", hoisted3)
    elementOpen("label", "7f0a0646-4c9d-4c25-9fc9-cda308d44a2b", hoisted4)
      elementOpen("input", "8b0e4666-6eb5-4936-b998-9811a994f598", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "f12308fe-910a-44f8-955e-2f4a043f2c82", hoisted6)
      elementOpen("input", "b0d20d54-dc5b-46f6-a37d-4a671e210265", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "08cb67b2-c367-4ba1-91bd-3f4939d7e7c7", hoisted8)
      elementOpen("input", "8176252e-1978-49ea-9ed6-8f2139b53850", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "cbb08dab-79c0-4a4f-9c39-e224dc612c85", hoisted10)
  elementOpen("div", "1a9ba011-6c86-4466-9d17-7f01f4051ecb", hoisted11)
    elementOpen("user")
      elementOpen("name")
        text("Name")
      elementClose("name")
      elementOpen("value")
        text("Rob Hicks")
      elementClose("value")
    elementClose("user")
    elementOpen("skill")
      elementOpen("name")
        text("Skill")
      elementClose("name")
      elementOpen("value")
        text("My Family")
      elementClose("value")
    elementClose("skill")
    elementOpen("date")
      elementOpen("name")
        text("Date")
      elementClose("name")
      elementOpen("value")
        text("March 31")
      elementClose("value")
    elementClose("date")
    elementOpen("story")
      elementOpen("name")
        text("Story")
      elementClose("name")
      elementOpen("value")
        text("My Story")
      elementClose("value")
    elementClose("story")
    elementOpen("actions")
      elementOpen("name")
      elementClose("name")
      elementOpen("value")
        elementOpen("button", "0696403e-d3e2-4f25-92b4-b5497bbd6dcc", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
