let num1 = parseFloat(prompt("Enter first decimal number:"));
let num2 = parseFloat(prompt("Enter second decimal number:"));

let Trunc_pow = Math.trunc(Math.pow(num1, 3));
let floorNumber = Math.floor(num2);

let minimum = Math.min(Trunc_pow, floorNumber);
let maximum = Math.max(Trunc_pow, floorNumber);

alert(
`    
- Trunc: ${truncatedPower}
- Floor: ${flooredNumber}
- Minimum: ${minimum}
- Maximum: ${maximum}`);