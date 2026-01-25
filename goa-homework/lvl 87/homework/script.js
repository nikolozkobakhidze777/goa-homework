class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Nika", 25);
person1.greet();

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  printBrand() {
    console.log(this.brand);
  }
}

const car1 = new Car("Toyota", 2018);
const car2 = new Car("BMW", 2022);
car1.printBrand();
car2.printBrand();

class Animal {
  constructor(type) {
    this.type = type;
  }
  printType() {
    console.log(this.type);
  }
}

const animal1 = new Animal("Cat");
const animal2 = new Animal("Dog");
animal1.printType();
animal2.printType();

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  printGrade() {
    console.log(`${this.name} has grade ${this.grade}`);
  }
}

const student1 = new Student("Ana", 90);
const student2 = new Student("Giorgi", 85);
const student3 = new Student("Luka", 78);
student1.printGrade();
student2.printGrade();
student3.printGrade();

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  printTitle() {
    console.log(this.title);
  }
}

const book1 = new Book("კაპიტან გრანტის შვილები", "ნაცარქექია");
const book2 = new Book("გიორგი ლეონიძძეს: ნატვრის ხე", "ვეფხვისტყაოსანი");
book1.printTitle();
book2.printTitle();