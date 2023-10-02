/*
Escribir un script en el que el usuario introduzca un número entero 
y muestre por pantalla una cadena de texto que indique si el número es par o impar. 
*/

const numero=prompt("Introduzca un número entero")

if (numero%2===0){
    alert(`${numero} es un número par`)
}
else{
    alert(`${numero} es un número impar`)
}

