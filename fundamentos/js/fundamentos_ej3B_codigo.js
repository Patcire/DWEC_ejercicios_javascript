
let user_name= prompt("¿Cuál es tu nombre?\n")
let hora= moment().hours()
let tipo_saludo

if (hora>=6 && hora<12){
    tipo_saludo="buenos días."
}
else if (hora>=12 && hora<20){
    tipo_saludo="buenas tardes."
}
else{
    tipo_saludo="buenas noches."
}

let message= `Hola, ${user_name}, ${tipo_saludo}`
alert(message)