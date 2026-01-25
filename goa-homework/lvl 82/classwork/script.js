const nums = [3, 5, 12, 20, 7, 25, 30, 8, 15, 41];

const multiplenum = nums.filter(function(num) {
  return num % 5 === 0;
});

console.log(multiplenum);
