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
elementOpen("section", "972dcd4a-76e7-4a6b-a273-f7b625552375", hoisted1)
  elementOpen("input", "37e00fb4-9961-47cd-bf1f-96480add4151", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterTickets()})
  elementClose("input")
  elementOpen("div", "2addac1a-9de5-4d03-a2ce-e06b44a02b3e", hoisted3)
    elementOpen("label", "06bc5fdc-82b0-4f19-a309-c8de3a3d77f1", hoisted4)
      elementOpen("input", "e35363c2-8578-478e-95ac-0f893c864b79", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "0cb02e94-55a7-4a98-92cc-c891ddd5f8eb", hoisted6)
      elementOpen("input", "89e3503a-8bde-4af7-86fd-20cf7a6f2fe2", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            Open \
          ")
    elementClose("label")
    elementOpen("label", "94c7d37a-04d5-4f78-a036-f100026e3367", hoisted8)
      elementOpen("input", "58de8dbf-fc13-4dc9-97e4-2eb14335c4a4", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "e7110c2e-c7bc-4e53-9d36-04000d94f22d", hoisted10)
    __target = ctrl.tickets
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var ticket = $value
        var $key = "158eb7c2-ad09-44b9-ac09-26d91482039b_" + $item
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
                elementOpen("button", "1d6dd986-f430-430d-8ee3-4cd0836a9049_" + $key, hoisted11, "onclick", function ($event) {
                  var $element = this;
                ctrl.close(ticket)})
                  text("Close")
                elementClose("button")
              }
              if (ticket.type === 'closed') {
                elementOpen("button", "e31b951b-473d-4817-b1a0-5ea325626da6_" + $key, hoisted12, "onclick", function ($event) {
                  var $element = this;
                ctrl.open(ticket)})
                  text("Open")
                elementClose("button")
              }
              elementOpen("button", "c4491d5d-05f1-4191-a167-901907d76815_" + $key, hoisted13, "onclick", function ($event) {
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
