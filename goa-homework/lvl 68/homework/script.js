const content = document.getElementById("content");
const firstChild = content.firstElementChild;
content.removeChild(firstChild);

const list = document.getElementById("myList");
const lastChild = list.lastElementChild;
list.removeChild(lastChild);

const textContainer = document.getElementById("textContainer");
const oldP = textContainer.querySelector("p");
const newP = document.createElement("p");
newP.textContent = "New paragraph";
textContainer.replaceChild(newP, oldP);

const buttonContainer = document.getElementById("buttonContainer");
const oldButton = buttonContainer.querySelector("button");
const newSpan = document.createElement("span");
newSpan.textContent = "I was a button";
buttonContainer.replaceChild(newSpan, oldButton);

const singleList = document.getElementById("singleList");
const oldLi = singleList.querySelector("li");
const newLi = document.createElement("li");
newLi.textContent = "New item";
singleList.replaceChild(newLi, oldLi);

const headingContainer = document.getElementById("headingContainer");
const oldH2 = headingContainer.querySelector("h2");
const newH1 = document.createElement("h1");
newH1.textContent = "I am now an H1!";
headingContainer.replaceChild(newH1, oldH2);
