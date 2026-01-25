const items = {
  Apple: 2.5,
  Banana: 1.2,
  Orange: 3
};

const itemStrings = Object.entries(items).map(([key, value]) => `${key}: $${value}`);
console.log(itemStrings);

const obj = { name: "Ana", age: 20, city: "Tbilisi" };
const properties = ["name", "age", "country"];
let count = 0;
for (const prop of properties) {
  if (Object.hasOwn(obj, prop)) count++;
}
console.log(count);

const data = { a: 1, b: 2, c: 3 };
const keys = Object.keys(data);
console.log(keys.length);
console.log(keys.includes("b"));

const numbers = { x: 10, y: 20, z: 5 };
const values = Object.values(numbers);
const total = values.reduce((sum, val) => sum + val, 0);
const max = Math.max(...values);
console.log(total);
console.log(max);
