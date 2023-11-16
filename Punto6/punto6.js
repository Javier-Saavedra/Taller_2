
function buscarYCambiarColor() {
    const texto = document.getElementById('texto').value;
    const textoBuscado = document.getElementById('buscar').value;

    if (texto && textoBuscado) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = cambiarColorTexto(texto, textoBuscado);
    } else {
        alert("Ingresa un texto y un texto a buscar.");
    }
}

function cambiarColorTexto(texto, textoBuscado) {
    const expresion = new RegExp(textoBuscado, 'gi');
    const textoModificado = texto.replace(expresion, match => `<span class="resaltado">${match}</span>`);
    return textoModificado;
}