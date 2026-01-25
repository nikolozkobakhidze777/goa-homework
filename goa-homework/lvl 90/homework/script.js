const promise1 = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation completed successfully");
  } else {
    reject("Operation failed");
  }
});

promise1
  .then(result => console.log(result))
  .catch(error => console.log(error));

const promise2 = new Promise((resolve) => {
  resolve(5);
});

promise2
  .then(value => value * 2)
  .then(value => value + 3)
  .then(value => value - 1)
  .then(finalValue => console.log(finalValue));

const promise3 = new Promise((resolve, reject) => {
  const condition = Math.random() > 0.5;
  if (condition) {
    resolve("Task succeeded");
  } else {
    reject("Task failed");
  }
});

promise3.then(
  success => console.log(success),
  error => console.log(error)
);

const promise4 = new Promise((resolve, reject) => {
  const succeed = Math.random() > 0.3;
  setTimeout(() => {
    if (succeed) {
      resolve("Async operation completed");
    } else {
      reject("Async operation error");
    }
  }, 2000);
});

promise4
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Cleanup executed"));
