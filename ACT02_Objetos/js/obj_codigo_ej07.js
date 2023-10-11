/*
Escribe una web que contenga un botón el cual cuando hagas click en él, abra una ventana de 
400x400 localizada en una posición random dentro de los márgenes de la pantalla. Además cada 
segundo que pasa la pantalla debe de disminuir en tamaño de 40 en 40 pixeles tanto de alto como 
ancho y cuando tenga una medida menor o igual a 160 x 160 empiece a crecer hasta un tamaño no mayor que 400x400.
*/

const abrir_ventana= () =>{
   clients.openWindow()
}

document.getElementById("pulsa").addEventListener("click", () =>{
    abrir_ventana
    alert("funciona")
})