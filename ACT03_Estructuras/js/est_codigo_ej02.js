/*
Escribir un script que simule el lanzamiento de 2 dados:
Utiliza la función Math.random() para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados
Luego, suma el valor de los 2 dados y almacena su resultado
Ahora, haz 36.000 lanzamientos
Por último, muestra por pantalla el número de veces que ha salido cada resultado
*/

// creo una función para tirar los daos

const tirar_dado= () => { return (Math.floor(Math.random() * (6-1+1)+1))}

const dado1=tirar_dado()
const dado2=tirar_dado()

const suma_dados= dado1+dado2

alert(`Dado 1= ${dado1}\n
       Dado 2= ${dado2} \n
       La suma de ambos= ${suma_dados}`)

//acumuladores de resultado
let veces_dado1=0
let veces_dado2=0
let veces_suma=0

for (let i=0; i<36000; i++){
    let nuevo_lanzamiento=tirar_dado()
    if (nuevo_lanzamiento===dado1){
        veces_dado1++
    }
    if (nuevo_lanzamiento===dado2){
        veces_dado2++
    }
    if (suma_dados>6){
        continue
    }
    else if(nuevo_lanzamiento===suma_dados){
        veces_suma++
    }
}

alert (`Dado 1 ha salido: ${veces_dado1} veces \n
        Ddo 2 ha salido: ${veces_dado2} veces\n
        La suma de ambos ha salido: ${veces_suma} veces`)



