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
elementOpen("section", "3f88b1ca-72e6-49b2-af4f-791780941db6", hoisted1)
  elementOpen("input", "448e9db8-e40f-40f0-aa57-29569b79171a", hoisted2)
  elementClose("input")
  elementOpen("div", "e0af977f-be0b-4b90-a3fb-6e0afe6119c3", hoisted3)
    elementOpen("label", "19ac56bb-f142-4cd6-9b07-5a9134cdd6c0", hoisted4)
      elementOpen("input", "0068ec8c-1948-451b-bfbd-8f2b0b2b2606", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "322e57a6-6ba0-4e60-88c6-e66826f4eed7", hoisted6)
      elementOpen("input", "01a04b1f-fe46-4b9e-a4de-62d1800990b9", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "6c3ab7ea-d22b-444d-938c-40e1767bc153", hoisted8)
      elementOpen("input", "0d5ebe64-4684-4c50-9e91-9210f2f37345", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "91bd4c70-8654-4ff3-87cc-69fc27647a05", hoisted10)
  elementOpen("div", "09d805f2-ef3f-4f01-9271-7a4f5cb0ff5c", hoisted11)
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
        elementOpen("button", "e8c9d336-218f-4491-9017-db3f0037bc3b", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
