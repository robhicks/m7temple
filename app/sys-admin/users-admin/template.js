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
    elementOpen("input", "2456a32a-5554-4b88-a264-d0e6474e7d86", hoisted1, "onkeyup", function ($event) {
      var $element = this;
    ctrl.filterUsers(this.value)})
    elementClose("input")
  elementClose("users-search")
}
elementOpen("users-list")
  if (ctrl.userEditor) {
    elementOpen("form", "17f59b12-628f-4db1-ab68-3104c63ad2c5", hoisted2)
      elementOpen("user-editor-name")
        elementOpen("label")
          text("Certificate Name:")
        elementClose("label")
        elementOpen("input", "49658b7c-45ca-4502-980e-2096e26cfc43", hoisted3, "value", ctrl.user.name, "onchange", function ($event) {
          var $element = this;
        ctrl.user.name = this.value})
        elementClose("input")
      elementClose("user-editor-name")
      elementOpen("user-editor-display-name")
        elementOpen("label")
          text("Display Name:")
        elementClose("label")
        elementOpen("input", "f3c3c1d9-0707-4ca4-8283-d7ada576b821", hoisted4, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
          var $element = this;
        ctrl.user.displayName = this.value})
        elementClose("input")
      elementClose("user-editor-display-name")
      elementOpen("user-editor-email")
        elementOpen("label")
          text("Email:")
        elementClose("label")
        elementOpen("input", "5f69dc09-6661-4b94-b20b-d5e76750d167", hoisted5, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
          var $element = this;
        ctrl.user.email = this.value})
        elementClose("input")
      elementClose("user-editor-email")
      elementOpen("user-editor-category")
        elementOpen("label")
          text("Organization:")
        elementClose("label")
        elementOpen("select", "2a0bf223-d9b2-4a43-b808-06f9fc8c2fca", hoisted6, "onchange", function ($event) {
          var $element = this;
        ctrl.user.group = this.value})
          elementOpen("option", "0f5048cc-d6ed-4447-ae78-ae798aab584f", hoisted7)
            text("Select")
          elementClose("option")
          elementOpen("option", "16db1126-4acd-402d-b713-c58496f09bee", hoisted8, "selected", ctrl.user.group ==='be' ? true : null)
            text("Beehive")
          elementClose("option")
          elementOpen("option", "6a17710e-8744-4802-a6b1-9ac39c1d7ab6", hoisted9, "selected", ctrl.user.group ==='dn' ? true : null)
            text("Deacon")
          elementClose("option")
          elementOpen("option", "4b9cf8b8-37e1-469e-8bb9-4ead87eebe6a", hoisted10, "selected", ctrl.user.group ==='eq' ? true : null)
            text("Elders")
          elementClose("option")
          elementOpen("option", "071098e4-7708-47ca-9e6b-302a00f3e42a", hoisted11, "selected", ctrl.user.group ==='hp' ? true : null)
            text("High Priest")
          elementClose("option")
          elementOpen("option", "6957e4a8-017d-44d4-adbb-37d8ab678b35", hoisted12, "selected", ctrl.user.group ==='ll' ? true : null)
            text("Laurel")
          elementClose("option")
          elementOpen("option", "d19896af-a040-4c39-b97b-395fc07a5b63", hoisted13, "selected", ctrl.user.group ==='mm' ? true : null)
            text("Miamaid")
          elementClose("option")
          elementOpen("option", "1faede9e-ebc4-48c8-b8f2-d0b8be220b61", hoisted14, "selected", ctrl.user.group ==='pr' ? true : null)
            text("Priest")
          elementClose("option")
          elementOpen("option", "3e2683e2-bc30-4cd5-8164-937e39ec3656", hoisted15, "selected", ctrl.user.group ==='py' ? true : null)
            text("Primary")
          elementClose("option")
          elementOpen("option", "79e06be7-5b5b-4a33-8a41-3f54ad93180d", hoisted16, "selected", ctrl.user.group ==='rs' ? true : null)
            text("Relief Society")
          elementClose("option")
          elementOpen("option", "a4312d7f-4f82-492a-adb9-3213d605e7bc", hoisted17, "selected", ctrl.user.group ==='tr' ? true : null)
            text("Teacher")
          elementClose("option")
        elementClose("select")
      elementClose("user-editor-category")
      elementOpen("user-admin")
        elementOpen("label")
          text("Admin:")
        elementClose("label")
        elementOpen("input", "7f4805bc-00ad-4464-b605-a5442322ff67", hoisted18, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
          var $element = this;
        ctrl.user.admin = this.checked})
        elementClose("input")
      elementClose("user-admin")
      elementOpen("user-editor-actions")
        elementOpen("button", "b869e7d2-a8e5-484b-9947-be63f803e2f3", hoisted19, "onclick", function ($event) {
          var $element = this;
        ctrl.saveUser()})
          text("Save")
        elementClose("button")
        elementOpen("button", "12ce0951-5471-4b23-b0d2-442070ed5f56", hoisted20, "onclick", function ($event) {
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
        var $key = "4db2212a-3932-46e9-a25a-82e30eb6fc97_" + $item
        elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even')
          elementOpen("div", "d111faa0-8b2c-4fbd-b950-cef7226aa1d4_" + $key, hoisted21)
            if (user.name) {
              elementOpen("div", "9f03fd55-c4a5-48e7-b937-c74a9b66709a_" + $key, hoisted22)
                text("" + (user.name) + "")
              elementClose("div")
            }
            elementOpen("div", "60382e92-9240-4e4a-873c-bf468bd081a7_" + $key, hoisted23)
              text("" + (user.displayName) + "")
            elementClose("div")
            elementOpen("div", "10689367-7467-419f-98d0-c86435a2a4b1_" + $key, hoisted24)
              text("" + (user.email) + "")
            elementClose("div")
            if (user.group) {
              elementOpen("div", "8711fa9a-e20e-4dd7-9802-ab98b1fa422d_" + $key, hoisted25)
                text("" + (ctrl.getGroupName(user)) + "")
              elementClose("div")
            }
          elementClose("div")
          elementOpen("div", "075ff71e-dbdc-4ed7-8531-b79128e219be_" + $key, hoisted26)
            elementOpen("button", "3a4c3d1e-96f3-4b2b-a7c8-5d4b295da0f0_" + $key, hoisted27, "disabled", ctrl.userFormValid, "onclick", function ($event) {
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
