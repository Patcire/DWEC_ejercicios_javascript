/*
Escribir un script que determine si una cadena de texto es un palíndromo,
 es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
 Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
*/

const cadena=(prompt("Introduzca la cadena deseada")).toLowerCase().trim()

let almacen_caracteres= []

//recorro la cadena y la almaceno en una lista
for (caracter in cadena){
    console.log()
    if (caracter!==" "){
        almacen_caracteres=[...almacen_caracteres, cadena[caracter]]
} 
}

//creo una con los caracteres a la inversa
//al no pasarle nada a slice me devuelve una copia de la lista sin modificar la original
const almacen_inverso=(almacen_caracteres.slice()).reverse() 
console.log(almacen_caracteres.toString())
console.log(almacen_inverso.toString())
if (almacen_caracteres.toString()===almacen_inverso.toString()){
    console.log("caca")
}
else{
    alert("Su cadena no es un palíndromo")
}