
function esDivisible() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)

    if (isNaN(a) || isNaN(b) || a % 1 !== 0 || b % 1 !== 0){
        document.getElementById("resultado").innerHTML = "Por favor ingrese dos números enteros positivos."

    }else if(b <= 0){
        document.getElementById("resultado").innerHTML = "El número b debe ser positivo."

    }else if(a % b === 0){
        document.getElementById("resultado").innerHTML = "El número " + a + " es divisible entre el número " + b

    }else{
        document.getElementById("resultado").innerHTML = "El número " + a + " no es divisible entre el número " + b
    }
}