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
    elementOpen("input", "25a39efc-12da-4b1f-ad8d-a5b6a76e166a", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterGifts(this.value)})
    elementClose("input")
    elementOpen("button", "dfa40e3e-8d75-4ab6-93f1-db64f8178177", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addGift()})
      text("Add")
    elementClose("button")
  elementClose("gifts-search")
}
elementOpen("gifts-list")
  if (ctrl.giftEditor) {
    elementOpen("form", "4108e291-966e-45d2-8b6f-cfd356481380", hoisted3)
      elementOpen("gift-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "51be285e-c307-47a6-92bc-e3ff685c02ed", hoisted4, "name", ctrl.gift.title, "value", ctrl.gift.title, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.title = this.value})
        elementClose("input")
      elementClose("gift-editor-title")
      elementOpen("gift-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "9c5bc230-dc6d-4099-ae01-369229721628", hoisted5, "name", ctrl.gift.description, "value", ctrl.gift.description, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.description = this.value})
        elementClose("input")
      elementClose("gift-editor-description")
      elementOpen("gift-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "ef8b2f65-2915-4710-8e3d-030ed789794c", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.category = this.value})
          elementOpen("option", "ba606106-b24d-41b3-af5c-662867ab52b6", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "947a8b0b-9c44-4199-a939-836c6f17b631", hoisted8, "selected", ctrl.gift.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "86505869-3f3b-42e2-8c05-27a9b1fe5198", hoisted9, "selected", ctrl.gift.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "2cfc28d8-5637-4235-8b5b-1cd513336e3b", hoisted10, "selected", ctrl.gift.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "c621e035-22a3-4483-8077-de6eb9d2f420", hoisted11, "selected", ctrl.gift.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "749b6032-aa23-4a8f-aa95-62a7a3a62615", hoisted12, "selected", ctrl.gift.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "d20d84af-6a76-4fc3-9481-f08f2dd415f0", hoisted13, "selected", ctrl.gift.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("gift-editor-category")
      elementOpen("gift-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "4902e4ea-6e76-4b2f-9606-51594706d850", hoisted14, "checked", ctrl.gift.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.multiple = this.checked})
        elementClose("input")
      elementClose("gift-editor-multiplicity")
      elementOpen("gift-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "729240b9-7ce5-452b-8ebf-a392a54d172c", hoisted15)
        elementClose("div")
      elementClose("gift-editor-instructions")
      elementOpen("gift-editor-actions")
        elementOpen("button", "8134a198-e167-4ed3-a781-78e7d85cdcb2", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveGift()})
          text("Save")
        elementClose("button")
        elementOpen("button", "f378ccd3-777e-4bd1-a040-777871a9fb9f", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteGift()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "f399937d-d0d4-43de-966e-9933575c2a5a", hoisted18, "onclick", function ($event) {
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
          var $key = "3de50d7b-fe9c-48b3-b4e7-b2bc6f369905_" + $item
          elementOpen("gift-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "cc510f78-c55f-4cf2-ab52-de3976e67690_" + $key, hoisted19)
              elementOpen("div", "19eaac0b-c22e-4efa-b969-50bb6a0be29a_" + $key, hoisted20)
                text("" + (gift.title) + "")
              elementClose("div")
              elementOpen("div", "b2cd5ba3-078a-4d65-8972-c685c7341560_" + $key, hoisted21)
                text("" + (gift.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "ba5294b0-5a95-4b75-93c6-d898a399ffd9_" + $key, hoisted22)
              elementOpen("button", "248f8f2c-fad6-4502-abee-ea7d95eaa134_" + $key, hoisted23, "disabled", ctrl.giftFormValid, "onclick", function ($event) {
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
