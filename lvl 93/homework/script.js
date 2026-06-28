// API Link – API Link არის მისამართი (URL), რომლის საშუალებითაც პროგრამა სერვერიდან იღებს ან აგზავნის მონაცემებს. მისი დანიშნულებაა სხვადასხვა აპლიკაციას შორის ინფორმაციის გაცვლა.

// import – import გამოიყენება სხვა JavaScript ფაილიდან ცვლადების, ფუნქციების ან კლასების შემოსატანად, რათა მათი გამოყენება შევძლოთ მიმდინარე ფაილში.

// export – export გამოიყენება იმისთვის, რომ ფუნქცია, ცვლადი ან კლასი ხელმისაწვდომი გახდეს სხვა ფაილებში import-ის საშუალებით.

const products = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>$${item.price}</p>
        <p>${item.category}</p>
      `;

      card.classList.add("card");
      products.appendChild(card);
    });
  });