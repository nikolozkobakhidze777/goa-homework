let numbers = [10, 21, 32, 43, 54];

for (let num of numbers) {
  console.log(num);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(i + ": " + numbers[i]);
}

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

for (let num of numbers) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Sum:", sum);
