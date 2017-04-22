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
    elementOpen("input", "5d9d24e8-eb88-4bf0-af99-bb219b769500", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "8a7db5af-c256-43a5-b835-ba30b6aa4c50", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "d08598ac-6fda-43db-9f42-961e896485b0", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "e0db97da-8a07-43e5-9ac2-803aa664ef0f", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "0bf4fc64-8e93-40e4-90b6-a5b0b558c92d", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "3e69b64a-53d0-4364-8ab1-bc0153e1a096", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "bad53cfb-c9d6-433e-9970-7dd2fcde0f42", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "22a053c2-41ae-4596-bcb8-5601039a344f", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "162f403e-230a-4e59-a901-753eb20b0a9a", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "c1013dfc-7c81-4bee-9a2f-39f2285643db", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "33aba948-adf5-4eda-b97c-ecf2c28dafb4", hoisted11, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "b3af0ac0-2a9f-4865-85e9-95cab50efd74", hoisted12, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "e6694d3d-cd50-4ef5-bf31-1341a6975d89", hoisted13)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "d1cb1446-992b-49f3-92f1-8c8077974058", hoisted14, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "e0e5e786-ac08-45df-abb7-49bb2418f2ef", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "61fbfe0c-629a-4e4c-b148-2b7947a15647", hoisted16, "onclick", function ($event) {
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
        var $key = "83a9ca53-dc51-41c9-b5d8-7d958ca8304e_" + $item
        elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "aef21a8a-206b-495d-8c2d-1105eefc9246_" + $key, hoisted17)
            elementOpen("div", "6d7cc9c1-527e-436b-8bb5-4e6bcb649210_" + $key, hoisted18)
              text("" + (skill.title) + "")
            elementClose("div")
            elementOpen("div", "e0586bea-7127-4a4a-9d4c-6fafd9357106_" + $key, hoisted19)
              text("" + (skill.description) + "")
            elementClose("div")
          elementClose("div")
          elementOpen("div", "7ef3216f-d937-4e23-aa4a-181e605acfee_" + $key, hoisted20)
            elementOpen("button", "bdf6d65d-b9dd-4a87-ba51-94f8ea993a9a_" + $key, hoisted21, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
