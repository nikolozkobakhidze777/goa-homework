let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
  alert("Even number");
} else {
  alert("Odd number");
}

let score = Number(prompt("Enter your score (0-100):"));

if (score >= 90) {
  alert("Grade A");
} else if (score >= 80) {
  alert("Grade B");
} else if (score >= 70) {
  alert("Grade C");
} else if (score >= 60) {
  alert("Grade D");
} else {
  alert("Fail");
}

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a === b && b === c) {
  alert("All numbers are equal.");
} else if (a >= b && a >= c) {
  alert("The largest number is: " + a);
} else if (b >= a && b >= c) {
  alert("The largest number is: " + b);
} else {
  alert("The largest number is: " + c);
}


// 5 ----------------------------------------------------------------------------------

let number = Number(prompt("Enter a number:"));

if (number % 3 === 0 && number % 5 === 0) {
  alert("Divisible by both 3 and 5");
} else if (number % 3 === 0) {
  alert("Divisible by 3 only");
} else if (number % 5 === 0) {
  alert("Divisible by 5 only");
} else {
  alert("Not divisible by 3 or 5");
}

let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
  alert("You are a Child");
} else if (age >= 13 && age <= 19) {
  alert("You are a Teenager");
} else if (age >= 20 && age <= 59) {
  alert("You are an Adult");
} else if (age >= 60) {
  alert("You are a Senior");
} else {
  alert("Invalid age entered");
}
