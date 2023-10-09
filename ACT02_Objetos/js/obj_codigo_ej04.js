/*
Diseña un sitio web que muestre la hora actual actualizada por segundos. La hora debe 
tener el formato hh:mm:ss am/pm de forma que si la hora, los minutos o los segundos 
tienen un solo dígito se debe añadir un 0 para completar el formato.
Las horas se presentarán en formato de 12 horas, añadiendo am o pm dependiendo si 
la hora es anterior o posterior a las 12 del mediodía.
Ej: 09:10:11 am
*/

//con moment cogemos la hora actual
let horario= moment().format("YYYY-MM-DD, hh:mm:ss A")


// sacamos los distintos datos
let horas= moment().hour()
let minutos= moment().minute()
let segundos= moment().second()
let mitad_dia=moment().format("A")


// mediante document puedo enviar los datos al html para que se muestre en la web

if (horas<10 || minutos<10 || segundos<10){
    //si tienen un solo dígito los paso a cadena y con padStart les concatenamos un 0 al inicio de la cadena
    horas=moment().hour().toString().padStart(2, "0")
    minutos= moment().minute().toString().padStart(2, "0")
    segundos= moment().second().toString().padStart(2, "0")
  
}

document.open()
document.write( `<h3>${horas} : ${minutos} : ${segundos} ${mitad_dia}</h3>`)
document.close()

//con el siguiente comando hacemos que se refresque en todo momento


// settime me sirve para refrescar cada x tiempo (en este caso 1 vez por segundo=1000ms)
//location.reload() sirve para recargar la página
setTimeout(() => {
    location.reload();
}, 800); //pongo 800 porque si no algunos le cuesta procesarlos y se lo salta