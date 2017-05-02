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
    elementOpen("input", "516d45cf-bbec-45fb-8d5f-ddb65752a006", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterGifts(this.value)})
    elementClose("input")
    elementOpen("button", "c6f5c819-ae3f-43eb-a89f-08e395929e27", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addGift()})
      text("Add")
    elementClose("button")
  elementClose("gifts-search")
}
elementOpen("gifts-list")
  if (ctrl.giftEditor) {
    elementOpen("form", "31756ad7-2236-42d4-aea9-2f6f19d1cb94", hoisted3)
      elementOpen("gift-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "63fd09fd-ce90-4019-9014-607bdb3347f4", hoisted4, "name", ctrl.gift.title, "value", ctrl.gift.title, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.title = this.value})
        elementClose("input")
      elementClose("gift-editor-title")
      elementOpen("gift-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "ae987b5b-ad53-4bcc-8b9b-bdb069f93359", hoisted5, "name", ctrl.gift.description, "value", ctrl.gift.description, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.description = this.value})
        elementClose("input")
      elementClose("gift-editor-description")
      elementOpen("gift-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "5126f143-457d-4861-9c60-5d455239c586", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.category = this.value})
          elementOpen("option", "f1a3f53d-6bd6-4313-bd21-41996d874276", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "59c4aa5d-80d0-4745-9639-3aff480206d1", hoisted8, "selected", ctrl.gift.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "e3e3bdaf-5e39-4b87-b38d-2e67a7f7250f", hoisted9, "selected", ctrl.gift.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "486a36ac-a000-4feb-814a-5a2f1b241d93", hoisted10, "selected", ctrl.gift.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "f535168c-c51f-4c1d-bf1b-bd8eab583cbc", hoisted11, "selected", ctrl.gift.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "709ef10f-0dc3-4fd8-843e-217de8bab171", hoisted12, "selected", ctrl.gift.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "4cafca1e-dfb4-4a1f-b679-cdad51d6d969", hoisted13, "selected", ctrl.gift.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("gift-editor-category")
      elementOpen("gift-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "9a53f8bd-40f6-4190-b415-711633667980", hoisted14, "checked", ctrl.gift.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.multiple = this.checked})
        elementClose("input")
      elementClose("gift-editor-multiplicity")
      elementOpen("gift-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "9f47d37d-1705-436a-9b85-54340d5423ae", hoisted15)
        elementClose("div")
      elementClose("gift-editor-instructions")
      elementOpen("gift-editor-actions")
        elementOpen("button", "390cbf38-5ec5-45c6-8bd5-b652a1c3b640", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveGift()})
          text("Save")
        elementClose("button")
        elementOpen("button", "a6bd55ea-9014-450c-afe4-ff70c56279d2", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteGift()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "b1b13612-00b5-4a96-8dbf-6fc1ba237eb3", hoisted18, "onclick", function ($event) {
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
          var $key = "f14f11f0-2350-470b-8a16-4dc311789a68_" + $item
          elementOpen("gift-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "aa8f44a3-ac0d-4334-98e2-211c3447440a_" + $key, hoisted19)
              elementOpen("div", "d62d751a-b842-4ed9-b3bb-2afd2a8c1327_" + $key, hoisted20)
                text("" + (gift.title) + "")
              elementClose("div")
              elementOpen("div", "18eaed2a-84c1-4193-b5d2-589043bd1c8d_" + $key, hoisted21)
                text("" + (gift.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "c2ea504d-1bc5-4d5a-8f6e-05431c21426e_" + $key, hoisted22)
              elementOpen("button", "e418de9b-9f5f-44d1-8b3a-d0df3e21c4de_" + $key, hoisted23, "disabled", ctrl.giftFormValid, "onclick", function ($event) {
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
