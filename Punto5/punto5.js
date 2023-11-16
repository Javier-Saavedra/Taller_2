
function verificar() {
    var numero = parseInt(document.getElementById("numero").value)

    if (isNaN(numero) || !(Number.isInteger(numero)) || numero <= 0) {
        document.getElementById("resultado").innerHTML = "Debe ingresar un número entero positivo."
    } else if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = numero + " es un número par."
    } else {
        document.getElementById("resultado").innerHTML = numero + " es un número impar."
    }
}   