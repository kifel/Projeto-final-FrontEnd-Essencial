carregaDocumento("../../src/views/header.html", "#mainheader");

function carregaDocumento(arquivo, target) {
  const el = document.querySelector(target);

  //Se o elemento não existir então não requisita
  if (!el) return;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", arquivo, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
      el.innerHTML = xhr.responseText;
    }
  };

  xhr.send(null);
}
