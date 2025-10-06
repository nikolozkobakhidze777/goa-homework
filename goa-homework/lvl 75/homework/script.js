let multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5));

setInterval(function() {
  console.log("Hello every 2 seconds");
}, 2000);

document.getElementById("myButton").addEventListener("click", function() {
  alert("Button was clicked!");
});


(function() {
  console.log("Hello, world!");
})();

(function(num) {
  console.log(num * num);
})(5);

(function(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
})([10, 20, 30, 40]);
