let hobby = prompt("რა არის შენი საყვარელი ჰობი?");
alert("შენი საყვარელი ჰობი არის: " + hobby);

let firstName = prompt("შეიყვანეთ თქვენი სახელი:");
let lastName = prompt("შეიყვანეთ თქვენი გვარი:");
let fullName = firstName + " " + lastName;
alert("შენი მთლიანი სახელია: " + fullName);

let userMessage = prompt("შეიყვანე მესიჯი:");
document.getElementById("messagePara").textContent = userMessage;

let emoji = prompt("რა არის შენი საყვარელი ემოჯი?");
alert("მადლობა! შენ აირჩიე: " + emoji);

let pageTitle = prompt("შეიყვანეთ გვერდის სათაური:");
document.title = pageTitle;
