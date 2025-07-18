let p = document.createElement("p")
p.innerText = "hello world"
document.body.append(p)

let h = document.createElement("h1")
h.innerHTML = "this is a heading"
let d = document.getElementById("div")
d.append(h)

let im = document.createElement("img")
im.src = "https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg"
document.body.appendChild(im)

let btn = document.createElement("button")
btn.textContent = "Click me"
document.body.append(btn)

let list = document.createElement("ul")
let one = document.createElement("li")
one.innerText = "first thing"
let two = document.createElement("li")
two.textContent = "second thing"
let three = document.createElement("li")
three.append("third thing here")
list.appendChild(one)
list.append(two)
list.appendChild(three)

document.body.append(list)
