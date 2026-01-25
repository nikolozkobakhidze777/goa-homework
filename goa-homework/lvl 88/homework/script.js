setTimeout(() => {
  console.log("Hello");
}, 2000);

setTimeout(() => {
  const p = document.querySelector("p");
  if(p) p.textContent = "This text was changed after 1 second";
}, 1000);

window.addEventListener("load", () => {
  setTimeout(() => {
    alert("Page loaded 3 seconds ago");
  }, 3000);
});

setTimeout(() => {
  console.log("Time’s up!");
}, 5000);

localStorage.setItem("username", "Nika");

const savedUsername = localStorage.getItem("username");
const display = document.querySelector("#usernameDisplay");
if(display) display.textContent = savedUsername;

localStorage.removeItem("username");

localStorage.clear();