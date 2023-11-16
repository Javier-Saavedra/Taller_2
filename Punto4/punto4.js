
function calcularPromedio() {
    
    const nombre = document.getElementById("nombre").value
    const materia = document.getElementById("materia").value
    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    const nota3 = parseFloat(document.getElementById("nota3").value)
  
    const promedio = (nota1 + nota2 + nota3) / 3
  
    let mensaje = ""
    let color = ""
    if (promedio >= 3) {
        mensaje = "Felicitaciones " + nombre + ", su nota es " + promedio.toFixed(2) + ", pasaste la materia " + materia
        color = "green"
    }else{
        mensaje = "Lo siento " + nombre + ", su nota es " + promedio.toFixed(2) + ", no pasaste la materia " + materia
        color = "red"
    }
  
    const resultado = document.getElementById("resultado")
    resultado.textContent = mensaje
    resultado.style.color = color
  }