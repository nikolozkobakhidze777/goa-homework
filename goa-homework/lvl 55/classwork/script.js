// const form = document.getElementById('myForm');
// const heading = document.getElementById('myHeading');
// const colorInput = document.getElementById('colorInput');
// const textInput = document.getElementById('textInput');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   heading.textContent = textInput.value;
//   heading.style.color = colorInput.value;
// });

// როდესაც ვებ გვერდი ბრაუზერში იტვირთება, ბრაუზერი ქმნის გლობალურ ობიექტს ჯავასკრიპტში, რომელსაც ეწოდება DOM (Document object model)
// .getElementById არის JavaScript-ის მეთოდი, რომელიც გამოიყენება HTML დოკუმენტში კონკრეტული ელემენტის მოსაძებნად მისი id ატრიბუტის მიხედვით.

let sentence = "ეს არის ახალი ტექსტი ცვლადიდან.";

let paragraph = document.getElementById("myParagraph");

paragraph.innerText = sentence;