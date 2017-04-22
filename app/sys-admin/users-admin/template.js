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
    elementOpen("input", "a237f8c0-b339-4115-85c8-a4578d4a512c", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterUsers(this.value)})
    elementClose("input")
  elementClose("users-search")
}
elementOpen("users-list")
  if (ctrl.userEditor) {
    elementOpen("form", "b5f3e72e-4f5d-47a6-907b-71c7782163d0", hoisted2)
      elementOpen("user-editor-name")
        elementOpen("label")
          text("Certificate Name:")
        elementClose("label")
        elementOpen("input", "b8b321e9-da7c-4be9-abc7-97d1591dffbd", hoisted3, "value", ctrl.user.name, "onchange", function ($event) {
          var $element = this;
        ctrl.user.name = this.value})
        elementClose("input")
      elementClose("user-editor-name")
      elementOpen("user-editor-display-name")
        elementOpen("label")
          text("Display Name:")
        elementClose("label")
        elementOpen("input", "a814d09b-5c72-4279-9e4b-c40f13aa7146", hoisted4, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
          var $element = this;
        ctrl.user.displayName = this.value})
        elementClose("input")
      elementClose("user-editor-display-name")
      elementOpen("user-editor-email")
        elementOpen("label")
          text("Email:")
        elementClose("label")
        elementOpen("input", "d7ccbb81-18ab-4ea8-80bf-b6c30f568b6d", hoisted5, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
          var $element = this;
        ctrl.user.email = this.value})
        elementClose("input")
      elementClose("user-editor-email")
      elementOpen("user-editor-category")
        elementOpen("label")
          text("Organization:")
        elementClose("label")
        elementOpen("select", "c6449f4b-f277-4dca-a40b-ce58375d3c4a", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.user.group = this.value})
          elementOpen("option", "1c03e504-a60b-45a0-a0a9-c6b609b50771", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "f5f18adf-ed7d-440e-9e67-f2b92e16aeee", hoisted8, "selected", ctrl.user.group ==='be' ? true : null)
            text("Beehive")
          elementClose("option")
          elementOpen("option", "1c5ded39-9248-4074-8cd9-797e7d4ba8bb", hoisted9, "selected", ctrl.user.group ==='dn' ? true : null)
            text("Deacon")
          elementClose("option")
          elementOpen("option", "639df48d-09bc-4c1b-97df-3621d639ff7b", hoisted10, "selected", ctrl.user.group ==='eq' ? true : null)
            text("Elders")
          elementClose("option")
          elementOpen("option", "0c1faead-6ae6-42ff-8d8f-9d460c651b37", hoisted11, "selected", ctrl.user.group ==='hp' ? true : null)
            text("High Priest")
          elementClose("option")
          elementOpen("option", "042ecb7a-97a7-4e74-8921-2fd7db77d280", hoisted12, "selected", ctrl.user.group ==='ll' ? true : null)
            text("Laurel")
          elementClose("option")
          elementOpen("option", "f0d34398-fd7b-4b90-87dd-6111e0080b5b", hoisted13, "selected", ctrl.user.group ==='mm' ? true : null)
            text("Miamaid")
          elementClose("option")
          elementOpen("option", "70443041-8392-4e8c-a5e8-cb49f36a4325", hoisted14, "selected", ctrl.user.group ==='pr' ? true : null)
            text("Priest")
          elementClose("option")
          elementOpen("option", "04fef73a-ac8c-427f-a329-f46aeb606a5f", hoisted15, "selected", ctrl.user.group ==='py' ? true : null)
            text("Primary")
          elementClose("option")
          elementOpen("option", "700a532f-82d0-4dc9-976f-d476291a4424", hoisted16, "selected", ctrl.user.group ==='rs' ? true : null)
            text("Relief Society")
          elementClose("option")
          elementOpen("option", "005ce1de-a980-4721-a929-356a544a2fe1", hoisted17, "selected", ctrl.user.group ==='tr' ? true : null)
            text("Teacher")
          elementClose("option")
        elementClose("select")
      elementClose("user-editor-category")
      elementOpen("user-admin")
        elementOpen("label")
          text("Admin:")
        elementClose("label")
        elementOpen("input", "29e8bf21-0236-4011-82ee-d0fa03ebdb19", hoisted18, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
          var $element = this;
        ctrl.user.admin = this.checked})
        elementClose("input")
      elementClose("user-admin")
      elementOpen("user-editor-actions")
        elementOpen("button", "0eec1c90-8c98-4749-877f-2a067f49c3eb", hoisted19, "onclick", function ($event) {
          var $element = this;
        ctrl.saveUser()})
          text("Save")
        elementClose("button")
        elementOpen("button", "1a94a859-28eb-4b42-bbff-78bb42f9033a", hoisted20, "onclick", function ($event) {
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
        var $key = "141022c1-469c-4ff0-9d3a-690de8282a6a_" + $item
        elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "66eb15f8-ff84-4f03-abe3-1798f5819578_" + $key, hoisted21)
            if (user.name) {
              elementOpen("div", "01110ed9-7ae9-4a4e-9be0-d15bdb3cbd91_" + $key, hoisted22)
                text("" + (user.name) + "")
              elementClose("div")
            }
            elementOpen("div", "b463eb27-13b3-41a0-b077-54ad86a071e3_" + $key, hoisted23)
              text("" + (user.displayName) + "")
            elementClose("div")
            elementOpen("div", "e6364512-6396-4756-8671-a8e883e92f9e_" + $key, hoisted24)
              text("" + (user.email) + "")
            elementClose("div")
            if (user.group) {
              elementOpen("div", "24cd09fd-f91f-4d7b-b035-b889e6eea23d_" + $key, hoisted25)
                text("" + (ctrl.getGroupName(user)) + "")
              elementClose("div")
            }
          elementClose("div")
          elementOpen("div", "e65274db-ed8d-4e74-81fe-73a8d309af4c_" + $key, hoisted26)
            elementOpen("button", "c5c1cc0f-c8b3-4a5e-b790-ca91cfb710a0_" + $key, hoisted27, "disabled", ctrl.userFormValid, "onclick", function ($event) {
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
