// როდესაც ვებ გვერდი ბრაუზერში იტვირთება, ბრაუზერი ქმნის გლობალურ ობიექტს ჯავასკრიპტში, რომელსაც ეწოდება DOM (Document object model)
// .getElementById არის JavaScript-ის მეთოდი, რომელიც გამოიყენება HTML დოკუმენტში კონკრეტული ელემენტის მოსაძებნად მისი id ატრიბუტის მიხედვით.

let sentence = "ეს არის ახალი ტექსტი ცვლადიდან.";

let paragraph = document.getElementById("myParagraph");

paragraph.innerText = sentence;