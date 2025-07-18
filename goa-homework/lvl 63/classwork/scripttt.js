// საკლასო დავალება:

// html-ში შექმენით სექცია და წამოიღეთ ის js-ში.

// შექმენით ფუნქცია, რომელშიც: შეიქმნება დივ ბლოკი, რომელშიც ჩაემატება პარაგრაფი. ამ პარაგრაფს ტექსტი პირდაპირ textContent-ით შეუცვალეთ. დივ ბლოკი გასტილეთ, გაუწერეთ ფერი და ფონის ფერი. საბოლოოდ, დივ ბლოკი უნდა ჩაემატოს სექციაში.

// სულ ბოლოს, უბრალოდ გამოიძახეთ თქვენი ფუნქცია.

let section = document.getElementById("section1");

function createDivWithParagraph() {
  let newDiv = document.createElement("div");
  let paragraph = document.createElement("p");
  let text = document.createTextNode("ეს არის ახალი პარაგრაფი");
  paragraph.appendChild(text);
  newDiv.appendChild(paragraph);}

  createDivWithParagraph();
