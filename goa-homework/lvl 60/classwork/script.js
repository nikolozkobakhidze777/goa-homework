// საკლასო დავალება
// შეამოწმეთ რიცხვი ლუწია თუ კენტია

let userInput = prompt("შეიყვანე რიცხვი:");
let number = Number(userInput);

if (number % 2 === 0) {
  console.log(number + " ლუწია");
} else {
  console.log(number + " კენტია");
}
