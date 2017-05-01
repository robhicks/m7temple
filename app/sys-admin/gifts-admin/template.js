import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "giftsearch", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "name", "add"]
var hoisted3 = ["name", "gift"]
var hoisted4 = ["type", "text", "required", ""]
var hoisted5 = ["type", "text", "required", ""]
var hoisted6 = ["name", "category", "required", ""]
var hoisted7 = ["value", ""]
var hoisted8 = ["value", "booklet"]
var hoisted9 = ["value", "find"]
var hoisted10 = ["value", "take"]
var hoisted11 = ["value", "teach"]
var hoisted12 = ["value", "memories"]
var hoisted13 = ["value", "indexing"]
var hoisted14 = ["type", "checkbox"]
var hoisted15 = ["id", "gift-editor"]
var hoisted16 = ["type", "button", "name", "save", "class", "primary"]
var hoisted17 = ["type", "button", "name", "delete", "class", "danger"]
var hoisted18 = ["type", "button", "name", "cancel"]
var hoisted19 = ["class", "info"]
var hoisted20 = ["class", "title"]
var hoisted21 = ["class", "description"]
var hoisted22 = ["class", "action"]
var hoisted23 = ["type", "button"]
var __target

export function render (ctrl) {
if (!ctrl.giftEditor) {
  elementOpen("gifts-search")
    elementOpen("input", "ca28d3a7-6769-4d5e-9986-3f73dcfc75df", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterGifts(this.value)})
    elementClose("input")
    elementOpen("button", "1154cef2-1031-48fa-a789-35405bffce06", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addGift()})
      text("Add")
    elementClose("button")
  elementClose("gifts-search")
}
elementOpen("gifts-list")
  if (ctrl.giftEditor) {
    elementOpen("form", "bb21a545-536b-4aa5-8614-58cdd5da03db", hoisted3)
      elementOpen("gift-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "6eaadaa0-f587-4ffa-9016-14452b25d3a3", hoisted4, "name", ctrl.gift.title, "value", ctrl.gift.title, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.title = this.value})
        elementClose("input")
      elementClose("gift-editor-title")
      elementOpen("gift-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "9f9b8a0f-8ba7-4f1c-8c34-fe901cbf7060", hoisted5, "name", ctrl.gift.description, "value", ctrl.gift.description, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.description = this.value})
        elementClose("input")
      elementClose("gift-editor-description")
      elementOpen("gift-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "387457f4-ea5e-48c4-a656-580f5a60d4a3", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.category = this.value})
          elementOpen("option", "98fc97e9-524b-4000-84b1-37c826c4208b", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "ea677f65-9624-4d38-b746-54b4a99c9f56", hoisted8, "selected", ctrl.gift.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "0a299273-1bc1-453f-8136-7a8d634510da", hoisted9, "selected", ctrl.gift.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "5489413f-5fd8-46b2-b2b7-197be94ad91a", hoisted10, "selected", ctrl.gift.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "2f6eaf25-7247-499e-b700-d93bbbd6b0b2", hoisted11, "selected", ctrl.gift.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "3411bfee-87a7-40cd-a3c2-234fd7649c12", hoisted12, "selected", ctrl.gift.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "91ce8f23-35ca-4bee-b541-e5763d77ac8a", hoisted13, "selected", ctrl.gift.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("gift-editor-category")
      elementOpen("gift-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "4f0404b6-4f6b-46cb-82c1-7d882de6083b", hoisted14, "checked", ctrl.gift.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.multiple = this.checked})
        elementClose("input")
      elementClose("gift-editor-multiplicity")
      elementOpen("gift-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "966ba51a-1126-429b-9195-1b4885c744e3", hoisted15)
        elementClose("div")
      elementClose("gift-editor-instructions")
      elementOpen("gift-editor-actions")
        elementOpen("button", "11a5fbc4-5dea-48fb-a6eb-9d42be5b38de", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveGift()})
          text("Save")
        elementClose("button")
        elementOpen("button", "eae0f224-ebf7-40ef-a0e2-0c026df80b2a", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteGift()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "6ce8c679-69e5-4d52-9cd0-b98ccc538150", hoisted18, "onclick", function ($event) {
          var $element = this;
        ctrl.cancelEdit()})
          text("Cancel")
        elementClose("button")
      elementClose("gift-editor-actions")
    elementClose("form")
  }
  elementOpen("gifts-list-container")
    if (!ctrl.giftEditor) {
      __target = ctrl.viewGifts
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var gift = $value
          var $key = "6a475347-2c1e-48e2-b9c2-5c605bf332bd_" + $item
          elementOpen("gift-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "bbd3768d-923c-460c-bd16-9ef2a9d03ffd_" + $key, hoisted19)
              elementOpen("div", "72dff1e2-4033-49e2-8ea2-ff1f9d9fba1b_" + $key, hoisted20)
                text("" + (gift.title) + "")
              elementClose("div")
              elementOpen("div", "9c6666d9-597a-4ea1-8a60-2a0f7b99f8f6_" + $key, hoisted21)
                text("" + (gift.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "dc326db0-9361-4541-8da8-d013df0f15c6_" + $key, hoisted22)
              elementOpen("button", "b47f9ded-7ac7-4b3d-8faf-631ebbd48475_" + $key, hoisted23, "disabled", ctrl.giftFormValid, "onclick", function ($event) {
                var $element = this;
              ctrl.editGift($value)})
                text("Edit")
              elementClose("button")
            elementClose("div")
          elementClose("gift-item")
        }, this)
      }
    }
  elementClose("gifts-list-container")
elementClose("gifts-list")
}
