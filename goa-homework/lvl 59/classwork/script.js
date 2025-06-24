// მომხმარებელს შემოატანინეთ რიცხვი.შეამოწეთ რიცხვი კენტია თუ ლუწი და გამოიტანეთ შესაბამისი მესიჯი

let number = promt ("enter a number: ")

number = Number(number);

if (number % 2 === 0) {
    console.log("the number is even", number);
}
else if (number % 2 !== 0) {
    console.log("the number is odd", number);
}