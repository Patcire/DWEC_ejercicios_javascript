


window.onload = function(){
   document.getElementById('envio').onclick = function(e){
    let formulario= document.getElementById("info_usuario")
    let user_name= formulario.getElementById("nombre_usuario")
    let hora= formulario.getElementById("hora_usuario")
    let message= `Hola, ${user_name}, ${tipo_saludo}`
       alert(message)
       return false;
   }
}


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

