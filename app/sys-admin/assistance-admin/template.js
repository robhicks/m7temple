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
elementOpen("section", "562eacfd-6468-489a-a715-3cec318cad20", hoisted1)
  elementOpen("input", "07582cf0-74dd-471b-b6c9-8538762781aa", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterTickets()})
  elementClose("input")
  elementOpen("div", "8303f04c-02ca-4a34-acce-fed0da81d076", hoisted3)
    elementOpen("label", "1c999cb5-b41c-4605-acfd-c031f8fa92ce", hoisted4)
      elementOpen("input", "a875594a-bc2a-44e5-bc15-b0bcc9e775a1", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "cdad04b9-6878-467f-8bb9-15c9fb375b77", hoisted6)
      elementOpen("input", "2b94371c-a6db-4c53-839e-621e603d2094", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            Open \
          ")
    elementClose("label")
    elementOpen("label", "b298b297-b5dc-4a01-a203-c7a03e66a4b0", hoisted8)
      elementOpen("input", "5a79f2c3-0d58-4fd9-8ed5-3840f57675f7", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "f5d9663e-2668-4b81-a4bc-d11d42fe42d2", hoisted10)
    __target = ctrl.tickets
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var ticket = $value
        var $key = "4041f913-565a-4d17-9275-433e67398d83_" + $item
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
                elementOpen("button", "e75dedbc-7c27-4d78-8f4a-5ab6049fa7dc_" + $key, hoisted11, "onclick", function ($event) {
                  var $element = this;
                ctrl.close(ticket)})
                  text("Close")
                elementClose("button")
              }
              if (ticket.type === 'closed') {
                elementOpen("button", "9c2dbc67-e1be-468b-8f95-49fc4156a5bb_" + $key, hoisted12, "onclick", function ($event) {
                  var $element = this;
                ctrl.open(ticket)})
                  text("Open")
                elementClose("button")
              }
              elementOpen("button", "e8cb0879-bbdf-4131-adcb-722707f4b911_" + $key, hoisted13, "onclick", function ($event) {
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
