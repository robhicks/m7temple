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
    elementOpen("input", "648eb44f-1750-4157-8786-5dc465373b9c", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterSkills(this.value)})
    elementClose("input")
    elementOpen("button", "2665d8c7-662a-4cd8-9165-01b6bb70f7fd", hoisted2, "onclick", function ($event) {
      var $element = this;
    ctrl.addSkill()})
      text("Add")
    elementClose("button")
  elementClose("skills-search")
}
elementOpen("skills-list")
  if (ctrl.skillEditor) {
    elementOpen("form", "bfd67d35-0a1c-4a2b-ac22-e82678463a4b", hoisted3)
      elementOpen("skill-editor-title")
        elementOpen("label")
          text("Title:")
        elementClose("label")
        elementOpen("input", "5ce35fe4-fcb1-4295-9943-0b705aad7093", hoisted4, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.title = this.value})
        elementClose("input")
      elementClose("skill-editor-title")
      elementOpen("skill-editor-description")
        elementOpen("label")
          text("Description:")
        elementClose("label")
        elementOpen("input", "ab8dbd04-ba71-4397-8470-90a7300e4193", hoisted5, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.description = this.value})
        elementClose("input")
      elementClose("skill-editor-description")
      elementOpen("skill-editor-category")
        elementOpen("label")
          text("Category:")
        elementClose("label")
        elementOpen("select", "6c430306-df74-4846-b1e1-7036ccfd7180", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.category = this.value})
          elementOpen("option", "104390c4-c2e5-4306-bc7a-a45b9ef49cd7", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "7b10bffa-714d-4507-a3e5-e5ac1928e33f", hoisted8, "selected", ctrl.skill.category ==='booklet' ? true : null)
            text("Booklet")
          elementClose("option")
          elementOpen("option", "9c4cef96-342c-49cf-b72a-f9f33b71e871", hoisted9, "selected", ctrl.skill.category ==='find' ? true : null)
            text("Find")
          elementClose("option")
          elementOpen("option", "14a146fc-02c1-4ffb-84b1-35d606f217e8", hoisted10, "selected", ctrl.skill.category ==='take' ? true : null)
            text("Take")
          elementClose("option")
          elementOpen("option", "ce79cf0a-7478-465c-84d6-c9211d9d46f5", hoisted11, "selected", ctrl.skill.category ==='teach' ? true : null)
            text("Teach")
          elementClose("option")
          elementOpen("option", "227218c0-5858-4838-9eeb-3e09a50ea75d", hoisted12, "selected", ctrl.skill.category ==='memories' ? true : null)
            text("Memories")
          elementClose("option")
          elementOpen("option", "397a783a-5865-47de-9f05-60d8971f2d7a", hoisted13, "selected", ctrl.skill.category ==='indexing' ? true : null)
            text("Indexing")
          elementClose("option")
        elementClose("select")
      elementClose("skill-editor-category")
      elementOpen("skill-editor-multiplicity")
        elementOpen("label")
          text("Allow Multiple:")
        elementClose("label")
        elementOpen("input", "be64baff-4c38-42d6-a1cc-379a52f524e0", hoisted14, "checked", ctrl.skill.multiple, "onchange", function ($event) {
          var $element = this;
        ctrl.skill.multiple = this.checked})
        elementClose("input")
      elementClose("skill-editor-multiplicity")
      elementOpen("skill-editor-instructions")
        elementOpen("label")
          text("Instructions:")
        elementClose("label")
        elementOpen("div", "fa8f7d38-e1fd-4c90-afb1-302522a635b5", hoisted15)
        elementClose("div")
      elementClose("skill-editor-instructions")
      elementOpen("skill-editor-actions")
        elementOpen("button", "089d10e7-0eed-4555-8df8-723a56a36f64", hoisted16, "onclick", function ($event) {
          var $element = this;
        ctrl.saveSkill()})
          text("Save")
        elementClose("button")
        elementOpen("button", "d79894f0-f3ab-4fae-8e74-d2f728c64b24", hoisted17, "onclick", function ($event) {
          var $element = this;
        ctrl.deleteSkill()})
          text("Delete")
        elementClose("button")
        elementOpen("button", "ce134545-8fb4-49ff-913c-76d46886d846", hoisted18, "onclick", function ($event) {
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
          var $key = "be640f51-cf3a-4dca-8ae3-9702d7c0d2e6_" + $item
          elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
            elementOpen("div", "aac65e0e-a490-40c2-bd4f-b7827f339791_" + $key, hoisted19)
              elementOpen("div", "337975b4-110f-414f-9925-73019b2464ee_" + $key, hoisted20)
                text("" + (skill.title) + "")
              elementClose("div")
              elementOpen("div", "86563623-83dd-4d39-a68a-9e652a523e11_" + $key, hoisted21)
                text("" + (skill.description) + "")
              elementClose("div")
            elementClose("div")
            elementOpen("div", "d81a7d0a-6561-4c8e-a886-b359b6ad70ca_" + $key, hoisted22)
              elementOpen("button", "a954677d-ec27-445c-8c05-10635e343e1a_" + $key, hoisted23, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
