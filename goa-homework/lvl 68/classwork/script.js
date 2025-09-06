// საკლასო დავალება:

// js-ის კოდში თავიდან შექმენით ღილაკი და მას შეუცვალეთ textContent, გაუწერეთ "Click me". 

// js-ის კოდში წამოიღეთ html-ის სტრუქტურიდან პარაგრაფი და მისი მშობელი ელემენტი. თქვენი დავალებაა, რომ პარაგრაფი შეცვალოთ თქვენს მიერ შექმნილი ღილაკით.

// პარაგრაფის ღილაკით შეცვლის კოდი გაწერეთ ფუნქციაში და ეს ფუნქცია მაშინ გამოიძახეთ, როდესაც ვებსაიტი ჩაიტვირთება.

function replacepwhitbtn() {
  let button = document.createElement("button");

  button.textContent = "Click me";

  let paragraph = document.getElementById("child");
  let parent = document.getElementById("parent");

  parent.replaceChild(button, paragraph);
}