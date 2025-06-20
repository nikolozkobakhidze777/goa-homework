function submitFunc(e){
  e.preventDefault();
  let form = document.getElementById("main-form");
  let userName = form.elements.nameInput.value;
  let userSurname = form.elements.surnameInput.value;
  let userEmail = form.elements.emailInput.value;
  let userCity = form.elements.cityInput.value;
  console.log(userName, userSurname, userEmail, userCity);
  form.reset();
}

