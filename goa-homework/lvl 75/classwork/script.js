function parent() {
  let message = "Hello from parent!";

  function child() {
    console.log(message);
  }

  child();
}

parent();
