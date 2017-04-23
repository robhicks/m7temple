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
    elementOpen("input", "fed6db74-8d2d-48b8-a725-2a8e652c0801", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "fd540d15-08e5-4f7e-99cc-30ceeb3b0a0c", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "5c128345-0ee9-4bb5-9686-592de4d358f6", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "f784ed01-308e-4557-930a-b59d4dd2c064", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "44c7f7d5-26fc-4112-b054-383e017ed1b9", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "e1799a30-37d2-48df-bd7c-c8637f2d3790", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "f033628c-c08c-4f7a-8fd4-d85cbeb5507f", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "2dc56886-bdb7-4e99-8933-e82a19b602e4", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "d8769d3f-d21a-4e93-a476-111faa5dfcb1", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "9888d1d9-ff26-41ef-a3cb-fb7c6361ac8c", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "7063e216-d5da-457a-b57f-71cfefc19349", hoisted11, "selected", ctrl.skill.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "3682bd91-be99-47a0-9b4f-337f794cac91", hoisted12, "selected", ctrl.skill.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "ee855486-ec5a-4af9-b492-ea65bd233480", hoisted13, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "a9dc90e4-9afb-4deb-b0b6-b8a3c4f8f82f", hoisted14, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "9c0a32d1-41f6-4df1-80c4-7f11866e634c", hoisted15)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "b0c2f176-3448-41bd-b22c-0ebac32d97d8", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "1df1abec-553d-4381-9119-29161f6918e1", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "50d96c2d-d93d-46fd-9585-a167e4e1e0fc", hoisted18, "onclick", function ($event) {
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
        var $key = "72f22f43-5fe0-4d74-b476-3c4327cb3ff9_" + $item
        elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "84b196b4-ff33-4c84-8da9-ddfebc8e5b09_" + $key, hoisted19)
            elementOpen("div", "9ff2939a-6272-4fc2-b5dd-4989fa073148_" + $key, hoisted20)
              text("" + (skill.title) + "")
            elementClose("div")
            elementOpen("div", "7cdf71ea-4cf0-421c-af6f-a16c75606e2b_" + $key, hoisted21)
              text("" + (skill.description) + "")
            elementClose("div")
          elementClose("div")
          elementOpen("div", "4ab06726-e04b-4aa0-9ec6-5231a3cd5de8_" + $key, hoisted22)
            elementOpen("button", "03e3316b-c5e1-4bd9-bf28-50046132b4cc_" + $key, hoisted23, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
