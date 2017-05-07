import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "gift-buttons", "src", "/img/gift-buttons.png", "alt", ""]
var hoisted2 = ["class", "action-button", "src", "/img/add.svg", "alt", ""]
var hoisted3 = ["class", "action-button", "src", "/img/delete.svg", "alt", ""]
var hoisted4 = ["class", "action-button", "src", "/img/gift-apply.svg", "alt", ""]
var hoisted5 = ["class", "action-button", "src", "/img/gift-pending.svg", "alt", ""]
var hoisted6 = ["class", "action-button", "src", "/img/gift-earned.svg", "alt", ""]
var hoisted7 = ["class", "action-button", "src", "/img/help.svg", "alt", ""]
var hoisted8 = ["class", "action-button", "src", "/img/gift-apply.svg", "alt", ""]
var hoisted9 = ["id", "my-gifts", "src", "/img/my-gifts.png", "alt", ""]
var hoisted10 = ["href", "https://github.com/robhicks/m7temple/issues"]
var hoisted11 = ["href", "https://gitter.im/Manila-7th-Ward/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link"]
var __target

export function render (ctrl) {
elementOpen("general")
  elementOpen("general-overlay")
    elementOpen("h1")
      text("Why This Site?")
    elementClose("h1")
    elementOpen("p")
      text(" \
            There are a lot of reasons we don't work on Temple and Family History work. Some include: 1) \
            I don't know where to start, 2) The amount of work needing to be done is overwhelming, 3) \
            It's all done on computers and I don't get a long all well with computers, 4 I'm too busy, \
            5) My work is all done, 6) I'll do it when I get older, and 6) It's too hard ... \
            you get the idea. \
          ")
    elementClose("p")
    elementOpen("p")
      text(" \
            This site exists to help you get help make doing temple and family history work a little easier. \
            While it can't help with all of the reasons, it can help with some. It is a place to sign up \
            for small tasks (or gifts), get help doing them and then helping others with those tasks (or gifts). \
          ")
    elementClose("p")
  elementClose("general-overlay")
elementClose("general")
elementOpen("working-on-gifts")
  elementOpen("h1")
    text("Working on Gifts")
  elementClose("h1")
  elementOpen("p")
    text(" \
        Gifts are worked on from the home view. In fact everything can be done from the home view. Here \
        are the things you can do with gifts: \
        ")
    elementOpen("ul")
      elementOpen("li")
        text("Get information and instructions on how to complete them.")
      elementClose("li")
      elementOpen("li")
        text("Add gifts to work on. This will allow to select the gifts you want to focus on.")
      elementClose("li")
      elementOpen("li")
        text(" \
                Get help with completing the gift. When you request help, you will be contacted by \
                someone who has already completed the gift, or by a ward temple and family history \
                consultant. \
              ")
      elementClose("li")
      elementOpen("li")
        text(" \
                Share your experience and expertise with others by applying for a certificate of \
                completion. Of course, if you don't want to share your experience or don't feel comfortable \
                with others, you don't have to, although you can still receive recognition for having \
                completed a gift. \
              ")
      elementClose("li")
    elementClose("ul")
  elementClose("p")
  elementOpen("p")
    text(" \
        Most actions involving gifts are available through the gifts button bar, highlighted with a green \
        rectangle. We'll explain below what the buttons are for and what they do. \
        ")
    elementOpen("img", "e474cf21-764a-44a3-ac64-9f74a2ef286a", hoisted1)
    elementClose("img")
  elementClose("p")
  elementOpen("h2")
    text("Adding a Gift")
  elementClose("h2")
  elementOpen("p")
    text(" \
        Add a gift by clicking on the green add button: ")
    elementOpen("img", "029c64e2-1b45-4a60-a9b3-1ef4d1587d15", hoisted2)
    elementClose("img")
    text(". \
        Once a gift has been added, it can be deleted by clicking the delete button: \
        ")
    elementOpen("img", "77182804-8f49-49e8-b86f-c031b8e341a1", hoisted3)
    elementClose("img")
    text(", or you can apply for certification by \
        clicking the award button. The award button can take three forms: 1) \
        ")
    elementOpen("img", "225ac103-8f78-44fa-a2fa-1a0dc058b170", hoisted4)
    elementClose("img")
    text(" when you have added the gift as a \
        goal haven't yet applied for certification, 2) \
        ")
    elementOpen("img", "0843bdd1-1169-4760-a502-3e0c50059f08", hoisted5)
    elementClose("img")
    text(" when certification is pending, and \
        3) ")
    elementOpen("img", "6a48b15e-2293-46c9-99e5-830989c382b5", hoisted6)
    elementClose("img")
    text(" when you have earned the gift. \
      ")
  elementClose("p")
  elementOpen("p")
    text(" If you have earned a gift, you can't delete it by accident. The system will warn you.")
  elementClose("p")
  elementOpen("h2")
    text("Getting Help for a Gift")
  elementClose("h2")
  elementOpen("p")
    text(" \
        You can request for a gift by clicking the life perserver button: \
        ")
    elementOpen("img", "20f8df7e-3173-4d64-b732-ff3d4df0e08d", hoisted7)
    elementClose("img")
    text(". Your request will be acknowledged and \
        someone with has earned the gift will be asked to contact you to help you achieve the gift. \
      ")
  elementClose("p")
  elementOpen("h2")
    text("Getting Recognition for Completing a Gift")
  elementClose("h2")
  elementOpen("p")
    text(" \
        As mentioned above, you can get recognized for completing a gift by submitting an application. \
        You submit application by clicking the apply button: ")
    elementOpen("img", "086304c9-56c8-44c3-8bea-457ee8012b27", hoisted8)
    elementClose("img")
    text(". \
        You will be asked to explain your experience in working on the gift and if you are willing to \
        share your experience with others, and help others in their efforts to earn the gift. \
      ")
  elementClose("p")
  elementOpen("h2")
    text("Seeing Only My Gifts")
  elementClose("h2")
  elementOpen("p")
    text(" \
        You can see your own gifts simply by clicking the My Gifts checkbox in the upper right part of \
        of the home view. \
        ")
    elementOpen("img", "bbb90b9d-5e8f-423b-80ed-ed75c1da005c", hoisted9)
    elementClose("img")
  elementClose("p")
elementClose("working-on-gifts")
elementOpen("technical-issues")
  elementOpen("h1")
    text("Technical Issues")
  elementClose("h1")
  elementOpen("p")
    text(" \
        While we would like to hope the site works flawlessly, it won't. But please don't give up. \
        It has been designed to help us help you and others take important steps to work on \
        temple and family history work. \
      ")
  elementClose("p")
  elementOpen("p")
    text(" \
        When you run into technical issues, please let us know. You can do so by logging an issue \
        on ")
    elementOpen("a", "eb436fb8-b887-40eb-b2a5-1359798fb4b6", hoisted10)
      text("Github")
    elementClose("a")
    text(". ")
    elementOpen("b")
      text("You don't need a Github \
          account to log and track issues.")
    elementClose("b")
    text(" You can also try to get immediat support on \
        ")
    elementOpen("a", "adea47b1-5bb0-4bd0-8456-4b772890739a", hoisted11)
      text("Gitter")
    elementClose("a")
    text(". \
      ")
  elementClose("p")
  elementOpen("p")
    text(" \
        Please report issues because we are committed to addressing them! \
      ")
  elementClose("p")
elementClose("technical-issues")
}
