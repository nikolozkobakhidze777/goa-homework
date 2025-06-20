let person = {
  name: "Nikoloz",
  surname: "Kobakhidze",
  academy: "GOA",
  num: 12,
  favColor: "Red",
  isGoaStudent: true,
  greet: function(){
    console.log("hello")
  }
}

console.log(person);
console.log(person.favColor);
console.log(person["favColor"]);

person.num = 7;
console.log(person.num);

person.greet();


console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
