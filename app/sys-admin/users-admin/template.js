import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["type", "text", "name", "usersearch", "placeholder", "Search ..."]
var hoisted2 = ["name", "user"]
var hoisted3 = ["type", "text", "required", ""]
var hoisted4 = ["type", "text", "required", ""]
var hoisted5 = ["type", "text", "disabled", "true"]
var hoisted6 = ["name", "group", "required", ""]
var hoisted7 = ["value", ""]
var hoisted8 = ["value", "be"]
var hoisted9 = ["value", "dn"]
var hoisted10 = ["value", "eq"]
var hoisted11 = ["value", "hp"]
var hoisted12 = ["value", "ll"]
var hoisted13 = ["value", "mm"]
var hoisted14 = ["value", "pr"]
var hoisted15 = ["value", "py"]
var hoisted16 = ["value", "rs"]
var hoisted17 = ["value", "tr"]
var hoisted18 = ["type", "checkbox"]
var hoisted19 = ["type", "button", "name", "save", "class", "primary"]
var hoisted20 = ["type", "button", "name", "cancel"]
var hoisted21 = ["class", "info"]
var hoisted22 = ["class", "name bold"]
var hoisted23 = ["class", "display-name bold"]
var hoisted24 = ["class", "email"]
var hoisted25 = ["class", "group"]
var hoisted26 = ["class", "action"]
var hoisted27 = ["type", "button"]
var __target

export function render (ctrl) {
if (!ctrl.userEditor) {
  elementOpen("users-search")
    elementOpen("input", "3abc26c0-6e6a-41a0-a6dd-22bd704017de", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterUsers(this.value)})
    elementClose("input")
  elementClose("users-search")
}
elementOpen("users-list")
  if (ctrl.userEditor) {
    elementOpen("form", "d79f5651-5f43-4c8b-9970-743acce11901", hoisted2)
      elementOpen("user-editor-name")
        elementOpen("label")
          text("Certificate Name:")
        elementClose("label")
        elementOpen("input", "7b83457d-f2c6-4e91-8023-8166288c3ae3", hoisted3, "value", ctrl.user.name, "onchange", function ($event) {
          var $element = this;
        ctrl.user.name = this.value})
        elementClose("input")
      elementClose("user-editor-name")
      elementOpen("user-editor-display-name")
        elementOpen("label")
          text("Display Name:")
        elementClose("label")
        elementOpen("input", "85dd1dd6-1452-48cf-80b7-507df3bc8452", hoisted4, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
          var $element = this;
        ctrl.user.displayName = this.value})
        elementClose("input")
      elementClose("user-editor-display-name")
      elementOpen("user-editor-email")
        elementOpen("label")
          text("Email:")
        elementClose("label")
        elementOpen("input", "2ac5d274-504e-42c3-af05-761204039946", hoisted5, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
          var $element = this;
        ctrl.user.email = this.value})
        elementClose("input")
      elementClose("user-editor-email")
      elementOpen("user-editor-category")
        elementOpen("label")
          text("Organization:")
        elementClose("label")
        elementOpen("select", "c4268b6c-da0e-486f-b048-5250b7a1af0e", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.user.group = this.value})
          elementOpen("option", "e5032485-4c81-4479-9058-1599f807eecd", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "44a342a9-d2d4-49f8-b493-b611c4c14ada", hoisted8, "selected", ctrl.user.group ==='be' ? true : null)
            text("Beehive")
          elementClose("option")
          elementOpen("option", "f0a7689a-7f8d-4a4e-8921-687809a3bcda", hoisted9, "selected", ctrl.user.group ==='dn' ? true : null)
            text("Deacon")
          elementClose("option")
          elementOpen("option", "332eb808-9c6c-424d-a9cf-5f57f6ddddf0", hoisted10, "selected", ctrl.user.group ==='eq' ? true : null)
            text("Elders")
          elementClose("option")
          elementOpen("option", "67533819-ecac-4315-9d53-a0b2ef2290ff", hoisted11, "selected", ctrl.user.group ==='hp' ? true : null)
            text("High Priest")
          elementClose("option")
          elementOpen("option", "13d08007-5892-471c-9b89-75dc683556c9", hoisted12, "selected", ctrl.user.group ==='ll' ? true : null)
            text("Laurel")
          elementClose("option")
          elementOpen("option", "89a44e7a-645f-454b-bc18-ef2086032fcf", hoisted13, "selected", ctrl.user.group ==='mm' ? true : null)
            text("Miamaid")
          elementClose("option")
          elementOpen("option", "321c2d1a-9bd6-4e26-96cb-bb06b78317aa", hoisted14, "selected", ctrl.user.group ==='pr' ? true : null)
            text("Priest")
          elementClose("option")
          elementOpen("option", "b9830483-4946-4a3b-abda-2d39f70edcf7", hoisted15, "selected", ctrl.user.group ==='py' ? true : null)
            text("Primary")
          elementClose("option")
          elementOpen("option", "067b4b13-3525-4a45-8e16-88ec55c8c5c0", hoisted16, "selected", ctrl.user.group ==='rs' ? true : null)
            text("Relief Society")
          elementClose("option")
          elementOpen("option", "46f1d500-ce4e-4434-80fc-0f983a71ed20", hoisted17, "selected", ctrl.user.group ==='tr' ? true : null)
            text("Teacher")
          elementClose("option")
        elementClose("select")
      elementClose("user-editor-category")
      elementOpen("user-admin")
        elementOpen("label")
          text("Admin:")
        elementClose("label")
        elementOpen("input", "aa9024f2-95c3-4dfa-bb66-c403cb444422", hoisted18, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
          var $element = this;
        ctrl.user.admin = this.checked})
        elementClose("input")
      elementClose("user-admin")
      elementOpen("user-editor-actions")
        elementOpen("button", "aaa4daa4-f7e4-4c02-9a8b-28d4ed93762f", hoisted19, "onclick", function ($event) {
          var $element = this;
        ctrl.saveUser()})
          text("Save")
        elementClose("button")
        elementOpen("button", "ab3960e9-4a38-437a-9912-82df386fc0d1", hoisted20, "onclick", function ($event) {
          var $element = this;
        ctrl.cancelEdit()})
          text("Cancel")
        elementClose("button")
      elementClose("user-editor-actions")
    elementClose("form")
  }
  if (!ctrl.userEditor) {
    __target = ctrl.viewUsers
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var user = $value
        var $key = "9243c02c-ab76-4cb9-8c3c-5449bf005e2b_" + $item
        elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "07dd33c5-dfe7-49c3-8223-2bb65b810152_" + $key, hoisted21)
            if (user.name) {
              elementOpen("div", "cd68094b-9e74-44ae-901d-88d88f901863_" + $key, hoisted22)
                text("" + (user.name) + "")
              elementClose("div")
            }
            elementOpen("div", "c99767a5-b9fd-47e0-8966-be589ea4d31c_" + $key, hoisted23)
              text("" + (user.displayName) + "")
            elementClose("div")
            elementOpen("div", "83a9f1f0-ec79-4502-b041-28077b923621_" + $key, hoisted24)
              text("" + (user.email) + "")
            elementClose("div")
            if (user.group) {
              elementOpen("div", "5ff00c84-b004-4992-a988-e4811a800d4a_" + $key, hoisted25)
                text("" + (ctrl.getGroupName(user)) + "")
              elementClose("div")
            }
          elementClose("div")
          elementOpen("div", "30919e1d-b40a-435a-8c00-11d6b070f674_" + $key, hoisted26)
            elementOpen("button", "cfebfa28-ff98-4477-a15d-e3a1a6d92d01_" + $key, hoisted27, "disabled", ctrl.userFormValid, "onclick", function ($event) {
              var $element = this;
            ctrl.editUser($value)})
              text("Edit")
            elementClose("button")
          elementClose("div")
        elementClose("user-item")
      }, this)
    }
  }
elementClose("users-list")
}
