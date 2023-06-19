
const visor = document.querySelector(".pantalla");
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".btn-operador");
const igual = document.querySelectorAll(".igual");
const borrar = document.querySelectorAll(".borrar");

numeros.forEach(function(numero) {
    numero.addEventListener("click", function() {
        visor.innerHTML += numero.outerText;
    })

})


/*
let signo = '+'
let operacion = ''

switch (signo) {
    case "+":
        operacion = "suma";
        break;
    case "-":
        operacion = "resta";
        break;
    case "/":
        operacion = "division";
        break;
    case "*":
        operacion = "multiplicacion";
        break;
    default:
        operacion = "OPERACION NO VALIDA"
    }


const operaciones = {
    "+":"suma",
    "-":"resta",
    "/":"division",
    "*":"multiplicacion"
};

console.log(operaciones[signo])

*/