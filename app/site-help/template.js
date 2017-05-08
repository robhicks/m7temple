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
    elementOpen("img", "bd7efab6-e465-42da-8816-ff64071676ab", hoisted1)
    elementClose("img")
  elementClose("p")
  elementOpen("h2")
    text("Adding a Gift")
  elementClose("h2")
  elementOpen("p")
    text(" \
        Add a gift by clicking on the green add button: ")
    elementOpen("img", "2a441abd-f6c5-441a-8cef-67ed67c117a5", hoisted2)
    elementClose("img")
    text(". \
        Once a gift has been added, it can be deleted by clicking the delete button: \
        ")
    elementOpen("img", "d9abb9b3-9438-4227-9e73-fb503c574a0a", hoisted3)
    elementClose("img")
    text(", or you can apply for certification by \
        clicking the award button. The award button can take three forms: 1) \
        ")
    elementOpen("img", "bd0faee7-50ea-4865-bd98-58e5390ecc3b", hoisted4)
    elementClose("img")
    text(" when you have added the gift as a \
        goal haven't yet applied for certification, 2) \
        ")
    elementOpen("img", "c7e009d9-c210-407f-b7b1-afcda2013cab", hoisted5)
    elementClose("img")
    text(" when certification is pending, and \
        3) ")
    elementOpen("img", "25b968bf-1745-4a25-80c3-d5621d482939", hoisted6)
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
    elementOpen("img", "ead21488-b5b8-41ea-89a2-e7d9c1e790a4", hoisted7)
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
    elementOpen("img", "17430d8e-2aa7-46cc-a8ff-ce3f1dae60e6", hoisted8)
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
    elementOpen("img", "58ecc0f5-44e4-46e4-a3fe-14535af1c019", hoisted9)
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
    elementOpen("a", "cb1a9e12-acb9-46c3-8b8e-934967b25f12", hoisted10)
      text("Github")
    elementClose("a")
    text(". ")
    elementOpen("b")
      text("You don't need a Github \
          account to log and track issues.")
    elementClose("b")
    text(" You can also try to get immediat support on \
        ")
    elementOpen("a", "47006a8b-a120-4feb-8b5a-885b5f0ba4e6", hoisted11)
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
