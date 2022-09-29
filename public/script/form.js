form=document.getElementById("form")


document.getElementById("botao").addEventListener("click",(e)=>{
    let nomeform = document.querySelector("#idnome").value;
   let emailform = document.querySelector("#idemail").value;
  let mensagemform = document.querySelector("#idmensagem").value;
  let cont=0
  if (emailform.indexOf("@") > 0 && emailform.indexOf(".") > 0) {
   cont++;
     } 
     if (nomeform.length>0) {
        cont++; 
    }
   if (mensagemform.length >5){
    cont++
   }
  if(cont!= 3){
    e.preventDefault
    alert ("Email deve conter '@' e '.' e a mensagem no minimo 5 caracter" )
  }
  else{
    localStorage.nomeform=nomeform
    localStorage.emailform= emailform
    localStorage.mensagemform= mensagemform
  document.getElementById("idnome").value=""
  document.getElementById("idemail").value="" 
  document.getElementById("idmensagem").value="" 
}

});