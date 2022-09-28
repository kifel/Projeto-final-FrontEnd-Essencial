const idItem = localStorage.getItem("id");

console.log(idItem);

fetch("../database/produtos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (produtos) {
    produtos.forEach((item) => {
      if (item.id === idItem) {
        const tittle = document.querySelector(".tittle-item");
        document.querySelector(".image-item").src = `../..${item.image}`;
        const price = document.querySelector(".price");
        const desc = document.querySelector(".desc");
        const marca = document.querySelector(".marca");
        const modelo = document.querySelector(".modelo");
        tittle.innerText = item.title;
        price.innerText = `R$, ${item.price}`;
        desc.innerText = item.description;
        marca.innerText = item.marca;
        modelo.innerText = item.modelo;
      }
    });
  });
