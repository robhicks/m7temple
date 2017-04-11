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
  elementOpen("div", "0ecc2d7a-615c-4781-86ce-7628b969c8b4", hoisted1)
    elementOpen("div", "dd885f53-aa71-4a77-93fb-9180f5a8ba22", hoisted2)
      elementOpen("div", "283b5021-8bb4-4423-8c1b-dc2b286f7b65", hoisted3)
        elementOpen("div", "67b624ff-1c83-4901-8496-8b4ff614bdf5", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "d25fb480-e516-4ca4-9cea-b2a5d5ba9f17", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "a009fa4f-db55-455a-896d-1f28c244fb3e", hoisted6)
          elementOpen("button", "bbc889ba-bc82-49f5-bb8a-46b35126add7", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "3bff6413-7277-42d5-802b-a501199334af", hoisted8, "onclick", function ($event) {
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
