const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully!");
  }, 1000);
});

promise1
  .then((result) => {
    console.log("Task 3 Success:", result);
  })
  .catch((error) => {
    console.error("Task 3 Error:", error);
  });

const promise2 = new Promise((resolve) => {
  resolve(10);
});

promise2
  .then((value) => {
    console.log("Task 4 Step 1:", value);
    return value + 5;
  })
  .then((value) => {
    console.log("Task 4 Step 2:", value);
    return value * 2;
  })
  .then((value) => {
    console.log("Task 4 Final:", value);
  });

const isSuccessful = true;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccessful) {
      resolve("Operation completed successfully!");
    } else {
      reject("Something went wrong!");
    }
  }, 1500);
});

promise3.then(
  (result) => {
    console.log("Task 5 Success:", result);
  },
  (error) => {
    console.error("Task 5 Error:", error);
  }
);

const promise4 = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Task failed!");
    }
  }, 2000);
});

promise4
  .then((result) => {
    console.log("Task 6 Success:", result);
  })
  .catch((error) => {
    console.error("Task 6 Error:", error);
  })
  .finally(() => {
    console.log("Task 6: Cleanup complete.");
  });