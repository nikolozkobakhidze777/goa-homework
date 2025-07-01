// საკლასო დავალება:

// შექმენით ფუნქცია, სახელად correctUserPassword. ამ ფუნქციაში აიღეთ ერთი ცვლადი, სადაც შეინახავთ სწორ პაროლს. შემდეგ მომხმარებელს შემოატანინეთ თავისი პაროლი. სანამ მომხმარებლის შემოტანილი პაროლი არ იქნება სწორი, თავიდან შემოატანინეთ. 

// ბოლოს, დაუბეჭდეთ correct guess და ასევე დაუწერეთ რამდენი ცდა დასჭირდა.

// ფუნქცია გაუშვით მაშინ, როდესაც ვებსაიტი ჩაიტვირთება

function correctUserPassword() {
  const correctPassword = "12345";
  let attempts = 0;
  let userInput;

  do {
    userInput = prompt("Enter your password:");
    attempts++;
  } while (userInput !== correctPassword);

  alert("Correct guess! Attempts: " + attempts);
}

window.onload = function() {
  correctUserPassword();
};
