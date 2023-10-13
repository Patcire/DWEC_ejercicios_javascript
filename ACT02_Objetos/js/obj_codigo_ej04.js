/*
Diseña un sitio web que muestre la hora actual actualizada por segundos. La hora debe 
tener el formato hh:mm:ss am/pm de forma que si la hora, los minutos o los segundos 
tienen un solo dígito se debe añadir un 0 para completar el formato.
Las horas se presentarán en formato de 12 horas, añadiendo am o pm dependiendo si 
la hora es anterior o posterior a las 12 del mediodía.
Ej: 09:10:11 am
*/

let horas
let minutos
let segundos
let mitad_dia

const almacenar_datos=()=>{

    //con moment almacenamos la hora actual con el formato dado

    //let horario= moment()

    // sacamos los distintos datos

     horas= moment().format("hh")
     minutos= moment().format("mm")
     segundos= moment().format("ss")
     mitad_dia=moment().format("a") //este valor indica si es PM o AM

}

const envio_datos=()=>{

    // mediante document puedo enviar los datos al html para que se muestre en la web

    document.open()
    document.write( `<h1>${horas} : ${minutos} : ${segundos} ${mitad_dia}</h1>`)
    document.close()

}

// creo una función que llame a las dos anteriores
const gestion=()=>{
    almacenar_datos()
    envio_datos()
}

//ejecuto gestion
gestion()

//y hago que se vuelva a ejecutar 1000ms=1sg
setInterval(gestion, 1000)
