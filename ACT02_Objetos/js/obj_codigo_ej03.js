/*
    La primera semana del año es la que tiene el primer jueves de Enero. 
    Todos los años tienen 52 semanas, excepto los años bisiestos que tienen 53 semanas.
    Crea un script que reciba un string en formato YYYY-MM-DD y devuelva a qué número 
    de semana pertenece una fecha dada.

*/


const validar_fecha= (fecha) => {
    //comprobamos varios formatos indicados entre corchetes
    return moment(fecha, ["YYYY-MM-DD","YYYY/MM/DD", "DD/MM/YYYY", "DD-MM-YYYY"], true).isValid()
    
}


//let fecha_usuario = moment().format(prompt("Introduzca una fecha con el siguiente formato YYYY-MM-DD"))
let fecha_input = prompt("Introduzca una fecha con el siguiente formato YYYY-MM-DD")
const fecha_moment= moment(fecha_input,["YYYY-MM-DD","YYYY/MM/DD", "DD/MM/YYYY", "DD-MM-YYYY"])


//const fecha_valida=validar_fecha(fecha_usuario)

if (validar_fecha(fecha_input)){

    //la siguiente función devuelve el nº de la semana, teniendo en cuenta los años bisiestos
    const semana=fecha_moment.isoWeek()
    alert(`La semana de la fecha ${fecha_input} es la semana nº ${semana}`)
    
}
else{
    alert ("Error. Indique una fecha en el formato indicado")
}


