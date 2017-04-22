import {patch, elementOpen, elementClose, text, skip, currentElement} from "incremental-dom"

var hoisted1 = ["id", "skill-buttons", "src", "/img/skill-buttons.png", "alt", ""]
var hoisted2 = ["id", "add-button", "src", "/img/add.svg", "alt", ""]
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
    elementOpen("img", "6653b151-bca7-4414-9ca1-76c3a1a27edb", hoisted1)
    elementClose("img")
  elementClose("p")
  elementOpen("h2")
    text("Adding a Skill")
  elementClose("h2")
  elementOpen("p")
    text(" \
        Add a skill by clicking on the green add button: ")
    elementOpen("img", "f24a4f41-052e-4200-9f60-7172d8f9be0e", hoisted2)
    elementClose("img")
  elementClose("p")
  elementOpen("h2")
    text("Getting Help for a Skill")
  elementClose("h2")
  elementOpen("h2")
    text("Getting Recognition for Completing a Skill")
  elementClose("h2")
  elementOpen("h2")
    text("Seeing Only My Skills")
  elementClose("h2")
elementClose("working-on-skills")
}
