let http = new XMLHttpRequest();

http.open("get", "../database/produtos.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let produtos = JSON.parse(this.responseText);

    let output = "";

    produtos.forEach((item) => {
      output += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <img src="${item.image}" alt="${item.image} class="card-img-top" height="300" >
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="detalhes.html" class="btn btn-primary ${item.id}" onclick="show(${item.id})" >Detalhes</a>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector(".produtos").innerHTML = output;
  }
};
