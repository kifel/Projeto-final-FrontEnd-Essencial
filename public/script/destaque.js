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
                    <div class="card-body text-center my-2">
                        <img src=".${item.image}" alt=".${item.image} class="card-img-top img-fluid" >
                        <h5 class="card-title">${item.title}</h5> 
                    </div>
                    <div class="card-footer text-center bg-dark inverted">
                      <p class="card-text text-white">R$ ${item.price}</p>
                    </div>  
                </div>
            </div>
        `;
    });

    document.querySelector(".destaques").innerHTML = out;
  }
};
