// ✅ Homework 1: Type Conversion Practice
// Write a program that:

// Converts the number 123 to a string using String().

// Converts the boolean true to a string using String().

// Converts the string "456" to a number using Number().

// Converts the boolean false to a number using Number().

// Tries to convert the string "hello" to a number using Number() and logs the result.

// Expected Output Example (in console):

// pgsql
// Copy
// Edit
// "123"
// "true"
// 456
// 0
// NaN

console.log(String(123));
console.log(String(true));
console.log(Number("456"));
console.log(Number(false));
console.log(Number("Nan"));


// ✅ Homework 2: Check if a Number is Positive, Negative, or Zero
// Write a program that:

// Prompts the user to enter a number.

// Uses if, else if, and else to check whether the number is positive, negative, or zero.

// Displays an alert with the result.

// Example Input/Output:

// Input: -5 → Alert: “The number is negative.”

// Input: 0 → Alert: “The number is zero.”

// Input: 25 → Alert: “The number is positive.”

let userInput = prompt("Enter a number:");
let number = Number(userInput);

if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}


// ✅ Homework 3: Age Check for Voting
// Write a program that:

// Asks the user to enter their age.

// If age is 18 or older, shows “You can vote!”.

// If age is below 18, shows “You are not eligible to vote.”

// Use prompt() and alert() functions.

let userAge = Number(prompt("enter your age: "))
if(userAge >= 18) {
    console.log("You an vote!")
}
else {
    console.log("You are not eligible to vote.")
}

// ✅ Homework 4: Compare Two Numbers
// Write a program that:

// Prompts the user to enter two numbers.

// Compares them using if...else and shows:

// “First number is larger”

// “Second number is larger”

// Or “Both numbers are equal”

// Bonus: Use Number() to make sure you convert user input from string to number.

let firstnumber = Number(prompt("Enter first number: "))
let secondNumber = Number(prompt("Enter second number: "))

if(firstnumber > secondNumber) {
    console.log("first number is larger")
}
else if(firstnumber < secondNumber) {
    console.log("second number is larger")
}
else {
    console.log("it is equal")
}