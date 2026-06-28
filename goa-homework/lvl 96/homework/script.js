function App() {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Kiwi",
    "Grapes",
    "Peach",
    "Pear"
  ];

  return (
    <div>
      <h1>Fruit List</h1>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <div>
        <h2>My Favorite Things</h2>
        <p>Football</p>
        <p>Basketball</p>
        <p>Music</p>
        <p>Movies</p>
        <p>Books</p>
        <p>Travel</p>
        <p>Gaming</p>
        <p>Coding</p>
        <p>Pizza</p>
        <p>Burger</p>
        <p>Ice Cream</p>
        <p>Coffee</p>
        <p>Tea</p>
        <p>Nature</p>
        <p>Mountains</p>
        <p>Beach</p>
        <p>Dogs</p>
        <p>Cats</p>
        <p>Cars</p>
        <p>Technology</p>
      </div>
    </div>
  );
}

export default App;