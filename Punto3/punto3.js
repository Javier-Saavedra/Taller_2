
function nombreEdad() {

    var nombre = document.getElementById("nombre").value
    var edad = document.getElementById("edad").value
  
    if (edad <= 0 || isNaN(edad)) {
      document.getElementById("output").innerHTML = "No es una edad válida."

    } else if (edad >= 18) {
      document.getElementById("output").innerHTML = "Hola " + nombre + ", eres mayor de edad."

    } else {
      document.getElementById("output").innerHTML = "Hola " + nombre + ", no eres mayor de edad."
    }
}