let ltt = new XMLHttpRequest();

ltt.open("get", "./src/database/produtos.json", true);

ltt.send();

ltt.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let produtos = JSON.parse(this.responseText);

    let output = "";

    const destaque = produtos.filter((show) => show.maisvendido === true);

    let out = "";

    destaque.forEach((item) => {
      out += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card card-produto">
                    <img src="${item.image}" alt=".${item.image} class="card-img-top" height="300" >
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
  }
};
