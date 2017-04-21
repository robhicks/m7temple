import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "overlay"]
var hoisted2 = ["id", "modal"]
var hoisted3 = ["id", "content"]
var hoisted4 = ["id", "header"]
var hoisted5 = ["id", "body"]
var hoisted6 = ["id", "buttons"]
var hoisted7 = ["type", "button", "name", "primary", "class", "button primary"]
var hoisted8 = ["type", "button", "name", "cancel", "class", "button minor"]
var __target

export function render (ctrl) {
if (ctrl._show) {
  elementOpen("div", "91dd189a-c908-43b1-a8fa-43c5acf0eb8d", hoisted1)
    elementOpen("div", "3c596b4f-72f6-48c4-8af1-5a4360fc6203", hoisted2)
      elementOpen("div", "be9d8917-1131-4ce6-9ce9-0c0c53b89822", hoisted3)
        elementOpen("div", "edd3223e-3479-4b42-b5e3-afacd74ea2c1", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "5980a5e8-30d5-4a38-90d5-ce339c07906b", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "7ad90068-0c5f-4455-8e5c-d179d9a19132", hoisted6)
          elementOpen("button", "ca643df5-ae73-47cb-8eca-743bb3a1859a", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "51bfe30d-ff0e-4214-aff1-598deda439fe", hoisted8, "onclick", function ($event) {
              var $element = this;
            ctrl._clickButton('cancel')})
              text("" + (ctrl._cancel) + "")
            elementClose("button")
          }
        elementClose("div")
      elementClose("div")
    elementClose("div")
  elementClose("div")
}
}
