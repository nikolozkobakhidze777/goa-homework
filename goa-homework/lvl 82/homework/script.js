const numbers = [5, 12, 0, -3, 8, -10];

const firstNegativeIndex = numbers.findIndex(num => num < 0);

console.log(firstNegativeIndex);

const users = [
  { name: "Datuna", age: 12 },
  { name: "Giorgi", age: 12 },
  { name: "Nika", age: 13 },
  { name: "Luka", age: 21 }
];

const adultUserIndex = users.findIndex(user => user.age >= 18);

console.log(adultUserIndex);

const number = [4, -2, 7, -5, 10, -1, 3];

const lastNegativeIndex = numbers.findLastIndex(num => num < 0);

console.log(lastNegativeIndex);

const ricxvebi = [3, 7, 10, 5, 8, 11, 9];

const lastEven = numbers.findLast(num => num % 2 === 0);

console.log(lastEven); 

const products = [
  { id: 1, price: 50 },
  { id: 2, price: 120 },
  { id: 3, price: 80 },
  { id: 4, price: 200 }
];

const expensiveProduct = products.findLast(product => product.price > 100);

console.log(expensiveProduct);