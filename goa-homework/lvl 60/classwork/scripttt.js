// შექმენით ორი ცალი ობიექტი:name,age,city.შეამოწმეთ თუ ორივე age მეტია 18 ზე და city არის თბილისი მაშინ კოსოლსი გამოიტანოს "you can vote in tbilisi"

let person1 = {
    name: "Nikolozi",
    age: 12,
    city: "Ozurgeti"
}

let person2 = {
    name: "Giorgi",
    age: 19,
    city: "Tbilisi"
}

if (person1.age > 18 && person2.age > 18 && person1.city === "Ozugeti" && person2.city === "Tbilisi") {
    console.log("You can vote in Tbilisi");
}