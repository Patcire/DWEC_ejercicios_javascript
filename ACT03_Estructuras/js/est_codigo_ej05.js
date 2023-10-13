/*
Partiendo del siguiente diagrama, crea una jerarquía de clases en JavaScript creando
un objeto padre con todas las características comunes y clases especializadas para
las propiedades específicas de cada rol en la empresa. Crea los objetos y casos
de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.
 */

"use strict"

// IMPORTANTE: Aunque no lo indica el enunciado, he declarado algunas propiedades como privadas para probarl su funcionamiento
// También sus getters y setters correspondientes

// Creamos la clase Padre con todas las propiedades y métodos comúne:

class Persona_trabajadora{
    #id
    #fecha_nacimiento
    constructor(id, nombre, apellidos, fecha_nacimiento) {
        this.#id=id
        this.nombre=nombre
        this.apellidos=apellidos
        this.#fecha_nacimiento=fecha_nacimiento
    }

    concentrarse(){
        alert("Modo focus activado")
    }

    set_id(id){
        this.#id=id
    }
    get_id(){
        return this.#id
    }

    set_nacimiento(fecha){
        this.#fecha_nacimiento=fecha
    }
    get_nacimiento(){
        return this.#fecha_nacimiento
    }
}

//clases restantes

class Ceo extends Persona_trabajadora{

    #jefes_asignados=[]
    constructor(id, nombre, apellidos, fecha_nacimiento, jefes_asignados) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.#jefes_asignados=jefes_asignados
    }

    viajar(){
        alert("Estoy de viaje")
    }
    anadir_jefe(jefe){
        this.#jefes_asignados.push(jefe)
    }

    dirigir_jefes(){
        alert("Haced esto y lo otro")
    }

    get_jefes(){
        return this.#jefes_asignados
    }

}


class Jefe extends Persona_trabajadora{

    equipo=[]
    constructor(id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo) {
        super(id, nombre, apellidos, fecha_nacimiento);
        this.dpto_responsable=dpto_responsable
        this.equipo=equipo
    }

    anadir_al_equipo(programador){
        this.equipo.push(programador)
    }
    reunirse_equipo(){
        alert("A las once en la sala de reuniones")
    }

}

class Programador extends Persona_trabajadora{

    constructor(id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia) {
        super(id, nombre, apellidos, fecha_nacimiento,);
        this.titulacion=titulacion
        this.experiencia=experiencia
    }

    programar(){
        alert("Picando código")
    }

}


// Comprobamos el funcionamiento de las clases y la jerarquía

// Creamos una instancia de la clase Padre
const trabajador1=new Persona_trabajadora(1234, "pepe", "carl ret", "12/12/1345")

alert("Veamos los datos de la clase apdre");
alert(trabajador1.id); //si intentamos acceder así a la propiedad privada nos sale undefined
alert(trabajador1.get_id()) //así es como debemos hacerlo
alert(trabajador1.get_nacimiento());
alert(trabajador1.nombre);
alert(trabajador1.apellidos)

trabajador1.concentrarse()

//ahora modificamos sus variables privadas
alert("Modifiquemos sus variables privadas");
trabajador1.set_nacimiento("11/12/1945")
trabajador1.set_id(9999)
alert(trabajador1.get_id())
alert(trabajador1.get_nacimiento());

// Clase Progamador

const programadora1=new Programador(3333, "Laura", "Pep Si", "11/12/1993",
    "ingeniería", "3")

alert("Veamos los datos de un objeto de la clase Programador");
alert(programadora1.get_id())
alert(programadora1.get_nacimiento());
alert(programadora1.nombre);
alert(programadora1.apellidos)
alert(programadora1.titulacion);
alert(programadora1.experiencia)

programadora1.concentrarse()
programadora1.programar()

//modificamos variables privadas
alert("Modifiquemos sus variables privadas");
programadora1.set_id(3331)
programadora1.set_nacimiento("11/12/1987")
alert(programadora1.get_id())
alert(programadora1.get_nacimiento());

// Clase Jefe

const jefa1=new Jefe(8888, "Jimena", "Mik Ado", "11/12/1953",
    "producción", [])

alert("Veamos los datos de un objeto de la clase Jefe");
alert(jefa1.get_id())
alert(jefa1.get_nacimiento());
alert(jefa1.nombre);
alert(jefa1.apellidos)
alert(jefa1.dpto_responsable);
alert(jefa1.equipo)

jefa1.concentrarse()
jefa1.reunirse_equipo()

//creamos un nuevo trabajador para ver que funciona el método añadir al equipo
const trabajador2=new Programador(5555, "Nuevo", "Trab Ajador", "11/12/1993",
    "algo", "6")
jefa1.anadir_al_equipo(trabajador2)

//modificamos variables privadas
alert("Modifiquemos sus variables privadas");
programadora1.set_id(5554)
programadora1.set_nacimiento("11/12/1987")
alert(programadora1.get_id())
alert(programadora1.get_nacimiento());


// Clase CEO

const ceo1= new Ceo(1000, "María", "Ce O", "11/12/1973",
    [])

alert("Veamos los datos de un objeto de la clase Ceo");
alert(ceo1.get_id())
alert(ceo1.get_nacimiento());
alert(ceo1.nombre);
alert(ceo1.apellidos)
alert(ceo1.jefes_asignados)

ceo1.concentrarse()
ceo1.dirigir_jefes()
ceo1.anadir_jefe(jefa1)
alert(ceo1.get_jefes())


