// საკლასო დავალება: პირველ რიგში შექმენით ობიექტი Date ობიექტის გამოყენებით და დაბეჭდეთ: ახლანდელი დღე, თვე, წელი.const now = new Date()

let second = 0;

const interval = setInterval(() => {
  second++;
  console.log(`${second} Second!`);

  if (second === 60) {
    clearInterval(interval);
  }
}, 1000);
