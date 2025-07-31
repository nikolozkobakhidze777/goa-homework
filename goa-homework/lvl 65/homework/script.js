let box = document.getElementById("box")
let position = 0

let interval = setInterval(function () {
  if (position >= 400) {
    clearInterval(interval)
  } else {
    position += 2
    box.style.top = position + "px"
  }
}, 10)


// დააჭერს ღილაკს - click მოვლენა

// ჩაწერს ტექსტს input-ში - input მოვლენა

// გადაატანს მაუსს - mouseover, mousemove

// დარეფრეშდება გვერდი - load