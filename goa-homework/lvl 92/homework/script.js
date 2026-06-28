async function task2() {
  try {
    const result = "Task completed successfully!";
    console.log("Task 2 Success:", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

task2();

async function task3() {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Task 3 Error: Custom error message.");
  }
}

task3();

async function task4() {
  try {
    const isValid = false;

    if (!isValid) {
      throw new Error("Condition failed.");
    }

    console.log("Task 4 Success");
  } catch (error) {
    console.log("Task 4 Error:", error.message);
  }
}

task4();

async function task5() {
  const task1 = Promise.resolve("Result 1");
  const task2 = Promise.resolve("Result 2");
  const task3 = Promise.resolve("Result 3");

  const results = await Promise.all([task1, task2, task3]);

  console.log("Task 5 Results:", results);
}

task5();