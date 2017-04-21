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
    elementOpen("input", "7ab67f79-563d-46f6-8ebb-4dd8994766a7", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterUsers(this.value)})
    elementClose("input")
  elementClose("users-search")
}
elementOpen("users-list")
  if (ctrl.userEditor) {
    elementOpen("form", "864f0954-b27f-4414-ae8d-d15709d9db80", hoisted2)
      elementOpen("user-editor-name")
        elementOpen("label")
          text("Certificate Name:")
        elementClose("label")
        elementOpen("input", "5440cc5d-42e2-40c5-95aa-64550f81ca22", hoisted3, "value", ctrl.user.name, "onchange", function ($event) {
          var $element = this;
        ctrl.user.name = this.value})
        elementClose("input")
      elementClose("user-editor-name")
      elementOpen("user-editor-display-name")
        elementOpen("label")
          text("Display Name:")
        elementClose("label")
        elementOpen("input", "cb1dd251-6504-4749-9f79-eebe90de6d1e", hoisted4, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
          var $element = this;
        ctrl.user.displayName = this.value})
        elementClose("input")
      elementClose("user-editor-display-name")
      elementOpen("user-editor-email")
        elementOpen("label")
          text("Email:")
        elementClose("label")
        elementOpen("input", "51b47d96-c5ae-4169-9ef9-ff70b7ec0d87", hoisted5, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
          var $element = this;
        ctrl.user.email = this.value})
        elementClose("input")
      elementClose("user-editor-email")
      elementOpen("user-editor-category")
        elementOpen("label")
          text("Organization:")
        elementClose("label")
        elementOpen("select", "2a0a9664-ed6c-4bd8-b7e4-3324842a47fb", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.user.group = this.value})
          elementOpen("option", "6f23d380-54dc-4aa5-9fd4-d74a1fa79860", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "8db0960f-a764-4ff1-8f2e-deb36a3882d7", hoisted8, "selected", ctrl.user.group ==='be' ? true : null)
            text("Beehive")
          elementClose("option")
          elementOpen("option", "3c6fd80e-f4f3-4e99-9c45-c78f42d153e0", hoisted9, "selected", ctrl.user.group ==='dn' ? true : null)
            text("Deacon")
          elementClose("option")
          elementOpen("option", "55b39e28-9c5d-49c1-8efd-5fa8c48740c8", hoisted10, "selected", ctrl.user.group ==='eq' ? true : null)
            text("Elders")
          elementClose("option")
          elementOpen("option", "8e2b1154-b997-4b9a-8047-fa51af7b0d3d", hoisted11, "selected", ctrl.user.group ==='hp' ? true : null)
            text("High Priest")
          elementClose("option")
          elementOpen("option", "65d61c9a-ed3a-40ba-9f15-2bef92277aaa", hoisted12, "selected", ctrl.user.group ==='ll' ? true : null)
            text("Laurel")
          elementClose("option")
          elementOpen("option", "f4aa77fe-ff3a-46ad-a471-3b12ec781a7c", hoisted13, "selected", ctrl.user.group ==='mm' ? true : null)
            text("Miamaid")
          elementClose("option")
          elementOpen("option", "f459d218-c8c6-4d68-8e79-3e7f57c15f08", hoisted14, "selected", ctrl.user.group ==='pr' ? true : null)
            text("Priest")
          elementClose("option")
          elementOpen("option", "eb3e775a-b784-4007-ae31-db8cc0469cce", hoisted15, "selected", ctrl.user.group ==='py' ? true : null)
            text("Primary")
          elementClose("option")
          elementOpen("option", "7207d5b5-2531-45f8-904b-d489ebe88add", hoisted16, "selected", ctrl.user.group ==='rs' ? true : null)
            text("Relief Society")
          elementClose("option")
          elementOpen("option", "3a900d5d-4a01-4d1c-8a6c-7abd576acacb", hoisted17, "selected", ctrl.user.group ==='tr' ? true : null)
            text("Teacher")
          elementClose("option")
        elementClose("select")
      elementClose("user-editor-category")
      elementOpen("user-admin")
        elementOpen("label")
          text("Admin:")
        elementClose("label")
        elementOpen("input", "b73d78af-8b49-4b1b-a3eb-a5827702b5aa", hoisted18, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
          var $element = this;
        ctrl.user.admin = this.checked})
        elementClose("input")
      elementClose("user-admin")
      elementOpen("user-editor-actions")
        elementOpen("button", "7a6a6d3f-9373-4f7f-845b-e2f1f31966b8", hoisted19, "onclick", function ($event) {
          var $element = this;
        ctrl.saveUser()})
          text("Save")
        elementClose("button")
        elementOpen("button", "0521e26c-8a59-4bb1-ad58-269136dc7de1", hoisted20, "onclick", function ($event) {
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
        var $key = "75d0cb35-4c34-4d98-a642-7de6e5630132_" + $item
        elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "abe169e1-71e5-4d8e-979b-97c3c3cce1d8_" + $key, hoisted21)
            if (user.name) {
              elementOpen("div", "43705547-9eea-448f-a418-845162095aab_" + $key, hoisted22)
                text("" + (user.name) + "")
              elementClose("div")
            }
            elementOpen("div", "712b9368-bbc7-4c09-8796-49ba09d19e4e_" + $key, hoisted23)
              text("" + (user.displayName) + "")
            elementClose("div")
            elementOpen("div", "6b6ccc98-42ce-4e54-8771-b31686b9ad7f_" + $key, hoisted24)
              text("" + (user.email) + "")
            elementClose("div")
            if (user.group) {
              elementOpen("div", "e4cc1257-4564-42b4-999f-670ccdcd4228_" + $key, hoisted25)
                text("" + (ctrl.getGroupName(user)) + "")
              elementClose("div")
            }
          elementClose("div")
          elementOpen("div", "e8e64729-2472-4615-a0db-d9a46790adf6_" + $key, hoisted26)
            elementOpen("button", "89576255-1625-4716-aa13-40f9db0de03b_" + $key, hoisted27, "disabled", ctrl.userFormValid, "onclick", function ($event) {
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
