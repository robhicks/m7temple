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
    elementOpen("input", "c2942db7-56d7-43d5-94ae-c8b1f17a5d91", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterGifts(this.value)})
    elementClose("input")
    elementOpen("button", "2ca0e092-183a-440c-a5d3-1101f65c9f82", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addGift()})
      text("Add")
    elementClose("button")
  elementClose("gifts-search")
}
elementOpen("gifts-list")
  if (ctrl.giftEditor) {
    elementOpen("form", "948b4f53-36f9-44b9-bc30-29bc52ae0c33", hoisted3)
      elementOpen("gift-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "24142fa9-1949-4f9f-8a8c-1f1aa7578a0a", hoisted4, "name", ctrl.gift.title, "value", ctrl.gift.title, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.title = this.value})
        elementClose("input")
      elementClose("gift-editor-title")
      elementOpen("gift-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "313be320-646c-4e31-96c4-8ebf6ec9e226", hoisted5, "name", ctrl.gift.description, "value", ctrl.gift.description, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.description = this.value})
        elementClose("input")
      elementClose("gift-editor-description")
      elementOpen("gift-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "bec4a136-dd13-40e1-834c-89e2504ef50d", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.category = this.value})
          elementOpen("option", "d71f6640-18ae-40dd-b167-5ae54af84378", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "1d9497be-4a86-4404-8843-0ee138f6c8fb", hoisted8, "selected", ctrl.gift.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "f71de987-3cca-4734-afad-d791fe06d235", hoisted9, "selected", ctrl.gift.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "cf96450f-7ace-4203-b532-63a337f7643b", hoisted10, "selected", ctrl.gift.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "da5adbbe-dbb7-48fb-b532-ab63fa76846a", hoisted11, "selected", ctrl.gift.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "dae4a247-47ce-49cf-80a5-afce2515faad", hoisted12, "selected", ctrl.gift.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "7a0ea3d1-3295-454e-90d6-20770ad7d0e0", hoisted13, "selected", ctrl.gift.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("gift-editor-category")
      elementOpen("gift-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "e37784a1-0a80-45bf-9f2e-3c3eb5450b9e", hoisted14, "checked", ctrl.gift.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.multiple = this.checked})
        elementClose("input")
      elementClose("gift-editor-multiplicity")
      elementOpen("gift-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "deb175cc-bff3-4e06-a427-edd966a322a3", hoisted15)
        elementClose("div")
      elementClose("gift-editor-instructions")
      elementOpen("gift-editor-actions")
        elementOpen("button", "e80cafbf-e5f7-4f1d-878e-45f9f3c5d2e5", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveGift()})
          text("Save")
        elementClose("button")
        elementOpen("button", "9bad051e-3c86-4cc4-8e5e-f3dc56ef5ecd", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteGift()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "e156ad7d-1b84-4b47-9344-5bdc3d8554e3", hoisted18, "onclick", function ($event) {
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
          var $key = "8923dc09-643d-4583-a602-0e15d4d720da_" + $item
          elementOpen("gift-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "cfd08762-9c07-4dd9-94a7-b8ec2d621031_" + $key, hoisted19)
              elementOpen("div", "8e755d4e-6e4f-4f06-b20a-a22792531724_" + $key, hoisted20)
                text("" + (gift.title) + "")
              elementClose("div")
              elementOpen("div", "9ded82d2-bba4-407e-800b-c2732e990e11_" + $key, hoisted21)
                text("" + (gift.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "d02a7c2a-44d2-4242-9fa6-03e04ad9d1ed_" + $key, hoisted22)
              elementOpen("button", "2b3ab25a-7faf-4176-ae97-9f6389bbbd57_" + $key, hoisted23, "disabled", ctrl.giftFormValid, "onclick", function ($event) {
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
