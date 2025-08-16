const previous = document.getElementById("previous")
const next = document.getElementById("next")
let image = document.getElementById("image")
const images = ["Bird.jpg","Cool photo.jpeg","Lizard.jpeg"]
let index = 0

function showImage(currentIndex){
    index = currentIndex
    if(currentIndex >= images.length){
        index = 0
    }else if(currentIndex < 0){
        index = images.length - 1
    }
    image.src = images[index]
}

previous.addEventListener("click",function(){
    showImage(index - 1) 
})
next.addEventListener("click",function(){
    showImage(index + 1)
})

// Capturing – მოვლენა იწყებს გზას ზემოდან ქვემოთ.
// ანუ პირველ რიგში იტყობინება body, მერე div, მერე ღილაკი.

// Bubbling – მოვლენა იწყებს გზას ქვემოდან ზემოთ.
// ანუ ჯერ ღილაკი "გაიგებს", მერე მისი მშობელი div, მერე body.