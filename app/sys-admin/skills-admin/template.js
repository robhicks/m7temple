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
var hoisted11 = ["value", "teach"]
var hoisted12 = ["value", "memories"]
var hoisted13 = ["value", "indexing"]
var hoisted14 = ["type", "checkbox"]
var hoisted15 = ["id", "skill-editor"]
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
if (!ctrl.skillEditor) {
  elementOpen("skills-search")
    elementOpen("input", "a0e35af0-04d9-4061-83d1-1bb5a741cc00", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "770c183e-0457-43b3-8d68-72eccfe95d71", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "fcf589be-11b6-431d-8a55-82a419079681", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "cc0aded2-964c-43d5-91e7-1077f01d9e94", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "71b5ccd4-8c67-44d9-adf8-53f8b0dc892e", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "54dd7b76-9b33-4229-b859-f391b7a91b8a", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "330efbe6-8463-414a-8d96-4af6a4cc0f1b", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "e1979f52-3af2-422e-8071-072c56291892", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "e576cb1c-54de-4547-96d0-7636c2fe68aa", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "cf180490-0905-4431-8a23-869a9e629651", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "096845b4-1ea9-4a6a-93b1-8fb223b444ce", hoisted11, "selected", ctrl.skill.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "6493788f-e890-486a-8d5b-0a3285e09ab1", hoisted12, "selected", ctrl.skill.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "73010704-cc99-4ee5-a81f-e7be68a0b522", hoisted13, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "f9559d67-d7cf-494a-a17a-167ef83f73cc", hoisted14, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "781daab7-c84e-4be8-9a66-6bb68104611d", hoisted15)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "b51343d6-b9e1-4472-9216-00f1105222e7", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "90e8a96c-117e-42f6-b755-abe48e4b278d", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "e40d9713-0cc9-4e21-b6ec-d28ed3e2906e", hoisted18, "onclick", function ($event) {
          var $element = this;
        ctrl.cancelEdit()})
          text("Cancel")
        elementClose("button")
      elementClose("skill-editor-actions")
    elementClose("form")
  }
  elementOpen("skills-list-container")
    if (!ctrl.skillEditor) {
      __target = ctrl.viewSkills
      if (__target) {
        ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
          var skill = $value
          var $key = "fda08d5f-6b6a-45f4-be52-644dfc58fbb5_" + $item
          elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "abfcefec-f6d8-4e95-afdf-795a8170eb62_" + $key, hoisted19)
              elementOpen("div", "8d83eabd-e3af-411b-9b85-e72b950aa5b2_" + $key, hoisted20)
                text("" + (skill.title) + "")
              elementClose("div")
              elementOpen("div", "a79be384-71e1-4c3d-9e00-604acdd75a72_" + $key, hoisted21)
                text("" + (skill.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "570eefd4-4b0f-4775-a272-49fa7422fe44_" + $key, hoisted22)
              elementOpen("button", "0f7b0257-0a09-415a-b319-497cca5111c4_" + $key, hoisted23, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
                var $element = this;
              ctrl.editSkill($value)})
                text("Edit")
              elementClose("button")
            elementClose("div")
          elementClose("skill-item")
        }, this)
      }
    }
  elementClose("skills-list-container")
elementClose("skills-list")
}
