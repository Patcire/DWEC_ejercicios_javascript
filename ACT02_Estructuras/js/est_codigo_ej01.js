/*
Implementar una función recursiva que reciba un parámetro n y repita n veces 
el string “bauuuba”. Por ejemplo, si pasamos el parámetro 5, devolverá 
“bauuuba bauuuba bauuuba bauuuba bauuuba”
NOTA: no puedes utilizar el método String.repeat() 
*/


const validar_numero= (num)=>{

    if(isNaN(num)) { 
        alert('Error, introduzca un número')
        return false
      } 
    else if (parseInt(num)<=0){
        alert('Error, introduzca un número positivo')
        return false
    }
      else {
         return true
      }
}


let numero= prompt("Introduzca un número")
let respuesta=validar_numero(numero)

const iterar= (num) =>{
    return "bauuuba"*num*iterar(n-1)
} 

if (respuesta===true){
    iterar(numero)
}






/*
const iterar= (num) =>{
        return "bauuuba"*num*iterar(n-1)
} 

const numero= prompt("Introduzca un número")

if (validar_numero===true){
    alert(iterar(numero))
}
*/
