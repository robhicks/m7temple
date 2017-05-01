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
elementOpen("section", "0c2ce3c5-c0b0-45ea-a51d-ad591be206a9", hoisted1)
  elementOpen("input", "7d41be2c-8b60-4060-af96-6befeb3658fc", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterTickets()})
  elementClose("input")
  elementOpen("div", "11c343b5-974f-40c8-9cf3-89c52e33f19d", hoisted3)
    elementOpen("label", "3b831477-b047-4a44-a9c4-b2f9be0907c9", hoisted4)
      elementOpen("input", "9a1d9282-970b-4201-9951-e4c2505bea6b", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "23f35468-cb9f-4532-a12f-24160c314c81", hoisted6)
      elementOpen("input", "2d904509-f611-4552-aae9-26c927d350fd", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            Open \
          ")
    elementClose("label")
    elementOpen("label", "810db42a-8acc-4f32-8714-7e259de8e392", hoisted8)
      elementOpen("input", "b7cbbde9-24e7-48c0-aba4-4c6bd17c27d4", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "c180581f-28bd-4733-a2f0-fab12b2185b6", hoisted10)
    __target = ctrl.tickets
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var ticket = $value
        var $key = "57fc6710-e36b-4f02-84b0-33d90d4737cd_" + $item
        elementOpen("div", $key, null, "class",  $item % 2 ? 'row odd' : 'row even' )
          elementOpen("user")
            elementOpen("name")
              text("Name")
            elementClose("name")
            elementOpen("value")
              text("" + (ticket.user.displayName) + "")
            elementClose("value")
          elementClose("user")
          elementOpen("gift")
            elementOpen("name")
              text("Gift")
            elementClose("name")
            elementOpen("value")
              text("" + (ticket.gift.title) + "")
            elementClose("value")
          elementClose("gift")
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
                elementOpen("button", "b7100603-9d3e-4dcd-9136-c4affeb814ff_" + $key, hoisted11, "onclick", function ($event) {
                  var $element = this;
                ctrl.close(ticket)})
                  text("Close")
                elementClose("button")
              }
              if (ticket.type === 'closed') {
                elementOpen("button", "f6043669-290e-4d3e-93bc-f2fd4774e82c_" + $key, hoisted12, "onclick", function ($event) {
                  var $element = this;
                ctrl.open(ticket)})
                  text("Open")
                elementClose("button")
              }
              elementOpen("button", "27063a41-ea20-434f-8046-0daa3eb53bf6_" + $key, hoisted13, "onclick", function ($event) {
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
