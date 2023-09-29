var valores=[true, 5, false, "hola", "adios", 2]

var cadenas=[]
var numeros=[]
var booleanos=[]

valores.forEach(function(elemento){
    switch(typeof(elemento)){
    case Boolean:
            booleanos=[...booleanos, elemento]
        break
    case String:
            cadenas=[...cadenas, elemento]
    case Number:
            numeros=[...numeros, elemento]
    }
})



//cadenas=valores.splice(3, 2)

console.log(numeros)