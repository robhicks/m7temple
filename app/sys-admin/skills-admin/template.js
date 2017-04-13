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
    elementOpen("input", "26e2b7a2-f242-4553-8dcb-ae8797366da6", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "63cd5415-74ae-456b-9f4f-e2e048a645a5", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "963dcaba-ac88-41f6-9897-cb5fff195f04", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "4f3fbd9c-4c2a-4be4-9fd5-2f3dae196eff", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "76d75002-9b11-4aa5-8407-520dca8d9bc2", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "3cf0084a-7e12-4f47-86fd-d729e17b8f1a", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "dd656db1-1c4b-45ec-af96-a168d9939aeb", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "aa67f194-4e9c-4bcb-a052-f4ab7a430607", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "f12b4272-a072-4698-91ba-5d64a3ac4023", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "c806d5d4-3a46-4e93-b789-cf4ff60c0e30", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "6ded6fed-d9e6-4d7b-b14e-a3613e1b40a8", hoisted11, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "52d23bbf-2373-44d6-ab9e-ae1358c18102", hoisted12, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "c995c2a4-6714-4b78-a57d-5744bebd09fe", hoisted13)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "b5034ccd-8a60-4234-82c1-ea7b69e0cc65", hoisted14, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "ed2d52f2-78af-4416-bf37-bb494b778789", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "e02e4ef4-d3da-4629-816e-412b2a8d50c1", hoisted16, "onclick", function ($event) {
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
        var $key = "9e963216-b569-435b-97d7-9fdcda4f8436_" + $item
        elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "0baa36ba-8aff-4e4c-9a87-23035e2edf69_" + $key, hoisted17)
            elementOpen("div", "bcec1acf-14f2-4da2-9b68-66ead20af739_" + $key, hoisted18)
              text("" + (skill.title) + "")
            elementClose("div")
            elementOpen("div", "200fb1cf-7613-424e-872b-21f8e9497bae_" + $key, hoisted19)
              text("" + (skill.description) + "")
            elementClose("div")
          elementClose("div")
          elementOpen("div", "7ab56de4-84f4-4ff1-8163-1d080f90fd41_" + $key, hoisted20)
            elementOpen("button", "ba6cb8da-2545-43f2-853d-49a951035dfa_" + $key, hoisted21, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
