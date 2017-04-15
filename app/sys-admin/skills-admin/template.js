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
    elementOpen("input", "7c4d9e67-6807-4534-969e-c2ea783becea", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "bdff98d5-3707-475e-9baa-94b8247870ec", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "f37b5cd0-11e0-42b7-89d4-beb5c160118a", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "1b539b0e-e053-4228-8073-c869e440d393", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "8bf65a16-2178-48f4-a2bb-f53a5625b007", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "6d02f823-a2be-499e-b446-4a42cf46e58b", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "1bcbd9fc-2e1c-4560-bedb-80a9f446fb66", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "cd93c0a6-cc61-48df-86a8-0659e4869ede", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "c7619d70-47a4-4939-b604-6c8365d04018", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "d26d7ac4-bd11-4469-9ab4-2abcf6d1d9ee", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "ffcf23b3-8e96-486a-bf80-7efceacdc84f", hoisted11, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "339f467e-0297-45d2-964a-c889fe4d8ff9", hoisted12, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "0683fa6b-a3d7-4353-8ce6-957cdb7ce31a", hoisted13)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "06252cf8-2aa3-4290-a1c5-1b3a029ed3f1", hoisted14, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "edf79088-56d3-4621-b545-b4e72f8abbb8", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "1485decb-adda-4238-b3c4-b3520d7ce7d9", hoisted16, "onclick", function ($event) {
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
        var $key = "10f2b4fa-9bca-4bf8-a4c2-53eb93e8a504_" + $item
        elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "0ca9cbb9-937c-484b-8bdb-a59e92b223db_" + $key, hoisted17)
            elementOpen("div", "517622b7-a066-42e5-8e69-927d12413031_" + $key, hoisted18)
              text("" + (skill.title) + "")
            elementClose("div")
            elementOpen("div", "5a893a02-3147-4a8d-b000-f26e3de96931_" + $key, hoisted19)
              text("" + (skill.description) + "")
            elementClose("div")
          elementClose("div")
          elementOpen("div", "24bf028d-ac8d-41af-9269-88ffce5cf8f8_" + $key, hoisted20)
            elementOpen("button", "1485b656-fd46-4d80-bae0-f68ab718a215_" + $key, hoisted21, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
