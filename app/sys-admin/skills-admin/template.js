import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "skillsearch", "placeholder", "Search ..."]
var hoisted2 = ["type", "button", "name", "add"]
var hoisted3 = ["name", "skill"]
var hoisted4 = ["type", "text", "required", ""]
var hoisted5 = ["type", "text", "required", ""]
var hoisted6 = ["name", "category", "required", ""]
var hoisted7 = ["value", ""]
var hoisted8 = ["value", "booklet"]
var hoisted9 = ["value", "find"]
var hoisted10 = ["value", "take"]
var hoisted11 = ["value", "indexing"]
var hoisted12 = ["type", "checkbox"]
var hoisted13 = ["id", "skill-editor"]
var hoisted14 = ["type", "button", "name", "save", "class", "primary"]
var hoisted15 = ["type", "button", "name", "delete", "class", "danger"]
var hoisted16 = ["type", "button", "name", "cancel"]
var hoisted17 = ["class", "info"]
var hoisted18 = ["class", "title"]
var hoisted19 = ["class", "description"]
var hoisted20 = ["class", "action"]
var hoisted21 = ["type", "button"]
var __target

export function render (ctrl) {
if (!ctrl.skillEditor) {
  elementOpen("skills-search")
    elementOpen("input", "7c1c3520-ed90-4341-a43b-000d216e1006", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "619cdd7d-36c7-4e92-b7ec-9434c4be1916", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "48944d0f-236c-4e51-ae05-d975301f4d50", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "4a5b8409-c013-4c7a-a210-7d5737237b54", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "51c226c7-c9f4-47f5-875a-e7ef981bbf46", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "683ddef8-0138-4f59-92dd-653ac6553357", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "5a75d750-e963-4115-8da6-1712f3519ca0", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "7d6e00c9-b877-465e-bbe7-23e86d5b829b", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "2fbd3b57-c7a8-4797-85e7-90f45d836e0a", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "3fa155bd-d8e6-4c43-bea7-4bde6da4d47b", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "c1b9aef5-0d97-4b36-aa25-3f081f91ae1f", hoisted11, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "541fc7ae-0213-4561-a3fb-aa31ba72c644", hoisted12, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "866f5945-5b72-48ea-a5b2-8a11e9312755", hoisted13)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "06b62c0f-2163-453d-8496-915fcb466c90", hoisted14, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "845661bb-64e7-45dd-bc29-dfbc5bafcefe", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "389f7195-22c9-492b-82c5-d5c47a16d96f", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.cancelEdit()})
          text("Cancel")
        elementClose("button")
      elementClose("skill-editor-actions")
    elementClose("form")
  }
  if (!ctrl.skillEditor) {
    __target = ctrl.viewSkills
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var skill = $value
        var $key = "8e9ede05-063b-4bc4-92e1-ea42ee5af8ff_" + $item
        elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "9d5b4ea6-5544-4e67-a723-114a6bc00902_" + $key, hoisted17)
            elementOpen("div", "170af646-d36b-43ac-86b0-563facfde90e_" + $key, hoisted18)
              text("" + (skill.title) + "")
            elementClose("div")
            elementOpen("div", "22cf7a0c-49b3-4a7a-aa55-1d8041d9822c_" + $key, hoisted19)
              text("" + (skill.description) + "")
            elementClose("div")
          elementClose("div")
          elementOpen("div", "fcb74e3f-9dbc-43c5-bb3c-e889494a9f03_" + $key, hoisted20)
            elementOpen("button", "03dfe7d0-a900-414e-a55d-c3344fecbec6_" + $key, hoisted21, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
              var $element = this;
            ctrl.editSkill($value)})
              text("Edit")
            elementClose("button")
          elementClose("div")
        elementClose("skill-item")
      }, this)
    }
  }
elementClose("skills-list")
}
