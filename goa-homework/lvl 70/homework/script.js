let count = 1
let counter = setInterval(() => {
  console.log(count)
  if (count === 5) clearInterval(counter)
  count++
}, 1000)

let message = setInterval(() => {
  console.log("Hello from interval")
}, 2000)
setTimeout(() => clearInterval(message), 10000)

let colors = ["red","blue","green","yellow","purple"]
let i = 0
let bg = setInterval(() => {
  document.body.style.background = colors[i]
  i++
  if (i === 5) clearInterval(bg)
}, 3000)

let time = setInterval(() => {
  console.log(new Date().toLocaleTimeString())
}, 1000)
setTimeout(() => clearInterval(time), 15000)

let sec = 0
let timer = setInterval(() => {
  sec++
  console.log(sec)
  if (sec === 10) clearInterval(timer)
}, 1000)
