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
elementOpen("section", "961201e0-7cc3-4c63-a0ce-a7d46a80f6d9", hoisted1)
  elementOpen("input", "ce2f3a13-5ab5-4bae-ba3f-f436eeeb2351", hoisted2)
  elementClose("input")
  elementOpen("div", "7a430549-bb70-4a2f-9472-eedfa5b8c862", hoisted3)
    elementOpen("label", "d8b59958-e106-4c53-a683-c03f6183eb09", hoisted4)
      elementOpen("input", "965248db-b169-47ef-8182-50f6d8ef0c57", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "bb7b5682-86d1-4718-92b6-fc5f33350e84", hoisted6)
      elementOpen("input", "a174763b-8b92-465a-92d5-57a24ddbce2f", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "57d322e6-9e37-436b-b1cb-2dab8e7a73c2", hoisted8)
      elementOpen("input", "c1e53f4c-aa17-4eb5-bd69-8f2fc2bb8b81", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "3475be28-d5a6-4a1b-bd93-5ddd5190e039", hoisted10)
  elementOpen("div", "f16a9edd-51bc-4297-98b6-ab349ede83c7", hoisted11)
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
        elementOpen("button", "b1150555-39a8-446a-8686-a2b98219cae1", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
