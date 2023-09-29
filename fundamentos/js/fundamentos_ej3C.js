
function mensaje_saludo(){

    let tipo_saludo

    let user_name= document.getElementById("nombre_usuario").value
    let hora= document.getElementById("hora_usuario").value

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
}


