var valores=[true, 5, false, "hola", "adios", 2]

var cadenas=[]
var numeros=[]
var booleanos=[]


valores.forEach(function(elemento){
        switch(typeof(elemento)){
        case "boolean":
                booleanos=[...booleanos, elemento]
            break
        case "string":
                cadenas=[...cadenas, elemento]
                break
        case "number":
                numeros=[...numeros, elemento]
                break
        }
    })



//Determinar cuál de los dos elementos​ de texto​ es mayor.

if ((cadenas[0]).length > (cadenas[1]).length){
        console.log(cadenas[0], "es mayor que ", cadenas[1])
}
else if ((cadenas[0]).length === (cadenas[1]).length) {
        console.log("las cadenas son iguales")
}
else{
        console.log(cadenas[1], "es mayor que ", cadenas[0])
}

//Utilizando exclusivamente los dos valores ​booleanos ​del array, determinar 
//los operadores necesarios para obtener un resultado true y otro resultado false.

if ((booleanos[0])=="true" && (booleanos[1])=="true"){
        const resultado_verdadero=booleanos[0] && booleanos[1]
        console.log(resultado_verdadero)
}

else {
        const resultado_falso=booleanos[0] && booleanos[1]
        console.log(resultado_falso)
}

//Determinar el resultado de las ​cinco operaciones matemáticas 
//realizadas con los ​dos elementos numéricos​.

console.log(` ${numeros[0]} + ${numeros[1]} = ${numeros[0]+numeros[1]}`)
console.log(` ${numeros[1]} + ${numeros[0]} = ${numeros[1]+numeros[0]}`)

if (numeros[1]<numeros[0]){
        console.log(` ${numeros[0]} - ${numeros[1]} = ${numeros[0]-numeros[1]}`)
        console.log(` ${numeros[0]} / ${numeros[1]} = ${numeros[0]/numeros[1]}`)
}
else{
        console.log(` ${numeros[1]} - ${numeros[0]} = ${numeros[1]-numeros[0]}`)
        console.log(` ${numeros[1]} / ${numeros[0]} = ${numeros[1]/numeros[0]}`)
}

console.log(` ${numeros[0]} * ${numeros[1]} = ${numeros[0]*numeros[1]}`)

