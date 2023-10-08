/*
Implementar una función recursiva que reciba un parámetro n y repita n veces 
el string “bauuuba”. Por ejemplo, si pasamos el parámetro 5, devolverá 
“bauuuba bauuuba bauuuba bauuuba bauuuba”
NOTA: no puedes utilizar el método String.repeat() 
*/


const validar_numero= (num)=>{

    if(Number.isNaN(num)) { 
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


const numero= parseInt(prompt("Introduzca un número"))
const respuesta=validar_numero(numero)

//creamos la función
const iterar= (num) =>{
    if (num===1){
        return "bauuuba"
    }
    else{
      
        return "bauuuba" + "  " +iterar(num-1)
    }

} 


if (respuesta===true){
    console.log("eppaa")
    let respuesta= iterar(numero)
    alert(respuesta)
}


