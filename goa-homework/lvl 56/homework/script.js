let a = 5
let b = 5
console.log(a == b)

let x = 10
let y = 7
console.log(x > y)

let m = 8
let n = 12
console.log(m <= n)

let p = 4
let q = 9
console.log(p != q)

let z = 120
console.log(z >= 100)

let result1 = confirm("გსურთ გაგრძელება?")
console.log(result1)

function task7() {
  let result2 = confirm("დარწმუნებული ხართ?")
  console.log(result2)
}

let result3 = confirm("შეტყობინება ჩატვირთვისას")
alert(result3)

function task10(e) {
  e.preventDefault()
  let user = document.querySelector('[name="username"]').value
  console.log(user)
}

function task11() {
  document.querySelector('[name="email"]').value = ""
}

function task12() {
  let phone = document.querySelector('[name="phone"]').value
  alert(phone)
}
