// საკლასო დავალება:

// შექმენით ფუნქცია, რომელსაც გადაეცემა ბულეანი. ამ ფუნქციამ დააბრუნოს promise ობიექტი, რომელიც მაშინ მოახდენს resolve-ს, როდესაც ბულეანი არის false, ხოლო სხვა შემთხვევაში მოახდენს reject-ს.

// resolve-ის დროს დააბრუნეთ სთრინგი "success", ხოლო reject-ის დროს "failure".

// შემდეგ, გამოიძახეთ Promise.all და მას მასივში გადაეცით სამი promise ობიექტი - სამივე უნდა იყოს თქვენ მიერ შექმნილი ფუნქციიდან დაბრუნებული. Promise.all-ის დაბრუნებულ promise ობიექტზე გაწერეთ then და catch მეთოდები და უბრალოდ გადაცემული მნიშვნელობები დაბეჭდეთ კონსოლში.

function bool(bool1) {
  return new Promise((resolve, reject) => {
    if (bool1 === false) {
      resolve("succsesfull")
    } else {
      reject("failed")
    }
  })
}

async function Check(){
    let result = await bool(false)
    console.log(result)
}

Check()