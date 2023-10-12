/*
Diseña una página web que:
Compruebe si existen las cookies de los datos de una persona.
Si no existen, que pida los datos personales:
Nombre
Dirección
Edad
Profesión
Si existen los datos que los muestre y posteriormente borre las cookies.
Realiza las mismas operaciones anteriores con el objeto localStorage, en este caso los datos permanecerán almacenados
mientras dure la sesión, cuando se vuelva a entrar, los datos se habrán borrado.
En la misma sesión mostrará los datos cada vez que se pidan.
 */



//Creamos distintas funciones para el funcionamiento del programa


const comprobar_datos_storage= () => {
    const longitud_almacen=localStorage.length
    console.log(longitud_almacen);
    if (longitud_almacen!== 0){
            console.log("tiene info")
        return true
    }
    else {
        console.log("vacío")
        return false
    }

}

const pedir_datos= () =>{


    const nombre=prompt("Indique su nombre:")
    if (comprobar_input_cadena(nombre)===false){
        return //return que no devuelve nada que nos sirve para salir de la función
    }

    const direccion= prompt("Su dirección:")
    if (comprobar_input_cadena(direccion)===false){
        return
    }

    const edad= prompt("Su edad:")
    if (comprobar_edad(edad)===false){
        return
    }

    const profesion= prompt("Y su profesión:")
    if (comprobar_input_cadena(profesion)===false){
        return
    }


    //almacenamos los datos en el local storage
    localStorage.nombre=nombre
    localStorage.direccion=direccion
    localStorage.edad=edad
    localStorage.profesion=profesion
    return true
}

const eliminar_cookies= ()=>{
    if(window.closed){
        localStorage.clear()
    }
}


const imprimir_datos=() =>{
    alert("Información de usuario:\n"+
        `Nombre: ${localStorage.nombre}\n`+
        `Dirección: ${localStorage.direccion}\n`+
        `Edad: ${localStorage.edad}\n`+
        `Profesión: ${localStorage.profesion}\n`
    )
}


const comprobar_input_cadena=(input_usuario)=>{
    if (input_usuario===null){
        alert("Error, valor nulo")
        return false
    }
    else if (input_usuario.trim().length===0){
        alert("Error, no se permiten datos sin rellenar o introducir solo espacios en blanco")
        return false
    }
    else {
        return true
    }
}

const comprobar_edad=(input_edad)=>{
    const numeros_permitidos=/^[0-9]+$/
    if (input_edad.match(numeros_permitidos)){

        return true
    }
    else if (input_edad<=0){
        alert("Error, no es un nº válido")
        return false
    }
    else {
        alert("Error, no es un nº válido")
        return false
    }
}


// A partir de aquí, el programa y el evento al pulsar en el botón

//inicio la web limpiando el localstorage

localStorage.clear()

const existen_datos=comprobar_datos_storage()
console.log(existen_datos);
if (existen_datos){
    console.log("datos_existentes")
    imprimir_datos()
}
else {

    if (pedir_datos()){
        imprimir_datos()
    }

}

eliminar_cookies()

document.getElementById("pulsa").addEventListener("click", ()=>{
    if (comprobar_datos_storage()){
        imprimir_datos()
    }
    else {
        // si pulsa el botón y no tiene datos almacenados
        // se lo decimos y recargamos la página para pedíselos otra vez
        alert("No se puede mostrar los datos ya que no hay ninguno almacenados")
        location.reload()
    }


})
