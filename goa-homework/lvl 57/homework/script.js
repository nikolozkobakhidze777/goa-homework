let emptyObject = {}
console.log("Empty object:", emptyObject)

let person = {
  name: "ნიკოლოზი",
  age: 12,
  city: "ოზურგეთი"
}
console.log("Person object:", person)

console.log("Access name:", person.name)

person.job = "დეველოპერი"
console.log("After adding job:", person)

let student = {
  name: "ნიკოლოზი",
  age: 12,
  address: {
    city: "ოზურგეთი",
    street: "ფარნავაზის ქუჩა"
  }
}
console.log("Student with nested object:", student)

person.city = "ოზურგეთი"
console.log("After changing city:", person)
