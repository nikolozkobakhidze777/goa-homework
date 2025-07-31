let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let count = document.getElementById("count")

let value = 0

plus.addEventListener("click", function () {
  value++
  count.textContent = value
})

minus.addEventListener("click", function () {
  value--
  count.textContent = value
})
