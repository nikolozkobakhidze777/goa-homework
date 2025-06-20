function task1() {
  const age = document.getElementById("ageInput").value
  const phrase = document.getElementById("phraseInput").value
  document.getElementById("result1").textContent = `თქვენი ასაკია ${age} და საყვარელი ფრაზაა: ${phrase}`
}

function task2() {
  const val = document.getElementById("rangeInput").value
  document.getElementById("rangeValue").textContent = val
}

function task3() {
  const name = document.getElementById("nameInput").value
  const emoji = document.getElementById("emojiInput").value
  document.getElementById("greeting").textContent = `გთხოვთ, მიესალმეთ: ${emoji} ${name}!`
}

function task4() {
  const text = document.getElementById("messageInput").value
  document.getElementById("messageResult").textContent = text
  document.body.style.backgroundColor = "lightyellow"
}

function task5() {
  const n1 = Number(document.getElementById("num1").value)
  const n2 = Number(document.getElementById("num2").value)
  document.getElementById("sumResult").textContent = `ჯამი: ${n1 + n2}`
}

function task6() {
  const text = document.getElementById("textLengthInput").value
  document.getElementById("lengthResult").textContent = `სიმბოლოების რაოდენობა: ${text.length}`
}

function task7() {
  const color = document.getElementById("colorInput").value
  document.body.style.backgroundColor = color
}
