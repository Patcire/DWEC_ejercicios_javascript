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


const almacenar_puntos = () =>{

    const tabla = document.getElementById("furbo")
    const almacen_puntuaciones=[]
    console.log(tabla.rows.length)

    for (let i = 0; i < tabla.rows.length; i++) {
        almacen_puntuaciones.push(tabla.rows[i].cells[2].textContent)
        console.log(almacen_puntuaciones)
    }
    return almacen_puntuaciones
}

const insertar_fila = () =>{

    let tabla=document.getElementById("furbo")
    let puntos=document.getElementById("puntos_usuario")

    
    let fila_nueva=tabla.insertRow(-1)

    //creamos las celdas

    let celda1=fila_nueva.insertCell(0)
    let celda2=fila_nueva.insertCell(1)
    let celda3=fila_nueva.insertCell(2)

    celda1.innerHTML=4
    celda2.innerHTML="Pepis"
    celda3.innerHTML=12

}



insertar_fila()
let puntos_tabla=almacenar_puntos()
console.log(puntos_tabla)





/*
//solo insertar - funciona
const insertar_fila = () =>{

    
    let tabla=document.getElementById("furbo")
   
    let fila_nueva=tabla.insertRow(-1)

    //creamos las celdas

    let c1=fila_nueva.insertCell(0)
    let c2=fila_nueva.insertCell(1)
    let c3=fila_nueva.insertCell(2)

    c1.innerHTML=4
    c2.innerHTML="Pepis"
    c3.innerHTML=12

}
insertar_fila()
*/