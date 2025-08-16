const previous = document.getElementById("previous");
const next = document.getElementById("next");

let image = document.getElementById("image")

index = 0;

const images = ["Bird.jpg", "Cool photo.jpg", "Lizard.jpg", "Nature.jpg"]

function changeImage(){
    index = currIndex
    
    if(currIndex >= images.length){
        index = 0
    }
    else if(currIndex < 0){
        index = images.length - 1
    }
    image.src = images[index];
}


previous.addEventListener("click", function() {
    changeImage(index + 1)
})
next.addEventListener("click", function() {
    changeImage(index + 1)
}) 
