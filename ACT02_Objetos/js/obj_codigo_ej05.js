/*
Diseña un sitio web que muestre un libro de recetas (4 o 5), siguiendo las siguientes instrucciones:
Las recetas deben tener nombre y explicación de la misma.
Deben  mostrarse en formato ordered list
La lista se generará desde JavaScript
La web ha de tener un botón para eliminar receta que pida al usuario el número de receta a eliminar,
 comprobar si existe, y si es así eliminarla de la lista.
*/

// creo un  array de objeto recetas con las 4 que voy a usar en la web

const recetas =[
    {ingredientes:"Berenjena al horno\n"+
    "Berenjenas frescas---2\n"+
    "Mayonesa sin huevo---80g\n"+
    "Tomates---3 unidades"+
    "Diente de ajo--- Medio\n"+
    "Limón---1 unidad\n"+
    "Sal\n"},
    {
    ingredientes:"Heura a las finas hierbas\n"+
    "1---paquete de heura\n"+
    "1---limón\n"+
    "1---cebolla\n"+
    "Hierbas al gusto (albahaca, tomillo, romero, etc\n"+
    "10g---margarina\n"+
    "3---patatas de guarnición\n"
    },
    {
    ingredientes: "Habichuelas\n"+
    "450g---habichuelas\n"+
    "1---cucharada de aceite de oliva virgen extra\n"+
    "1---paquete de chorizo vegano\n"+
    "1---hoja de laurel\n"+
    "azafrán\n"+
    "sal\n", 
    },
    {
    ingredientes: "Lentejas con arroz\n"+
    "100g---arroz"+
    "1---cucharada de aceite de oliva virgen extra\n"+
    "1---hoja de laurel\n"+
    "1---cebolla picada\n"+
    "sal\n",   
    }
]
console.log(recetas);


// declaramos los elementos que vamos a mandar al html

let elemento_section=document.createElement("section")
let elemento_ol=document.createElement("ol")
let elemento_li=document.createElement("li")

const enviar_hmtl = () =>{

document.body.appendChild(elemento_section);
elemento_section.appendChild(elemento_ol);

recetas.forEach(element => {
    elemento_li.textContent=element.ingredientes
    elemento_ol.appendChild(elemento_li)

    //ahora reseteo el elemento_li para volver a cargarle un nuevo valor

    elemento_li = document.createElement('li');
}); 
}


const validar_indice=(indice_usuario)=>{

    if (Number.isNaN(indice_usuario)){
        alert("Error, debe introducir un nº")
    }

    else if (indice_usuario<0 || indice_usuario>recetas.length-1){
        alert("El índice no es válido")
    }
    else {
        return true
    }

}

// por último creo una función para eliminar la receta indicada

const borrar_receta= () =>{
    
    const indice=parseInt(prompt("Introduzca el número de la receta a borrar\n"))-1
    elemento_a_borrar=document.getElementsByTagName("li")[indice]
    //ahora lo borramos
    if (validar_indice(indice)){
        elemento_a_borrar.remove()
        recetas.splice(indice, 1)
    }

}




//enviamos la info al cargar la página

enviar_hmtl(recetas)


//  y asociamos la función a un click

document.getElementById("boton_borrado").addEventListener("click", ()=>{

    if (recetas.length!==0){
        borrar_receta()
        console.log(recetas.length)
    }
    else {
        alert("Ya no hay nada que borrar")
    }

})



