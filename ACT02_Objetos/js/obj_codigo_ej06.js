/*
Diseña una página web parecida a la que se muestra a continuación (puedes darle tu toque personal):
***una tabla 3x3***
Diseña también un formulario desde el que puedas introducir los datos del Equipo y los Puntos que
 le corresponden, con un botón de “Enviar”. Cuando sea pulsado, se añadirá una nueva fila en la 
 posición que le corresponda en función de los puntos que tenga en ese momento. Por ejemplo, si 
 introducimos los valores Equipo=Betis y Puntos=18, la tabla deberá transformarse en:	

 ***Coloca al equipo Betis en la tercera posición *** (orden por puntos descendente)

Además, tendrás que controlar que, si un equipo que se introduzca ya está en la tabla, 
tan solo habrá que actualizar los puntos, recolocando a éste equipo en la posición que le corresponda.
*/


// obtengo la tabla del html

let tabla=document.getElementById("furbo")

// creo las funciones necesarias para mi programa

const almacenar_puntos_nombre = () =>{

    // esta función se usará en la función principal isnsertar_fila

    const tabla = document.getElementById("furbo")
    const almacen_puntuaciones=[]
    console.log(tabla.rows.length)

    let equipo

    for (let i = 0; i < tabla.rows.length; i++) {
        almacen_puntuaciones.push(
            equipo={
                posicion:i+1,
                nombre:(tabla.rows[i].cells[1].textContent),
                puntuacion:(parseInt(tabla.rows[i].cells[2].textContent))
        })

    }
    console.log(almacen_puntuaciones)
    return almacen_puntuaciones
}

const comprobar_nombre_existe=(informacion_equipos)=>{


        let nombre_equipo_nuevo=document.getElementById("equipo_usuario").value
        console.log(nombre_equipo_nuevo)
        const nombre_incluido=informacion_equipos.indexOf(nombre_equipo_nuevo)

        if (nombre_incluido!==-1){
                //como el nombre ya existe
                //actualizo el resto de parámetros de esa fila

                (tabla.rows[i].cells[0]).innerHTML=document.getElementById("posicion_usuario").value
            (tabla.rows[i].cells[2]).innerHTML=document.getElementById("puntos_usuario_usuario").value
        }
        else {
            return false
        }


}


const actualizar_posiciones=()=>{

    // esta función se usará en la función principal isnsertar_fila
    // Y además de actualizar, mme permite controlar que
    //una posición que no se corresponda con los puntos, se corrija

    for (let i = 1; i < tabla.rows.length; i++) { //empiezo en 1 porque la posicion 0 es el th
        (tabla.rows[i].cells[0]).innerHTML=i
        console.log("eee")
    }
}

const insertar_fila = () =>{

    let puntos_nuevos=document.getElementById("puntos_usuario").value
    console.log(puntos_nuevos)
    let indice_fila_nueva

    //usamos las funciones creadas con anterioridad

    const equipos=almacenar_puntos_nombre()
    for (elemento in equipos){
        if (puntos_nuevos>equipos[elemento].puntuacion){
            indice_fila_nueva=equipos[elemento].posicion-1
            console.log("funciona")
            console.log(equipos[elemento].puntuacion);
            break
        }

    }

    // comprobamos si ese nombre ya existe y por tanto si se crea nueva fila o no

    if (comprobar_nombre_existe(equipos)===false){

        //creamos las filas y sus celdas

        let fila_nueva=tabla.insertRow(indice_fila_nueva)
        let celda1_posicion=fila_nueva.insertCell(0)
        let celda2_equipo=fila_nueva.insertCell(1)
        let celda3_puntos=fila_nueva.insertCell(2)


        //y le pasamos los valores correspondientes

        celda1_posicion.innerHTML=document.getElementById("posicion_usuario").value
        celda2_equipo.innerHTML=document.getElementById("equipo_usuario").value
        celda3_puntos.innerHTML=puntos_nuevos

        // por último actualizo las posiciones de todos los elementos

        actualizar_posiciones()
    }


}

// el programa:

document.getElementById("envio_info").addEventListener("click",()=>{

    insertar_fila()
})






