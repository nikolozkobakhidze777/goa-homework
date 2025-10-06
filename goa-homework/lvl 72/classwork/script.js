// საკლასო დავალება:

// html-ში ჩაამატეთ ერთი div ბლოკი, გაუწერეთ მას სიგანე, სიმაღლე, ფონის ფერი და position კუთვნილება (js-ის კოდით უნდა შეგეძლოთ ამ ელემენტის გადაადგილება).

// წამოიღეთ ეს ელემენტი js-ში. შემდეგ, შეადგინეთ ინტერვალი, სადაც ყოველ 1.5 წამში ელემენტის left და top  კუთვნილებები გაიზრდება 20-ით. ინტერვალი გააუქმეთ მაშინ, როდესაც left და top კუთვნილებები მიაღწევს 200-ს. როდესაც ინტერვალს გააუქმებთ, თქვენს ელემენტს შეუცვალეთ სიგანე, სიმაღლე და ფონის ფერი

const div = document.getElementById("div")

div.style.width = "100px"
div.style.height = "100px"
div.style.backgroundColor = "blue"
div.style.position = "relative"

const move = setInterval(() => {
  leftPos += 20
  topPos += 20
  div.style.left = leftPos + "px"
  div.style.top = topPos + "px"

  if (leftPos >= 200 && topPos >= 200) {
    clearInterval(move)
    div.style.width = "150px"
    div.style.height = "150px"
    div.style.backgroundColor = "green"
  }
}, 1500)
