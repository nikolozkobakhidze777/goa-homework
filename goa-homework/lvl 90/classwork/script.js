// საკლასო დავლება:

// შექმენით promise ობიექტი და მის executor ფუნქციაში ასეთი ლოგიკა დაწერეთ: შემოიღეთ მასივი, სადაც ჯგუფი 29-ის მოსწავლეების სახელები გექნებათ. შემდეგ, მასივიდან აირჩიეთ random ელემენტი და თუ ამ სახელის სიგრძე ნაკლებია 6-ზე, მოახდინეთ reject, სხვა შემთხვევაში resolve.

// თქვენს promise ობიექტზე გამოიძახეთ then მეთოდი და მას გადაეცით ორივე handler. ამ handler-ებმა უნდა მიიღონ პარამეტრში ინფორმაცია და ფუნქციაში უბრალოდ დაბეჭდეთ ეს ინფორმაცია.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const group29 = [
      "Nika",
      "Giorgi",
      "Aleksandre",
      "Luka",
      "Nika",
      "Datuna",
      "Mr Data Tezelashvili"
    ];

    const randomIndex = Math.floor(Math.random() * group29.length);
    const randomName = group29[randomIndex];

    if (randomName.length < 6) {
      reject(`Reject: "${randomName}" Short`);
    } else {
      resolve(`Resolve: "${randomName}" Long`);
    }
  }, 2000);
});

myPromise.then(
  (res) => {
    console.log(res);
  },
  (rej) => {
    console.log(rej);
  }
);
