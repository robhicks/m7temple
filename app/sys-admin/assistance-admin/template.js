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
elementOpen("section", "f0016566-9013-4c20-be0b-90dd668bf74d", hoisted1)
  elementOpen("input", "86c687c7-bb6e-4911-b053-da75b08f5a6f", hoisted2, "onkeyup", function ($event) {
    var $element = this;
  ctrl.search.text = this.value; ctrl.filterTickets()})
  elementClose("input")
  elementOpen("div", "e2e2bbed-0753-4002-98e1-5493b259e443", hoisted3)
    elementOpen("label", "0a853c33-6edc-4efa-8895-3f2d847ce5d0", hoisted4)
      elementOpen("input", "4be482f9-784c-4188-887b-52fc7d77db47", hoisted5, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            All \
          ")
    elementClose("label")
    elementOpen("label", "9e32f687-2dfb-4904-8472-279c531ba530", hoisted6)
      elementOpen("input", "b045d71c-bc19-4c86-af3b-5c6fe21a7892", hoisted7, "onchange", function ($event) {
        var $element = this;
      ctrl.search.type = this.value; ctrl.filterTickets()})
      elementClose("input")
      text(" \
            Open \
          ")
    elementClose("label")
    elementOpen("label", "c1e1bb5f-c979-4a70-84c2-84a91bbe1fc4", hoisted8)
      elementOpen("input", "7badb4b3-6181-47ec-9344-d76ac676b9ac", hoisted9, "onchange", function ($event) {
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
  elementOpen("section", "e08a0625-436f-4611-acea-e132bbf6e0e1", hoisted10)
    __target = ctrl.tickets
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var ticket = $value
        var $key = "3a5bea74-957b-4fd7-b8fb-703a5e7e124b_" + $item
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
                elementOpen("button", "bee5b998-fd0d-4cd5-b584-d5ec9eca4043_" + $key, hoisted11, "onclick", function ($event) {
                  var $element = this;
                ctrl.close(ticket)})
                  text("Close")
                elementClose("button")
              }
              if (ticket.type === 'closed') {
                elementOpen("button", "6269eb27-067d-49ef-af29-280fa43174a5_" + $key, hoisted12, "onclick", function ($event) {
                  var $element = this;
                ctrl.open(ticket)})
                  text("Open")
                elementClose("button")
              }
              elementOpen("button", "b0e84247-78cc-467e-8c59-f7323ad62976_" + $key, hoisted13, "onclick", function ($event) {
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
