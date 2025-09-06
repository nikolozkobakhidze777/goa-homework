// საკლასო დავალება:

// html-ის სტრუქტურაში ჩაამატეთ ერთი პარაგრაფი. შემდეგ, წამოიღეთ ის js-ში და მასზე დაამატეთ click მოვლენის hanlder. როდესაც პარაგრაფზე მოხდება დაკლიკება, უნდა გაეშვას ფუნქცია, რომელიც შემდეგ დავალებას შეასრულებს:

//   თუ პარაგრაფი მარცხნივ არის დაწერილი, გაიცენტროს ის. ხოლო თუ გაცენტრილია, მისი ტექსტი დაიწეროს მარცხნივ.

let Paragraph = document.getElementById("Paragraph");

Paragraph.addEventListener("click", function() {
  if (Paragraph.style.textAlign === "center") {
    Paragraph.style.textAlign = "left";
  } else {
    Paragraph.style.textAlign = "center";
  }
});
