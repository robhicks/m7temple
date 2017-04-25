import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "skill-buttons", "src", "/img/skill-buttons.png", "alt", ""]
var hoisted2 = ["class", "action-button", "src", "/img/add.svg", "alt", ""]
var hoisted3 = ["class", "action-button", "src", "/img/delete.svg", "alt", ""]
var hoisted4 = ["class", "action-button", "src", "/img/skill-apply.svg", "alt", ""]
var hoisted5 = ["class", "action-button", "src", "/img/skill-pending.svg", "alt", ""]
var hoisted6 = ["class", "action-button", "src", "/img/skill-earned.svg", "alt", ""]
var hoisted7 = ["class", "action-button", "src", "/img/help.svg", "alt", ""]
var hoisted8 = ["class", "action-button", "src", "/img/skill-apply.svg", "alt", ""]
var hoisted9 = ["id", "my-skills", "src", "/img/my-skills.png", "alt", ""]
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
            for small tasks (or skills), get help doing them and then helping others with those tasks (or skills). \
          ")
    elementClose("p")
  elementClose("general-overlay")
elementClose("general")
elementOpen("working-on-skills")
  elementOpen("h1")
    text("Working on Skills")
  elementClose("h1")
  elementOpen("p")
    text(" \
        Skills are worked on from the home view. In fact everything can be done from the home view. Here \
        are the things you can do with skills: \
        ")
    elementOpen("ul")
      elementOpen("li")
        text("Get information and instructions on how to complete them.")
      elementClose("li")
      elementOpen("li")
        text("Add skills to work on. This will allow to select the skills you want to focus on.")
      elementClose("li")
      elementOpen("li")
        text(" \
                Get help with completing the skill. When you request help, you will be contacted by \
                someone who has already completed the skill, or by a ward temple and family history \
                consultant. \
              ")
      elementClose("li")
      elementOpen("li")
        text(" \
                Share your experience and expertise with others by applying for a certificate of \
                completion. Of course, if you don't want to share your experience or don't feel comfortable \
                with others, you don't have to, although you can still receive recognition for having \
                completed a skill. \
              ")
      elementClose("li")
    elementClose("ul")
  elementClose("p")
  elementOpen("p")
    text(" \
        Most actions involving skills are available through the skills button bar, highlighted with a green \
        rectangle. We'll explain below what the buttons are for and what they do. \
        ")
    elementOpen("img", "c2d51951-265e-4e73-aba2-5b436e01b147", hoisted1)
    elementClose("img")
  elementClose("p")
  elementOpen("h2")
    text("Adding a Skill")
  elementClose("h2")
  elementOpen("p")
    text(" \
        Add a skill by clicking on the green add button: ")
    elementOpen("img", "1765a754-6a74-4a4e-8f8c-7ade9db846c0", hoisted2)
    elementClose("img")
    text(". \
        Once a skill has been added, it can be deleted by clicking the delete button: \
        ")
    elementOpen("img", "2bcba76f-bbfa-4dc1-88d7-914edf7a2c73", hoisted3)
    elementClose("img")
    text(", or you can apply for certification by \
        clicking the award button. The award button can take three forms: 1) \
        ")
    elementOpen("img", "e51dc067-391c-43b9-97c3-c6b28fa053ca", hoisted4)
    elementClose("img")
    text(" when you have added the skill as a \
        goal haven't yet applied for certification, 2) \
        ")
    elementOpen("img", "a2d489f4-8af7-4141-95af-c449e8d0b070", hoisted5)
    elementClose("img")
    text(" when certification is pending, and \
        3) ")
    elementOpen("img", "4f58b8ec-b059-40f4-b56f-f92262150689", hoisted6)
    elementClose("img")
    text(" when you have earned the skill. \
      ")
  elementClose("p")
  elementOpen("p")
    text(" If you have earned a skill, you can't delete it by accident. The system will warn you.")
  elementClose("p")
  elementOpen("h2")
    text("Getting Help for a Skill")
  elementClose("h2")
  elementOpen("p")
    text(" \
        You can request for a skill by clicking the life perserver button: \
        ")
    elementOpen("img", "bad29ade-71d7-4be8-8b5f-d7129ea3a729", hoisted7)
    elementClose("img")
    text(". Your request will be acknowledged and \
        someone with has earned the skill will be asked to contact you to help you achieve the skill. \
      ")
  elementClose("p")
  elementOpen("h2")
    text("Getting Recognition for Completing a Skill")
  elementClose("h2")
  elementOpen("p")
    text(" \
        As mentioned above, you can get recognized for completing a skill by submitting an application. \
        You submit application by clicking the apply button: ")
    elementOpen("img", "96a515b2-fc5e-46a2-8a8c-2c2d8fd60374", hoisted8)
    elementClose("img")
    text(". \
        You will be asked to explain your experience in working on the skill and if you are willing to \
        share your experience with others, and help others in their efforts to earn the skill. \
      ")
  elementClose("p")
  elementOpen("h2")
    text("Seeing Only My Skills")
  elementClose("h2")
  elementOpen("p")
    text(" \
        You can see your own skills simply by clicking the My Skills checkbox in the upper right part of \
        of the home view. \
        ")
    elementOpen("img", "a0622b6f-eb74-48ab-8728-02ea363bd267", hoisted9)
    elementClose("img")
  elementClose("p")
elementClose("working-on-skills")
elementOpen("technical-issues")
  elementOpen("h1")
    text("Technical Issues")
  elementClose("h1")
  elementOpen("p")
    text(" \
        While we would like to hope the site works flawlessly, it won't. But please don't give up. \
        It has been designed to help us help yourself and others take important steps to work on \
        temple and family history work. \
      ")
  elementClose("p")
  elementOpen("p")
    text(" \
        When you run into technical issues, please let us know. You can do so by contacting a member of \
        of the high priest group leadership and/or Rob Hicks. Contact information is in the ward directory. \
      ")
  elementClose("p")
  elementOpen("p")
    text(" \
        Please report issues because we are committed to addressing them! \
      ")
  elementClose("p")
elementClose("technical-issues")
}
