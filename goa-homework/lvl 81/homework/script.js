const arr1 = [5, -2, 10, -7, 3];
console.log(arr1.findIndex(num => num < 0));

const users1 = [
    { name: "Nika", age: 15 },
    { name: "Ana", age: 17 },
    { name: "Gio", age: 18 },
    { name: "Luka", age: 20 }
];
console.log(users1.findIndex(user => user.age >= 18));

const arr2 = [5, -2, 10, -7, 3];
console.log(arr2.findLastIndex(num => num < 0));

const users2 = [
    { name: "Nika", age: 15 },
    { name: "Ana", age: 17 },
    { name: "Gio", age: 18 },
    { name: "Luka", age: 20 }
];
console.log(users2.findLastIndex(user => user.age >= 18));

const arr3 = [3, 7, 10, 5, 12];
console.log(arr3.find(num => num % 2 === 0));

const products1 = [
    { id: 1, price: 50 },
    { id: 2, price: 120 },
    { id: 3, price: 90 }
];
console.log(products1.find(p => p.price > 100));

const arr4 = [3, 7, 10, 5, 12];
console.log(arr4.findLast(num => num % 2 === 0));

const products2 = [
    { id: 1, price: 50 },
    { id: 2, price: 120 },
    { id: 3, price: 90 },
    { id: 4, price: 150 }
];
console.log(products2.findLast(p => p.price > 100));

const colors = ["red", "green", "blue", "yellow"];
console.log(colors.indexOf("blue"));

const nums1 = [1, 5, 3, 5, 7];
console.log(nums1.indexOf(5));

const fruits = ["apple", "banana", "orange", "apple", "grape"];
console.log(fruits.lastIndexOf("apple"));

const nums2 = [10, 4, 10, 7, 10];
console.log(nums2.lastIndexOf(10));
