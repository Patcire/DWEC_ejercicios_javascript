/*
Dada una matriz bidimensional de enteros, transformarla de la siguiente 
manera utilizando funciones: Aplánala sin utilizar el método Array.concat()
Ordénala ascendentemente sin utilizar los métodos Array.sort() y Array.flat().
Por ejemplo, si se recibe la matriz  [[5, 4, 6], [2, 9, 3], [8, 1, 7]], 
la salida debería ser [1, 2, 3, 4, 5, 6, 7, 8, 9]
Ten en cuenta que la longitud de las dimensiones de la matriz no tienen 
porqué coincidir, pudiendo tener 0 elementos en una dimensión y 4 elementos en otra.
*/

//const matriz=[[1,7,2], [4,9], [6]]
//console.log(typeof (matriz))
//console.log(Array.isArray(matriz));

const aplanar= (bidimensional) =>{
    let aplanada=[]
    for (i=0; i<bidimensional.length; i++){
        for (j=0; j<bidimensional[i].length;j++){
            aplanada=[...aplanada, bidimensional[i][j]]
        }
    }
    return aplanada
}


//let unidimensional= aplanar(matriz)

//Para ordenar voy a crear una función que implemente el algoritmo burbuja

const mecanismo_burbuja= (lista) =>{
    let almacen
    while (true){
        let contador=0
        for (let i=0; i<lista.length;i++){
            if (lista[i]>lista[i+1]){
                    almacen=lista[i+1]
                    lista[i+1]=lista[i]
                    lista[i]=almacen
                    contador++
            }
        }
       if (contador===0){
        break
       }
    }
    return lista
    }

const comprobar_array_bidimensional=(input)=>{

    try {
        const matriz=JSON.parse(input)
        if (Array.isArray(matriz)===false){
            return false
        }
        else if (matriz.every(fila=> Array.isArray(fila) && fila.every(elemento=>!isNaN(elemento)))){
            return true
        }
        else {
            return false
        }
    }

    catch{
        alert("Error, introduzca el formato pedido")
    }
}


//programa

let input_usuario=prompt("introduzca un array bidimensional de números\n")
if (comprobar_array_bidimensional(input_usuario)){
    let unidimensional= aplanar(JSON.parse(input_usuario))
    unidimensional=mecanismo_burbuja(unidimensional)
    alert(unidimensional)
}





