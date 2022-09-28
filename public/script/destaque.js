fetch("../../src/database/produtos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (produtos) {
    console.log(produtos[0].maisvendido)

    const destaque = produtos.filter( show => show.maisvendido === true)

    let out = "";

    destaque.forEach((item) => {
      out += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <img src="${item.image}" alt="${item.image} class="card-img-top" height="300" >
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">R$ ${item.price}</p>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector(".destaques").innerHTML = out;
  });
