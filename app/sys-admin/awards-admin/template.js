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
elementOpen("section", "b437c42f-cbfb-43ba-980b-12d8eb5a407a", hoisted1)
  elementOpen("input", "f7d6fbeb-85d9-47b8-aeef-063790a16d60", hoisted2)
  elementClose("input")
  elementOpen("div", "7c5f02f5-5810-4313-85f0-17a01ee8efab", hoisted3)
    elementOpen("label", "8c72fbb4-4f1b-45fc-86cb-b74d9aab75fd", hoisted4)
      elementOpen("input", "95c0caac-4d92-47c6-bab8-9d497b761d17", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "90827977-e5bf-41c1-ae9b-fc313027a194", hoisted6)
      elementOpen("input", "ac6aff23-a5fe-44d9-bd11-0517eea411f0", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "23510616-ffa8-45d5-825f-ead248460a68", hoisted8)
      elementOpen("input", "6074fceb-ce3f-4baf-8c28-11120e80beb7", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "40e8ddc0-3d8c-41af-ad43-12c41c6005c3", hoisted10)
  elementOpen("div", "1196b8a2-3c5f-4e4f-ab6c-5130e773fc10", hoisted11)
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
        elementOpen("button", "9948d51f-f26d-4ba2-a3c7-13fa037a7562", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
