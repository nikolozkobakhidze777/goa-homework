// ✅ Homework 1: Boolean Conversion Practice
// Write a program that:

// Converts the number 0 to a boolean using Boolean().

// Converts the number 1 to a boolean.

// Converts the string "hello" to a boolean.

// Converts an empty string "" to a boolean.

// Converts null to a boolean.

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("hello"));   
console.log(Boolean(""));        
console.log(Boolean(null));


// ✅ Homework 2: Even or Odd Number
// Ask the user to enter a number using prompt().

// Convert the input to a number using Number().

// Check if it’s even or odd using the % operator.

// Show the result with alert().

// Example Output:

// Input: 4 → Alert: “Even number”

// Input: 7 → Alert: “Odd number”

let numberInput = prompt("შეიყვანეთ რიცხვი:");
let num = Number(numberInput);

if (num % 2 === 0) {
  alert("რიცხი არის ლუწი");
} else {
  alert("რიცხი არის კენტი");
}


// ✅ Homework 3: Grade Checker
// Ask the user to enter a number from 0 to 100.

// Show the grade based on the score:

// 90-100: A

// 80-89: B

// 70-79: C

// 60-69: D

// Below 60: F

// Bonus: Use else if statements.

let score = Number(prompt("შეიყვანე შენი ქულა (0-100):"));

if (score >= 90 && score <= 100) {
  alert("Grade: A");
} else if (score >= 80) {
  alert("Grade: B");
} else if (score >= 70) {
  alert("Grade: C");
} else if (score >= 60) {
  alert("Grade: D");
} else {
  alert("Grade: F");
}


// ✅ Homework 4: Object with Array Property
// Create an object called book like this:

// js
// Copy
// Edit
// let book = {
//   title: "Your Book Title",
//   author: "Your Name",
//   genres: ["fiction", "adventure"]
// };
// Then:

// Log the first genre.

// Add a new genre.

// Change the title of the book.

// Print the final object.

let book = {
  title: "Your Book Title",
  author: "Your Name",
  genres: ["fiction", "adventure"]
};

console.log(book.genres[0]);        
book.genres.push("mystery");         
book.title = "New Book Title";
console.log(book);                   

// ✅ Homework 5: Simple Calculator with 2 Numbers
// Ask the user for 2 numbers and an operation (+, -, *, /).

// Use if...else to do the correct operation.

// Show the result in an alert.

// Example:

// Input: 5, +, 3 → Alert: “Result: 8”

// ----------------------------------------------------------------

// ✅ Homework 6: Check Name and Age
// Ask the user for their name and age. Then:

// If the name is "Alex" and the age is greater than 18, show:
// “Welcome Alex!”

// Otherwise, show:
// “Access denied.”

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

if (name === "Alex" && age > 18) {
  alert("Welcome Alex!");
} else {
  alert("Access denied.");
}


// ✅ Homework 7: Object Inside Array
// Create an array of 2 objects like this:

// js
// Copy
// Edit
// let users = [
//   { name: "Nika", age: 21 },
//   { name: "Mariam", age: 19 }
// ];
// Then:

// Log the name of the first user.

// Change the age of the second user.

// Add a new user to the array.

let users = [
  { name: "Nika", age: 21 },
  { name: "Mariam", age: 19 }
];

console.log(users[0].name);
users[1].age = 20;
users.push({ name: "Gio", age: 25 }); 
console.log(users);


// ✅ Homework 8: Check if Input is a Number
// Ask the user to enter something.

// Use Number() to try converting it.

// Use isNaN() to check if it’s a number or not.

// Show an alert:

// “That’s a valid number!”

// Or “Not a number.”

let userInput = prompt("Enter something:");
let converted = Number(userInput);

if (isNaN(converted)) {
  alert("That's a valid number!");
} else {
  alert("Not a number.");
}
