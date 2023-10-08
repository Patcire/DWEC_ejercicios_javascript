/*
Escribe un script que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga:
Nombre
Apellido 1 
Apellido 2
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, 
el primer apellido y la inicial del segundo apellido, Por ejemplo, para Laura 
Folgado Galache sería lfolgadog.
Otra propuesta de nombre de usuario, compuesto por las tres primeras letras 
del nombre (con la primera en mayúscula) y de los dos apellidos. Por ejemplo,
 para el nombre anterior sería Laufolgal
*/

// creamos una función para validar cadena
// me puede servir para más ejercicios
const validar_cadena = (cadena_usuario) => {
    
    // Comprobamos que no nos introduzcan cadenas vacías o espacios
    if (cadena_usuario.trim().length===0){
        alert('Error, no introduzca espacios o cadenas vacías')
        return false
    }
    
    // que no sea nulo
    else if(cadena_usuario===null){
        alert('Error, no introduzca un valor nulo')
        return false
    }

    //que no sean dígitos
    else if(Number.isNaN(parseFloat(cadena_usuario))===false) { 
        alert('Error, no introduzca números')
        return false
      } 
    else{
        return true
    }

}

// ahora creo una para validar nombre y apellidos
// la cual utliza la función anterior

const validar_nombre_apellido= (nombre_ape) => {

    if (validar_cadena(nombre_ape)===false){
        return false
    }
    else{
        const separado=nombre_ape.split(" ")

        // comprobamos que tengamos 3 palabras
        if (separado.length !== 3){
            alert ("Error, necesita introducir su nombre y los dos apellidos separados por un espacio")
            return false
        }
        else{
            return true
        }
    }
}



const nombre_usuario=prompt("intro cadena")

const valido=validar_nombre_apellido(nombre_usuario)



if (valido===true){

    // para la longitud
    const lista=nombre_usuario.split(" ")
    const longitud=lista[0].length + lista[1].length + lista[2].length

    


    // mostramos por pantalla la info requerida
    alert(` La longitud de su nombre y apellidos = ${longitud} \n
            En mayúsculas: ${nombre_usuario.toUpperCase()} \n
            En minúsculas: ${nombre_usuario.toLowerCase()} \n
            En líneas separadas: \n
             * Nombre: ${lista[0]}
             * Apellido1: ${lista[1]}
             * Apellido2: ${lista[2]}
            Propuesta de nombre de usuario: ${(lista[0][0]+lista[1]+lista[2][0]).toLowerCase} \n
            2º Propuesta de nombre de usuario: ${(lista[0][0]).toUpperCase+lista[1][0]+lista[1][1]+lista[1][2]+lista[2][0]+lista[2][1]+lista[2][2]}
`)
}

