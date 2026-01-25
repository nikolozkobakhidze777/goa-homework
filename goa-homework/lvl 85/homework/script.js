const random1to10 = Math.floor(Math.random() * 10) + 1;
console.log(random1to10);

const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);

const passwordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
console.log(passwordLength);

const names = ["Ana", "Giorgi", "Nika", "Luka", "Sandro"];
const randomName = names[Math.floor(Math.random() * names.length)];
console.log(randomName);

const now = new Date();
console.log(now.toString());

const year = now.getFullYear();
console.log(year);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[now.getDay()];
console.log(dayName);
