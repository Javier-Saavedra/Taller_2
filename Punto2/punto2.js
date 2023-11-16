
function tipoDato() {
    var valor = document.getElementById("valor").value
  
    if (isNaN(valor)) {
      document.getElementById("output").innerHTML = "texto"

    }else{
      document.getElementById("output").innerHTML = "número"
    }
  }