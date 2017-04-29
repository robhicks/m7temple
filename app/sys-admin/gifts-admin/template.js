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
    elementOpen("input", "818f53e9-6475-4100-ac75-7e36bbbb1cf2", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterGifts(this.value)})
    elementClose("input")
    elementOpen("button", "22fe680d-82e4-4523-a4a8-6e4a5b320988", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addGift()})
      text("Add")
    elementClose("button")
  elementClose("gifts-search")
}
elementOpen("gifts-list")
  if (ctrl.giftEditor) {
    elementOpen("form", "a58ea741-3f10-4939-8046-19a2d64f319a", hoisted3)
      elementOpen("gift-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "f772b8bb-4c24-4e14-900c-b56350669749", hoisted4, "name", ctrl.gift.title, "value", ctrl.gift.title, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.title = this.value})
        elementClose("input")
      elementClose("gift-editor-title")
      elementOpen("gift-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "4769e029-723e-4593-9e94-956be10e21d2", hoisted5, "name", ctrl.gift.description, "value", ctrl.gift.description, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.description = this.value})
        elementClose("input")
      elementClose("gift-editor-description")
      elementOpen("gift-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "017a99dc-5c60-4491-80e3-e451fcf7f601", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.category = this.value})
          elementOpen("option", "f084013a-c9d9-4420-9caf-90273bde6ad1", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "77367c08-8a32-4534-9245-73ef7e184d7d", hoisted8, "selected", ctrl.gift.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "40d8b042-1556-4c9d-9f21-31a69552f75c", hoisted9, "selected", ctrl.gift.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "292727b5-358d-417d-ae68-ef207597899c", hoisted10, "selected", ctrl.gift.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "28a51936-b91a-400b-af77-cd86fac881fe", hoisted11, "selected", ctrl.gift.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "1cfb5615-c76c-486d-a102-28723fc5891b", hoisted12, "selected", ctrl.gift.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "27a996fd-ec40-46c9-8963-ebef4d1a9793", hoisted13, "selected", ctrl.gift.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("gift-editor-category")
      elementOpen("gift-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "ae0c4c23-ad85-496d-ae75-1c27445e3ed9", hoisted14, "checked", ctrl.gift.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.gift.multiple = this.checked})
        elementClose("input")
      elementClose("gift-editor-multiplicity")
      elementOpen("gift-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "ee84d216-3c4b-4b2c-b992-02fda7ad3984", hoisted15)
        elementClose("div")
      elementClose("gift-editor-instructions")
      elementOpen("gift-editor-actions")
        elementOpen("button", "6af3eb91-5de7-49fe-b55e-b3ccdc4e0e22", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveGift()})
          text("Save")
        elementClose("button")
        elementOpen("button", "88c5a8b8-4477-44d5-97f6-94cf492023c8", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteGift()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "ad7b77c2-4b0a-47bf-ba52-6c51750ce10e", hoisted18, "onclick", function ($event) {
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
          var $key = "0b49ddf0-cab7-4322-ae7a-afc2c12b9227_" + $item
          elementOpen("gift-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "e98eb44e-43e3-4c12-81b7-21e65e139e6c_" + $key, hoisted19)
              elementOpen("div", "98b2d105-3d68-4c31-8e5b-39861105fc08_" + $key, hoisted20)
                text("" + (gift.title) + "")
              elementClose("div")
              elementOpen("div", "629993c8-39ef-471d-9b7a-29cb8b884f73_" + $key, hoisted21)
                text("" + (gift.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "9898268f-b90e-4052-a6f2-423f1c33c7ad_" + $key, hoisted22)
              elementOpen("button", "09437fde-f7fb-445c-9385-bdaecf3cdf52_" + $key, hoisted23, "disabled", ctrl.giftFormValid, "onclick", function ($event) {
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
