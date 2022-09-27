let http = new XMLHttpRequest();

http.open("get", "../database/produtos.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let produtos = JSON.parse(this.responseText);

    let output = "";

    for (let item of produtos) {
      output += `
            <div class="col-12 col-md-6 col-lg-3">
                <div class="card">
                    <img src="${item.image}" alt="${item.image} class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <button href="#" class="btn btn-primary" value="${item.id}" >Detalhes</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector(".produtos").innerHTML = output;
  }
};
