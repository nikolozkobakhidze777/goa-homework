const MyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const myNum = Math.round(Math.random());

    if (myNum === 0) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 5000);
});

console.log(MyPromise)