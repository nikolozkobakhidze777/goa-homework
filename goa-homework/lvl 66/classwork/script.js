// 1) შემქნით საიტი სადაც იქნება მისასალმებელი ტექსტი მაგ: Hello Luka.საიტზე უნდა იყოს ღილაკი რომლის საშუალებითაც შევცვლით ტექსტს.შექმენით მოვლენის მსმენელი და ღილაკზე დაკლიკების შედეგად შეცვალეთ ტექსტი. გამოიყენეთ addEventListener.

// 2)ახსენით კომენტარებით თუ რა დანიშნულება გააჩნია addEventListener მეთოდს.

let greeting = document.getElementById("Welcome");
let button = document.getElementById("changebutton");

button.addEventListener("click", function() {
  Welcome.textContent = "Welcome Nika!";
});

// addEventListener მეთოდი გამოიყენება ელემენტზე მსმენელის დამატება