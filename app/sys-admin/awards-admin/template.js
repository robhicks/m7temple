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
elementOpen("section", "9007ce48-b211-4563-a5c4-d7b2ae644ede", hoisted1)
  elementOpen("input", "587ed0f2-92c3-47d6-8b97-77edcea896b8", hoisted2)
  elementClose("input")
  elementOpen("div", "78aa0b4c-4879-4779-bdee-01eeaa605ea9", hoisted3)
    elementOpen("label", "b4abbd81-14b9-490e-9c0d-ff20546ff7bb", hoisted4)
      elementOpen("input", "0f15b56b-2c67-4135-8954-1e30f6873091", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "9a1ad9d0-6db6-483c-b7ea-3a00d05260ac", hoisted6)
      elementOpen("input", "e84f945e-eef5-4112-a98e-8d1671cb6b52", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "a3674765-569c-4e03-b85d-a5c4cf147f03", hoisted8)
      elementOpen("input", "a29e0ba4-f9db-463c-b981-d41b3ae18678", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "341402ec-d02d-43e4-98bc-ebe845fde60d", hoisted10)
  elementOpen("div", "2a7959ac-9531-4296-a6fd-7159c6217c7a", hoisted11)
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
        elementOpen("button", "b06416bb-da41-4379-bd94-920894d8b8e1", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
