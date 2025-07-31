// 1) შექმენით ერთი div ბლოკი და გასტილეთ ის სურვილისამებრ, შემდეგ javascript ის გამოყენებით გააკეთეთ ანიმაცია რომლის საშუალებითაც გავა მარცხნიდან მარჯვნივ ეს div ბლოკი აუცილებლად გამოიყენეთ setInterval() ფუნქცია.

// როცა მარცხენა მხრიდან დაშორება გაუტოლდება 600 პიქსელს გააჩერეთ ანიმაცია


const div = document.getElementById("div");

let leftPosition = 0;

function move() {
  leftPosition += 50;
  div.style.left = leftPosition + "px";
  if (leftPosition === 600) {
    clearInterval(myInterval);
  }
}

let myInterval = setInterval(move, 100);
