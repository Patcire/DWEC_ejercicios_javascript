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

const enviar_hmtl = (lista_recetas) =>{
    // declaramos los elementos que vamos a mandar al html

let elemento_section=document.createElement("section")
let elemento_ol=document.createElement("ol")
let elemento_li=document.createElement("li")


// los envíamos

document.body.appendChild(elemento_section);
elemento_section.appendChild(elemento_ol);

lista_recetas.forEach(element => {
    elemento_li.textContent=element.ingredientes
    elemento_ol.appendChild(elemento_li)
    //reseteo el elemento_li para volver a cargarle un nuevo valor
    elemento_li = document.createElement('li');
}); 
}


//enviamos la info

enviar_hmtl(recetas)
    
// por último creo una función para eliminar la receta indicada

const borrar_receta= (objeto_receta) =>{
    
    const indice=parseInt(prompt("Introduzca el número de la receta a borrar\n"))-1
    alert("receta eliminada")
    //delete objeto_receta.indice
    delete objeto_receta[indice]
    console.log(objeto_receta)
    //location.reload()
    const actualizada=recetas.slice()
    enviar_hmtl(actualizada)
    
}




//  asocio la función a un click

document.getElementById("boton_borrado").addEventListener("click", ()=>{
    borrar_receta(recetas)
})



/*

const recetas={
    1:"Berenjena al horno\n"+
        "Berenjenas frescas---2\n"+
        "Mayonesa sin huevo---80g\n"+
        "Tomates---3 unidades"+
        "Diente de ajo--- Medio\n"+
        "Limón---1 unidad\n"+
        "Sal\n",
    2:"Heura a las finas hierbas\n"+
        "1---paquete de heura\n"+
        "1---limón\n"+
        "1---cebolla\n"+
        "Hierbas al gusto (albahaca, tomillo, romero, etc\n"+
        "10g---margarina\n"+
        "3---patatas de guarnición\n",
    3: "Habichuelas\n"+
        "450g---habichuelas\n"+
        "1---cucharada de aceite de oliva virgen extra\n"+
        "1---paquete de chorizo vegano\n"+
        "1---hoja de laurel\n"+
        "azafrán\n"+
        "sal\n",
    4: "Lentejas con arroz\n"+
        "100g---arroz"+
        "1---cucharada de aceite de oliva virgen extra\n"+
        "1---hoja de laurel\n"+
        "1---cebolla picada\n"+
        "sal\n",   
}
*/