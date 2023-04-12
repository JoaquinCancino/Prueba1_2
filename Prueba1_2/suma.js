
var valor1 = document.getElementById("Cantidad1");
var valor2= document.getElementById("Cantidad2");
var valor3 = document.getElementById("Cantidad3");
var valor4 = document.getElementById("Cantidad4");
var valor5 = document.getElementById("Cantidad5");
var preciototal = document.getElementById("preciototal");

valor1.addEventListener("input", suma);
valor2.addEventListener("input", suma);
valor3.addEventListener("input", suma);
valor4.addEventListener("input", suma);
valor5.addEventListener("input", suma);

function suma() {
    var num1 = 20500 * parseInt(valor1.value);
    var num2 = 25000 * parseInt(valor2.value);
    var num3 = 25000 * parseInt(valor3.value);
    var num4 = 25000 * parseInt(valor4.value);
    var num5 = 30000 * parseInt(valor5.value);
    
    var suma = num1 + num2 + num3 + num4 + num5;
    preciototal.value = suma;
}

