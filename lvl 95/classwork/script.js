// საკლასო დავალება:

// შეადგინეთ ფუნქცია სახელად generateBoolean. ამ ფუნქციაში დააბრუნეთ Math.random() > 0.5-ზე.

// თუ ფუნქციის დაბრუნებული მნიშვნელობა არის true, შეადგინეთ პარაგრაფი, რომელშიც ეწერება თქვენი სახელი. ხოლო სხვა შემთხვევაში, შეადგინეთ პარაგრაფი, რომელშიც ეწერება თქვენი გვარი.

// function generateBoolean() {
//     return Math.random() > 0.5;
// }

// const isTrue = generateBoolean();
// let paragraph;

// if (isTrue) {
//     paragraph = <p>Nikoloz</p>;
// } else {
//     paragraph = <p>Kobakhidze</p>;
// }

// საკლასო დავალება:

// შექმენით myP კონსტანტა და მასში ჩააშენეთ ternary operator. თუ generateBoolean ფუნქციის დაბრუნებული მნიშვნელობა არის true, მაშინ ამ პარაგრაფის ტექსტი იყოს "hello", ხოლო სხვა შემთხვევაში "goodbye".

// შექმენით myDiv კონსტანტა და მასში შეინახეთ დივ ბლოკი. თუ generateBoolean ფუნქციის დაბრუნებული მნიშვნელობა არის true, მხოლოდ მაგ დროს დაემატოს div-ში პარაგრაფი, ნებისმიერი ტექსტით.

function generateBoolean() {
    return Math.random() > 0.5;
}

// const myP = generateBoolean();
// let paragraph

// myP = generateBoolean() ? "hello" : "goodbye"

const myDiv = (
    <div>
        {generateBoolean() && <p>Hello world</p>}
    </div>
)