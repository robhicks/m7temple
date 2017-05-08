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
  elementOpen("div", "c2fc669d-9ac0-4fa9-ace0-59f102b54188", hoisted1)
    elementOpen("div", "c8acca5e-8fd2-4ea1-ae92-7384c5b4ff3d", hoisted2)
      elementOpen("div", "dff54f84-56e6-42f2-a91f-53075da622fa", hoisted3)
        elementOpen("div", "e98b773b-e83a-48d4-aba3-7f52615c4d74", hoisted4)
          elementOpen("h4")
            text("" + (ctrl._heading) + "")
          elementClose("h4")
        elementClose("div")
        elementOpen("div", "e0eac7af-71ed-4217-9387-4c3651796672", hoisted5)
          text("" + (ctrl._body) + "")
        elementClose("div")
        elementOpen("div", "d1a3e24f-f4f8-4018-b009-b154fdb25f12", hoisted6)
          elementOpen("button", "976493d7-b00f-4a0c-ba6c-65ed8cfb3930", hoisted7, "onclick", function ($event) {
            var $element = this;
          ctrl._clickButton('primary')})
            text("" + (ctrl._primary) + "")
          elementClose("button")
          if (ctrl._cancel) {
            elementOpen("button", "d021de46-9d11-4d1a-8a27-35dae4c94419", hoisted8, "onclick", function ($event) {
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
