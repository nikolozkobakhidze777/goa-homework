// საკლასო დავალება:

// html-ში ჩაამატეთ მეორე დონის სათაური და წამოიღეთ ის js-ში. ამ ელემენტზე დაამატეთ event listener და მის ფუნქციას გაუწერეთ e პარამეტრი. როდესაც pointerdown მოვლენა მოხდება, ამ e პარამეტრით უნდა მიწვდეთ მეორე დონის სათაურს და თუ მისი fontSize იქნება 30 პიქსელი, მაშინ გაუწეროთ 20 პიქსელი. ხოლო თუ 20 პიქსელი იქნება, მაშინ გაუწეროთ 30 პიქსელი.

let Heading = document.getElementById("Heading")

Heading.addEventListener("pointerdown", function(e) {
  if (e.target.style.fontSize === "30px") {
    e.target.style.fontSize = "20px"
  } else {
    e.target.style.fontSize = "30px"
  }
})
