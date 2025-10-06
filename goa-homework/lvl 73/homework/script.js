for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

let nums = [3, -2, 7, -5, 10, -1];
for (let num of nums) {
  if (num < 0) continue;
  console.log(num);
}

let text = "Hello World";
for (let char of text) {
  if (char === " ") continue;
  console.log(char);
}

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
