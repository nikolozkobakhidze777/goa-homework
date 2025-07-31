// .cloneNode(ლოჯიკები) -> ქმნის ელემენტის კლონს
// .createElement(ლოჯიკები) -> ქმნის ახალ ელემენტს document ობიექტში
// .appendChild(ლოჯიკები) -> ამატებს კონტეინერ ელემენტს კონკრეტულ ობიექტში
// .removeChild(ლოჯიკები) -> შლის ელემენტს ობიექტიდან
// .replaceChild(ახალი ელემენტი, ძველი ელემენტი) -> ანაცვლებს ძველ ელემენტს ახალით

let div = document.getElementById("div")
let clonedDiv = div.cloneNode(true)
document.body.appendChild(clonedDiv)

let p = document.createElement("p")
let pClone = p.cloneNode(false)
console.log(pClone)

let button = document.querySelector("button")
let buttonClone = button.cloneNode(true)
document.body.appendChild(buttonClone)


let span = document.createElement("span")
let img = document.createElement("img")
let input = document.createElement("input")


let newP = document.createElement("p")
div.appendChild(newP)

let newButton = document.createElement("button")
document.body.appendChild(newButton)

let newSpan = document.createElement("span")
div.appendChild(newSpan)


let paragraph = div.querySelector("p")
div.removeChild(paragraph)

let list = document.querySelector("ul")
list.removeChild(list.children[0])

let buttonToRemove = document.querySelector("button")
document.body.removeChild(buttonToRemove)

let oldP = div.querySelector("p")
let replaceP = document.createElement("p")
replaceP.textContent = "ახალი პარაგრაფი"
if (oldP) div.replaceChild(replaceP, oldP)

let h1 = document.querySelector("h1")
let newH2 = document.createElement("h2")
newH2.textContent = "ახალი სათაური"
document.body.replaceChild(newH2, h1)

let oldImg = document.getElementById("img")
let newImg = document.createElement("img")
newImg.src = "new.jpg"
newImg.alt = "ახალი"
document.body.replaceChild(newImg, oldImg)
