const idItem = localStorage.getItem("id");

console.log(idItem);

fetch("../database/produtos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (produtos) {
    let placeholder = document.querySelector(".produtos");

    let out = "";

    for (let item of produtos) {
      if (item.id === idItem) {
        out += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <img src="${item.image}" alt="${item.image} class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">R$ ${item.description}</p>
                    </div>
                </div>
            </div>
        `;
      }
    }
    document.querySelector(".produtos").innerHTML = out;
  });
