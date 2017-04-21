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
    elementOpen("input", "715d0e9e-408a-44b2-bf84-8d2c89ae1499", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "eb1fc288-0867-4e75-923a-27bc7fc32025", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "c4ffd7e1-60e2-4e9e-bbc2-b7a750e7a06c", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "2512d26f-0def-4d01-abb2-1c56493df41a", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "82df72e1-e057-47bd-ad18-a0353a60aacf", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "af6db380-209a-4778-a2f9-fab4547f2e95", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "f86a047e-48f3-4458-9ead-b72d6edfd655", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "36c3b090-4ac7-4f72-8ee2-6f92f96bfaaf", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "bdf257ac-4831-4c4c-958e-815a2328e7ab", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "29527183-773c-4211-b47d-7de13072349e", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "2340b02a-deb6-4bf1-8ac7-41316aec26c7", hoisted11, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "91202830-ea72-4091-9137-2c88f321752f", hoisted12, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "765077ad-8030-407e-b342-ca19b2bcf232", hoisted13)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "43033c71-2414-4bc6-8387-01c58665aa20", hoisted14, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "903ae9aa-fd54-4cc6-aa50-5a7078f7cc82", hoisted15, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "7b701397-5f5c-438c-b649-39838a0e0579", hoisted16, "onclick", function ($event) {
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
        var $key = "d06ee8c2-5a09-4274-90fa-f8d92de598cf_" + $item
        elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "2f21c746-fe93-41af-9da3-230e5aa0775f_" + $key, hoisted17)
            elementOpen("div", "4e3bf3a8-0d30-47b0-9666-d2019253f42e_" + $key, hoisted18)
              text("" + (skill.title) + "")
            elementClose("div")
            elementOpen("div", "b0111be4-ad9f-494b-b504-aafd0449a4ee_" + $key, hoisted19)
              text("" + (skill.description) + "")
            elementClose("div")
          elementClose("div")
          elementOpen("div", "52b2db96-ce6d-42ec-9ce0-41214c42195c_" + $key, hoisted20)
            elementOpen("button", "264a9f4b-aabc-4a5a-b91a-f1318f06a6a7_" + $key, hoisted21, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
