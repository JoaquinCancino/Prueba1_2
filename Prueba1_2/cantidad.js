var input1 = document.getElementById("Cantidad1");
var input2= document.getElementById("Cantidad2");
var input3 = document.getElementById("Cantidad3");
var input4 = document.getElementById("Cantidad4");
var input5 = document.getElementById("Cantidad5");
var cantidadproductos = document.getElementById("cantidad_productos");

input1.addEventListener("input", cantidad);
input2.addEventListener("input", cantidad);
input3.addEventListener("input", cantidad);
input4.addEventListener("input", cantidad);
input5.addEventListener("input", cantidad);

function cantidad() {
    var num1 =parseInt(input1.value);
    var num2 =parseInt(input2.value);
    var num3 =parseInt(input3.value);
    var num4 =parseInt(input4.value);
    var num5 =parseInt(input5.value);
    
    var suma = num1 + num2 + num3 + num4 + num5;
    cantidadproductos.value = suma;
}
