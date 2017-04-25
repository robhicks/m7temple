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
    elementOpen("input", "b1db0018-973c-4a30-83ac-3d219289a5b7", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "84acfa70-c1cd-4d61-aaca-dc25a3e5122f", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "7ed56eb0-edb6-4813-ba9e-6db07e4d6028", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "6eeab550-a8ba-4185-a715-d89d9ccfd621", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "5e6cf4c6-cd0d-4722-9f82-6ccab131b83b", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "41643818-fe88-4960-b09f-01add8f76bfb", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "8b0a50a2-3153-4325-bb39-68da0c640656", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "271ae5b2-2816-48f8-a144-bdc4536573b1", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "2b105896-11f7-4f6f-9c0e-36d43c42281e", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "ae5c33a1-768a-4964-a67f-770e7150cbbe", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "e1732797-a0f7-4d2b-bfde-c387f4652c7a", hoisted11, "selected", ctrl.skill.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "12e10c8b-2a58-49f4-9fbc-c98baa7eacef", hoisted12, "selected", ctrl.skill.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "58a8bf91-7e79-45fc-add7-8fae2742b8ae", hoisted13, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "e112f490-f9a7-4695-b4b5-8c740b601682", hoisted14, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "c3cff940-c789-429e-a8cb-600aa3f14c28", hoisted15)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "ba9a8391-b477-4284-9d3e-84762e06151e", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "78b98c83-ceea-4cb3-bb32-c8f42a53dcea", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "6186af09-4e52-42e3-a616-bd54eda9fc78", hoisted18, "onclick", function ($event) {
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
          var $key = "0120e339-cf57-47d0-a70c-01bf03a94fac_" + $item
          elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "b15e7626-901e-4dce-9d72-a794b1cb8a8f_" + $key, hoisted19)
              elementOpen("div", "8900abd7-9801-418a-b1b0-1173fef09dd4_" + $key, hoisted20)
                text("" + (skill.title) + "")
              elementClose("div")
              elementOpen("div", "d0f2af39-273a-4022-ba79-8f829207ac49_" + $key, hoisted21)
                text("" + (skill.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "8855fa75-b18e-48f9-94b2-5aa54e7960d7_" + $key, hoisted22)
              elementOpen("button", "1250a578-19ae-46ea-a15a-741308ff872a_" + $key, hoisted23, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
