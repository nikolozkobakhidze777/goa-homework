let input = prompt("Enter a math expression:");
console.log(eval(input));

let expression = prompt("Enter a full math expression:");
let result = eval(expression);
console.log("Result:", result);

let calc = "10 + 5";
console.log(eval(calc));

let check = "10 > 3";
console.log(eval(check));

try {
    console.log(eval("2 ++ 3"));
} catch (error) {
    console.log("Error:", error.message);
}
