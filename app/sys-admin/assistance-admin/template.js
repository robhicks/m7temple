import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["name", "header"]
var hoisted2 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."]
var hoisted3 = ["id", "filter"]
var hoisted4 = ["for", ""]
var hoisted5 = ["type", "radio", "name", "ticketsType", "value", "", "checked", ""]
var hoisted6 = ["for", ""]
var hoisted7 = ["type", "radio", "name", "ticketsType", "value", "open"]
var hoisted8 = ["for", ""]
var hoisted9 = ["type", "radio", "name", "ticketsType", "value", "closed"]
var hoisted10 = ["name", "tickets"]
var hoisted11 = ["type", "button", "class", "primary", "name", "close"]
var hoisted12 = ["type", "button", "class", "primary", "name", "reopen"]
var hoisted13 = ["type", "button", "class", "danger", "name", "delete"]
var __target

export function render (ctrl) {
elementOpen("section", "7466dbe9-09aa-4aa9-bb18-f1906a7bea8a", hoisted1)
  elementOpen("input", "20b9aa25-72c2-4c19-b153-712d5c6912a4", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterTickets()})
  elementClose("input")
  elementOpen("div", "3c726a66-424c-47a8-a0f5-0cbe4e452a8c", hoisted3)
    elementOpen("label", "91d83a71-2b4e-4067-a1b6-a2cadad0cd05", hoisted4)
      elementOpen("input", "1f545177-e7f4-4fbd-8bb5-5b958234d7a4", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "316fd778-e47d-45cd-a9eb-0231be910cf3", hoisted6)
      elementOpen("input", "602b9c39-653e-4d6a-857b-c341b6d05a32", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            Open \
          ")
    elementClose("label")
    elementOpen("label", "fc266102-dab9-4908-ba3b-eaf1956693cf", hoisted8)
      elementOpen("input", "2f2bef38-9685-4b9b-8448-140ce9d4c77a", hoisted9, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            Closed \
          ")
    elementClose("label")
  elementClose("div")
elementClose("section")
if (ctrl.tickets.length > 0) {
  elementOpen("section", "8796c3d0-75f0-4573-94b1-615bbc59d3d9", hoisted10)
    __target = ctrl.tickets
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var ticket = $value
        var $key = "5001d9b9-66e8-488c-9dd1-b016f9ce2d71_" + $item
        elementOpen("div", $key, null, "class",  $item % 2 ? 'row odd' : 'row even' )
          elementOpen("user")
            elementOpen("name")
              text("Name")
            elementClose("name")
            elementOpen("value")
              text("" + (ticket.user.displayName) + "")
            elementClose("value")
          elementClose("user")
          elementOpen("skill")
            elementOpen("name")
              text("Skill")
            elementClose("name")
            elementOpen("value")
              text("" + (ticket.skill.title) + "")
            elementClose("value")
          elementClose("skill")
          elementOpen("date")
            elementOpen("name")
              text("Date")
            elementClose("name")
            elementOpen("value")
              text("" + (new Date(ticket.date).toLocaleDateString()) + "")
            elementClose("value")
          elementClose("date")
          elementOpen("request")
            elementOpen("name")
              text("Request")
            elementClose("name")
            elementOpen("value")
              text("" + (ticket.request) + "")
            elementClose("value")
          elementClose("request")
          elementOpen("actions")
            elementOpen("name")
            elementClose("name")
            elementOpen("value")
              if (ticket.type === 'open' || ticket.type === '') {
                elementOpen("button", "d6a66b3e-3842-462f-aaa7-d6c971a3a7d1_" + $key, hoisted11, "onclick", function ($event) {
                  var $element = this;
                ctrl.close(ticket)})
                  text("Close")
                elementClose("button")
              }
              if (ticket.type === 'closed') {
                elementOpen("button", "e4519ba1-c6ca-447f-9411-f32a6983f577_" + $key, hoisted12, "onclick", function ($event) {
                  var $element = this;
                ctrl.open(ticket)})
                  text("Open")
                elementClose("button")
              }
              elementOpen("button", "abca042a-2aac-4063-89ba-51c3de13e8c5_" + $key, hoisted13, "onclick", function ($event) {
                var $element = this;
              ctrl.delete(ticket)})
                text("Delete")
              elementClose("button")
            elementClose("value")
          elementClose("actions")
        elementClose("div")
      }, this)
    }
  elementClose("section")
}
}
