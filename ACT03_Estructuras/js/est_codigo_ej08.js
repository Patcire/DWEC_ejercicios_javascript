/*
Vas a hacer un viaje con un grupo de 7 amigos y decidís que uno de vosotros se encargará de gestionar el monedero de cada uno.
 Eres el encargado de gestionar este dinero, así que para facilitar esta gestión decides hacer una pequeña aplicación para ello:
-Primero, decides crear una clase Monedero en Javascript con el número de billetes que tiene cada integrante del grupo, necesitarás
    almacenar el nombre de la persona (suponemos que será un nombre único), el número de billetes de 5€, el número de billetes de 10€
    y el número de billetes de 20€. Para simplificar el ejercicio, no tenemos en cuenta el resto de billetes de valor superior.
-Necesitarás crear los getters y los setters correspondientes a cada atributo almacenado, al igual que un método que calcule el total
    de dinero que hay en cada monedero.
-Por último, por seguridad, no llevarás todos los monederos a la vez,
  sino que acordais que cada día se seleccionará el monedero que más dinero tenga en ese momento, así que necesitarás una función que
  calcule el dinero que tiene cada monedero y seleccione aquel que tenga el máximo valor. Si en un momento dado todos los monederos
  tienen la misma cantidad de dinero, la función indicará “Cualquiera”.

*/

class Monedero{
    constructor(nombre, billetes_cinco, billetes_diez, billetes_veinte) {
    this.nombre=nombre
    this.billetes_cinco=billetes_cinco
    this.billetes_diez=billetes_diez
    this.billetes_veinte=billetes_veinte
    }

    //creo una función que devuelva el total de dinero del monedero

    dinero_total(){
        return (this.billetes_cinco*5+this.billetes_diez*10+this.billetes_veinte*20)
    }

    //personalizo el tostring
    toString(){
        return `Monedero de ${this.nombre} con:\n
         ${this.billetes_cinco} billetes de cinco \n
         ${this.billetes_diez} billetes de diez \n
         ${this.billetes_veinte} billetes de veinte\n`
    }

    //creo los setters y getters

    set_nombre(nombre){
        this.nombre=nombre
    }

    get_nombre(){
        return this.nombre
    }

    set_billetes_cinco(bill_cinco){
        this.billetes_cinco=bill_cinco
    }
    get_billetes_cinco(){
        return this.billetes_cinco
    }

    set_billetes_diez(bill_diez){
        this.billetes_diez=bill_diez
    }
    get_billetes_diez(){
        return this.billetes_diez
    }

    set_billetes_veinte(bill_veinte){
        this.billetes_veinte=bill_veinte
    }
    get_billetes_veinte(){
        return this.billetes_veinte
    }

}


// creo lxs 7 amigxs

let m1= new Monedero("pablo", 3,2,1)
let m2= new Monedero("laura", 6,0,2)
let m3= new Monedero("pepe", 0,5,0)
let m4= new Monedero("luisa", 5,2,1)
let m5= new Monedero("ana", 0,0,2)
let m6= new Monedero("carlos", 1,1,2)
let m7= new Monedero("alvaro", 1,2,1)

const lista_monederos=[m1, m2, m3, m4, m5, m6, m7]

// creo la función mas_dinero para saber el que tiene más pasta


const mas_dinero=(todos_monederos)=>{
    let nombre_almacen
    let mismo_dinero=0
    let dinero=0
    for(const monedero of todos_monederos){
            console.log(monedero.dinero_total())
            if (monedero.dinero_total()>=dinero){
                nombre_almacen=monedero.nombre
                dinero=monedero.dinero_total()
                mismo_dinero++
            }
    }

    if (mismo_dinero===todos_monederos.length){
        nombre_almacen="Cualquiera"
    }
    return nombre_almacen

}



// probamos el toString que hemos sobreescrito e imprimimos los 7 monederos
alert("probamos el toString que hemos sobreescrito e imprimimos el m1\n"+m1.toString())



//probamos acceder solo a un atributo
alert(`Monedero 7 billetes de veinte:\n ${m7.billetes_veinte}`);

//probamos recuperar con un get
alert(`Vemos los billetes de m4 con un get:\n ${m4.get_billetes_diez()}`)

//probamos a cambiar con un set
const m7_total_actual=(m7.get_billetes_veinte())-1
m7.set_billetes_veinte(m7_total_actual)
alert(`Monedero 7 ha gastado un billete de 20, ahora tiene: \n ${m7.get_billetes_veinte()} billetes de veinte`)

//probamos el monedero que vamos a llevar hoy
alert(`probamos el monedero que vamos a llevar hoy:\n ${mas_dinero(lista_monederos)}`)

//probamos cuando todos llevan la misma cantidad
//para ello creo dos monederos iguales en billetes


let m8= new Monedero("alsdjasj", 2,2,2)
let m9= new Monedero("lolo", 2,2,2)

const billetes_iguales=[m8, m9]

alert("probamos cuando todos llevan la misma cantidad\n" +
    "para ello creo dos monederos iguales en billetes:\n"
)
alert(m8.toString()+
     m9.toString())

 alert(`${mas_dinero(billetes_iguales)}`)
