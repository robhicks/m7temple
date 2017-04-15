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
elementOpen("section", "60e4bd2e-6d01-4d3b-8810-9b725432fbe0", hoisted1)
  elementOpen("input", "dbd860d4-008f-4948-a881-f39bb6ffda57", hoisted2)
  elementClose("input")
  elementOpen("div", "a10bdd50-9d3e-4b06-9cc9-d7bfb546d0c2", hoisted3)
    elementOpen("label", "47c8ce46-b7c2-4289-9754-2b7505d5a3a1", hoisted4)
      elementOpen("input", "f30b8542-7822-4382-82b0-766e2871e862", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "e13f2caa-2426-4d2c-82b3-6f0f6ff1a77b", hoisted6)
      elementOpen("input", "5570336e-4487-478e-99d7-2e9a15ec8f6c", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "314aefd5-8d58-4477-bb18-d0141cd86aed", hoisted8)
      elementOpen("input", "b266b934-50c2-4d4c-80cd-e04e26dcaa81", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "9d747566-c8ac-4094-baf5-db8cdd4a0975", hoisted10)
  elementOpen("div", "2e9f2838-6755-4b48-97d9-2a9e097d8968", hoisted11)
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
    elementOpen("help")
      elementOpen("name")
        text("Will Help")
      elementClose("name")
      elementOpen("value")
        text("Yes")
      elementClose("value")
    elementClose("help")
    elementOpen("share")
      elementOpen("name")
        text("Will Share")
      elementClose("name")
      elementOpen("value")
        text("Yes")
      elementClose("value")
    elementClose("share")
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
        elementOpen("button", "bd5ef6b9-bd6b-41d1-bf0e-f159c48c227c", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
