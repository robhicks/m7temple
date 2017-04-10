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
elementOpen("section", "f333c7a8-53b8-49b4-a98f-edd3041087fe", hoisted1)
  elementOpen("input", "a286e302-a0ac-4ec0-b9b9-97d4860a3917", hoisted2)
  elementClose("input")
  elementOpen("div", "da8cff84-9620-4587-a42a-bd292a808aad", hoisted3)
    elementOpen("label", "25b8c216-7f9c-47fe-ae5a-912d8a5c75cb", hoisted4)
      elementOpen("input", "76334a62-1b64-469e-b0e0-dd1fa855ef74", hoisted5)
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "7682ff65-0388-4d6a-b037-163e06dfaa94", hoisted6)
      elementOpen("input", "1a27fc80-e7ea-4a33-b603-c8e9cb2671f5", hoisted7)
      elementClose("input")
      text(" \
            Pending \
          ")
    elementClose("label")
    elementOpen("label", "cd329217-36f4-47f4-9700-e910afee05ee", hoisted8)
      elementOpen("input", "7c170252-3069-4022-ba05-70344ea89d7e", hoisted9)
      elementClose("input")
      text(" \
            Earned \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
elementOpen("section", "99c75e59-711e-4c51-821e-6eb348b98116", hoisted10)
  elementOpen("div", "93803a47-49e4-4da1-8709-0c409feda33d", hoisted11)
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
        elementOpen("button", "56edd641-13d8-4715-813c-c6a9d091d031", hoisted12)
          text("Accept")
        elementClose("button")
      elementClose("value")
    elementClose("actions")
  elementClose("div")
elementClose("section")
}
