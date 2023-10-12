/*
Escribe una web que contenga un botón el cual cuando hagas click en él, abra una ventana de 
400x400 localizada en una posición random dentro de los márgenes de la pantalla. Además cada 
segundo que pasa la pantalla debe de disminuir en tamaño de 40 en 40 pixeles tanto de alto como 
ancho y cuando tenga una medida menor o igual a 160 x 160 empiece a crecer hasta un tamaño no mayor que 400x400.
*/

let ancho=400
let altura=400
let ventana
let temporizador_aumento
let temporizador_disminucion


const abrir_ventana= (ancho_estandar, altura_estandar, posicion_horizontal_inicial, posicion_vertical_inicial) =>{

    ventana=window.open("", "prueba",
        `resizable=yes,width=${ancho_estandar},height=${altura_estandar},left=${posicion_horizontal_inicial},top=${posicion_vertical_inicial}`)

}
const disminuir_tamanio=()=>{
    ancho-=40
    altura-=40
    ventana.resizeBy(-40, -40)
    console.log(ancho);
    if(ancho===160){

        //Al llegar a 160  limpio su intervalo de ejecución y creo uno para llamar a aumentar

        clearInterval(temporizador_disminucion)
        temporizador_aumento=setInterval(aumentar_tamanio, 1000)

    }
    cerrar_ventana(temporizador_disminucion)
}

const aumentar_tamanio=()=>{
    ancho+=40
    altura+=40
    ventana.resizeBy(40, 40)
    console.log(ancho);
    if(ancho===400){

        //limpio el intervalo y creo el de aumentar, de esta forma siempre al llegar a los límites s
        // e llama a la función contraria y se ejecuta

        clearInterval(temporizador_aumento)
        temporizador_disminucion=setInterval(disminuir_tamanio, 1000)
    }
    cerrar_ventana(temporizador_aumento)
}


//función para limpiar los intervalos al cerrar la ventana nueva
const cerrar_ventana= (temporizador)=>{
    if (ventana.closed){
        console.log("cerrada")
        clearInterval(temporizador)
    }
}


document.getElementById("pulsa").addEventListener("click", () =>{
    ancho=400
    altura=400
    let posicion_horizontal=Math.round(Math.random()*(window.screen.width-1+1)+1)
    let posicion_vertical=Math.round(Math.random()*(window.screen.height-1+1)+1)
    abrir_ventana(ancho, altura, posicion_horizontal, posicion_vertical)
    temporizador_disminucion=setInterval(disminuir_tamanio, 1000)

})


///eeeeeeeeeeeee




