const MyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const students = [
      "Nika", "Giorgi", "Nika", "Luka", "Datuna"
    ];

    const randomIndex = Math.floor(Math.random() * students.length);
    const selectedName = students[randomIndex];

    if (selectedName.length > 5) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 5000);
});

MyPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
