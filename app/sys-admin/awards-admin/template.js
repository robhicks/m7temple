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
elementOpen("section", "7e657786-b594-49f9-ad68-181198f16475", hoisted1)
  elementOpen("input", "ef6e1f26-4ac7-4301-9547-a270ae23dd0a", hoisted2)
  elementClose("input")
  elementOpen("div", "2b8c9a6f-8526-4258-af92-69741bc5a885", hoisted3)
    elementOpen("label", "37a96312-5780-46f0-9301-15ed08bd4214", hoisted4)
      elementOpen("input", "2a528c46-78da-405f-893b-2c3496e43161", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "f4dd7c50-a23f-4720-b19b-d1effe7558f7", hoisted6)
      elementOpen("input", "cadef4d7-09be-472d-99d3-1a7ea49127d6", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "381abef9-0db3-4615-8b16-2010eab58423", hoisted8)
      elementOpen("input", "ef23c133-3101-4163-a6ca-f34aa08e9d87", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "747002f9-c7e4-48df-9a85-d781895f605f", hoisted10)
  elementOpen("div", "b82e88aa-0981-405f-a58d-ab21df80c614", hoisted11)
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
        elementOpen("button", "e60eb27b-dd1f-4805-a996-cfd8bf197405", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
