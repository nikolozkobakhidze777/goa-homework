// React

// React არის JavaScript ბიბლიოთეკა, რომელიც გამოიყენება თანამედროვე და სწრაფი მომხმარებლის ინტერფეისების (UI) შესაქმნელად. React-ში ვებსაიტი იყოფა პატარა კომპონენტებად, რაც კოდის მართვას ამარტივებს.

// JSX

// JSX (JavaScript XML) არის React-ის სინტაქსი, რომელიც HTML-ს ჰგავს, მაგრამ JavaScript-ის კოდში იწერება. JSX-ს React ჩვეულებრივ JavaScript-ად გარდაქმნის

// Virtual DOM არის რეალური DOM-ის მსუბუქი ასლი. როდესაც მონაცემები იცვლება, React ჯერ Virtual DOM-ს აახლებს, შემდეგ ადარებს ძველ ვერსიას და მხოლოდ საჭირო ცვლილებებს გადასცემს რეალურ DOM-ს. ამის გამო React უფრო სწრაფად მუშაობს.

const name = "Nika";
const image = "https://picsum.photos/200";

const element = (
  <div className="card">
    <h1>Hello, {name}</h1>
    <img src={image} alt="Random" />
    <br />
    <input type="text" placeholder={"Enter your name"} />
  </div>
);