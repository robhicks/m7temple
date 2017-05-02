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
var hoisted27 = ["type", "button", "class", "small danger"]
var hoisted28 = ["type", "button", "class", "small"]
var __target

export function render (ctrl) {
if (!ctrl.userEditor) {
  elementOpen("users-search")
    elementOpen("input", "e6e811fc-01b9-4af3-a69b-2d153369f8b2", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterUsers(this.value)})
    elementClose("input")
  elementClose("users-search")
}
elementOpen("users-list")
  if (ctrl.userEditor) {
    elementOpen("form", "4e4245c7-00e4-429e-b91d-f23ad3d3230c", hoisted2)
      elementOpen("user-editor-name")
        elementOpen("label")
          text("Certificate Name:")
        elementClose("label")
        elementOpen("input", "9382fbef-30cf-45d0-86a4-f21fef45714c", hoisted3, "value", ctrl.user.name, "onchange", function ($event) {
          var $element = this;
        ctrl.user.name = this.value})
        elementClose("input")
      elementClose("user-editor-name")
      elementOpen("user-editor-display-name")
        elementOpen("label")
          text("Display Name:")
        elementClose("label")
        elementOpen("input", "6c0286ee-2deb-4aa1-b1b7-8d2fd9cb3625", hoisted4, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
          var $element = this;
        ctrl.user.displayName = this.value})
        elementClose("input")
      elementClose("user-editor-display-name")
      elementOpen("user-editor-email")
        elementOpen("label")
          text("Email:")
        elementClose("label")
        elementOpen("input", "d645498d-4be3-4a5c-8f1b-db64a63ebccf", hoisted5, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
          var $element = this;
        ctrl.user.email = this.value})
        elementClose("input")
      elementClose("user-editor-email")
      elementOpen("user-editor-category")
        elementOpen("label")
          text("Organization:")
        elementClose("label")
        elementOpen("select", "f8990f9a-8306-4245-9844-4d101b977a53", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.user.group = this.value})
          elementOpen("option", "8f017bf1-f9fb-4237-a921-468b3af9c934", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "e48c2a28-ed43-4091-9feb-ca3671884aa7", hoisted8, "selected", ctrl.user.group ==='be' ? true : null)
            text("Beehive")
          elementClose("option")
          elementOpen("option", "182a6260-9194-4e89-836c-b6dc6d53bfcc", hoisted9, "selected", ctrl.user.group ==='dn' ? true : null)
            text("Deacon")
          elementClose("option")
          elementOpen("option", "ba3bc652-845e-4503-8638-1f4328f89ef5", hoisted10, "selected", ctrl.user.group ==='eq' ? true : null)
            text("Elders")
          elementClose("option")
          elementOpen("option", "548871ff-494e-4398-bfe4-152ef119db0a", hoisted11, "selected", ctrl.user.group ==='hp' ? true : null)
            text("High Priest")
          elementClose("option")
          elementOpen("option", "178363fd-1ab4-4b1e-a693-6467e9c40d84", hoisted12, "selected", ctrl.user.group ==='ll' ? true : null)
            text("Laurel")
          elementClose("option")
          elementOpen("option", "2f4b6ad6-ad15-4a76-a5e4-29782285d5fa", hoisted13, "selected", ctrl.user.group ==='mm' ? true : null)
            text("Miamaid")
          elementClose("option")
          elementOpen("option", "4d193251-efc3-4ccc-b843-1b1675a79a99", hoisted14, "selected", ctrl.user.group ==='pr' ? true : null)
            text("Priest")
          elementClose("option")
          elementOpen("option", "f55c7f0b-1b0c-442a-960d-46c6c331a9f5", hoisted15, "selected", ctrl.user.group ==='py' ? true : null)
            text("Primary")
          elementClose("option")
          elementOpen("option", "e90ad716-408c-4e0b-986f-b69b81e5029f", hoisted16, "selected", ctrl.user.group ==='rs' ? true : null)
            text("Relief Society")
          elementClose("option")
          elementOpen("option", "9544c552-1004-487a-8b54-8876f8ad8c04", hoisted17, "selected", ctrl.user.group ==='tr' ? true : null)
            text("Teacher")
          elementClose("option")
        elementClose("select")
      elementClose("user-editor-category")
      elementOpen("user-admin")
        elementOpen("label")
          text("Admin:")
        elementClose("label")
        elementOpen("input", "cb0d19e3-53f4-4598-83bd-eb40c0ea835e", hoisted18, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
          var $element = this;
        ctrl.user.admin = this.checked})
        elementClose("input")
      elementClose("user-admin")
      elementOpen("user-editor-actions")
        elementOpen("button", "23998661-0b21-4e00-9568-6d2a87deb3c6", hoisted19, "onclick", function ($event) {
          var $element = this;
        ctrl.saveUser()})
          text("Save")
        elementClose("button")
        elementOpen("button", "51fef014-19be-4f44-ae09-2cd1a177f5ae", hoisted20, "onclick", function ($event) {
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
        var $key = "b355497c-baa7-472a-a51c-1d579ffe5b46_" + $item
        elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "c3fd767a-682a-4a18-bb41-d9b38111b8c8_" + $key, hoisted21)
            if (user.name) {
              elementOpen("div", "a6bf9e8e-45f6-4638-8a7d-9996167ac0ef_" + $key, hoisted22)
                text("" + (user.name) + "")
              elementClose("div")
            }
            elementOpen("div", "63b13011-1cf9-4986-b478-70e0126cb42d_" + $key, hoisted23)
              text("" + (user.displayName) + "")
            elementClose("div")
            elementOpen("div", "d219ccbc-dc23-416e-aab1-39329470b527_" + $key, hoisted24)
              text("" + (user.email) + "")
            elementClose("div")
            if (user.group) {
              elementOpen("div", "59d85279-db06-4e79-8e96-8f6b6b5d8129_" + $key, hoisted25)
                text("" + (ctrl.getGroupName(user)) + "")
              elementClose("div")
            }
          elementClose("div")
          elementOpen("div", "ca7848e4-4d4f-480c-a64f-c4f92fd7006d_" + $key, hoisted26)
            elementOpen("button", "d19db1fa-1b9a-4b54-b30e-9b6a804a1986_" + $key, hoisted27, "disabled", ctrl.userFormValid, "onclick", function ($event) {
              var $element = this;
            ctrl.deleteUser($value)})
              text("Remove")
            elementClose("button")
            elementOpen("button", "df998085-0db8-4df3-8bb3-642e32ccc190_" + $key, hoisted28, "disabled", ctrl.userFormValid, "onclick", function ($event) {
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
