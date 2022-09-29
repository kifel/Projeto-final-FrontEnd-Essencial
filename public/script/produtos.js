let http = new XMLHttpRequest();

http.open("get", "./src/database/produtos.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let produtos = JSON.parse(this.responseText);

    let output = "";

    produtos.forEach((item) => {
      output += `
            <div class="col-12 col-md-6 col-lg-3">
              <a href="./src/views/detalhes.html" class="btn-item" onclick="show(${item.id})" >
                  <div class="card card-produto my-2">
                      <div class="card-body m-auto">
                          <img src=".${item.image}" alt=".${item.image} class="card-img-top" height="300" >
                          <h5 class="card-title mt-5">${item.title}</h5>
                      </div>
                      <div class="card-footer text-center inverted">
                          <a href="./src/views/detalhes.html" class="btn bg-dark text-white botao-item ${item.id}" onclick="show(${item.id})" >Detalhes</a>
                      </div>
                  </div>
              </a>    
            </div>
        `;
    });

    document.querySelector(".produtos-content").innerHTML = output;
  }
};
