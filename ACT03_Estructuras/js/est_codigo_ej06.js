/*
Crea un objeto Ghost que no reciba ningún parámetro de entrada y devuelva un color aleatorio (que debe estar almacenado),
teniendo en cuenta las siguientes premisas:
El color debe ser  aleatorio de entre, al menos, 10 colores distintos
En cada carga de página, se deben seleccionar 1000 resultados distintos
Haz el código lo más compacto y eficiente posible, es decir, no repitas una y otra vez el mismo código
Los resultados se deben mostrar por pantalla de una manera similar a la siguiente, aunque puedes adaptarlo a tu estilo personal:
 */

// Creamos Ghost
const Ghost=()=>{
    const colores=["lightpink", "dodgerblue", "cadetblue", "mediumpurple", "palegoldenrod", "darkseagreen", "dimgrey",
        "coral", "orchid", "indianred", "beige", "bisque", "lightgreen", "gold", "moccasin", "brown", "burlywood"]

    let num_aleatorio= Math.floor(Math.random()*((colores.length)-1+1))
    console.log(num_aleatorio)

    return colores[num_aleatorio]
}




//enviamos

const generar_cuadrados =()=>{

    for (let i=0; i<1000; i++){
        const elemento_section=document.createElement("section")
        const nombre=document.createElement("p")
        const color= Ghost()
        //le asignamos un color aleatorio llamando a Ghost()
        elemento_section.style.backgroundColor=color
        elemento_section.style.width="100px"
        elemento_section.style.height="100px"
        elemento_section.style.margin="10px"
        elemento_section.style.display="inline-block"
        document.body.appendChild(elemento_section)
        elemento_section.appendChild(nombre)
        nombre.innerHTML= color

        console.log(i)

    }

}

generar_cuadrados()

