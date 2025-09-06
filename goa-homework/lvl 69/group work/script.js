let Heading = document.getElementById("Heading")

Heading.addEventListener("pointerdown", function(e) {
  if (e.target.style.fontSize === "30px") {
    e.target.style.fontSize = "20px"
  } else {
    e.target.style.fontSize = "30px"
  }
})

// ----------------------------------------------------------------

let Paragraph = document.getElementById("Paragraph");

Paragraph.addEventListener("click", function() {
  if (Paragraph.style.textAlign === "center") {
    Paragraph.style.textAlign = "left";
  } else {
    Paragraph.style.textAlign = "center";
  }
});

// ----------------------------------------------------------------

let p = document.getElementById("p-main")

p.addEventListener("click", function() {
  if (p.style.color === "black" || p.style.color === "") {
    p.style.color = "red"
  } else {
    p.style.color = "black"
  }
})

// ----------------------------------------------------------------

let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
  if (btn.style.fontSize === "20px") {
    btn.style.fontSize = "30px"
  } else {
    btn.style.fontSize = "20px"
  }
})


// ----------------------------------------------------------------

const previous = document.getElementById("previous");
const next = document.getElementById("next");

let image = document.getElementById("image");

const images = ["Dog picture.webp", "nature 3.jpg", "nature 4.jpg"];
let index = 0;

function showImage(currentIndex) {
    if (currentIndex >= images.length) {
        index = 0;
    } else if (currentIndex < 0) {
        index = images.length - 1;
    } else {
        index = currentIndex;
    }

    image.src = images[index];
}

previous.addEventListener("click", function () {
    showImage(index - 1);
});

next.addEventListener("click", function () {
    showImage(index + 1);
});