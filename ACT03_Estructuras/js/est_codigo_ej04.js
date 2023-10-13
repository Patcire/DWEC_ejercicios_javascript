/*
Ejercicio 4
Definir la siguiente jerarquía de clases, haciendo uso de las clases de JavaScript:
-Objeto Persona con las propiedades nombre, edad y su identidad de género, y el método getInfo(), 
que muestra por pantalla las propiedades de la persona.
-Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y
el método matriculado(), el cual matriculará a un estudiante en un curso.
-Objeto Profesor, que hereda de Persona, e incluye las propiedades módulo y nivel 
y el método imparte(), el cual asigna un módulo y nivel a un profesor.
Crear los objetos y casos de prueba necesarios para comprobar el correcto 
funcionamiento de la jerarquía.
*/


// Creamos clase persona

class Persona{
    constructor(nombre, edad, genero) {
        this.nombre=nombre
        this.edad=edad
        this.genero=genero
    }

    getInfo(){
        alert("Datos:\n" +
            `Nombre=${this.nombre}\n`+
            `Edad=${this.edad}\n`+
            `Género:${this.genero}\n`)
    }

}

// Clase Estudiante

class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso=curso
        this.grupo=grupo
    }

    matriculado(nuevo_curso){
        this.curso=nuevo_curso
        alert(`El alumno ${this.nombre} se ha matriculado en el ${nuevo_curso} curso`)
    }

    // reescribimos getInfo
    getInfo() {
        super.getInfo();
        alert(`Y su curso es ${this.curso} del grupo ${this.grupo}`)
    }
}

// Clase Profesor

class  Profesor extends Persona{
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero);
        this.modulo=modulo
        this.nivel=nivel
    }

    imparte(modulo_impartido, nivel_imparte){
        this.modulo=modulo_impartido
        this.nivel=nivel_imparte
    }
    // reescribimos getInfo
    getInfo() {
        super.getInfo();
        alert(`Y su módulo es ${this.modulo} del nivel ${this.nivel}`)
    }
}

// Comprobamos el funcionamiento de las jerarquía

const persona1= new Persona("Juana", "34","no binario")
persona1.getInfo()

const profesorx=  new Profesor("Pepe", "57", "masculino", "Mates", "3º")
profesorx.getInfo()

//ahora modificamos el modulo y el nivel con el método imparte
profesorx.imparte("TIC", "2º")
profesorx.getInfo()


const estudiante1= new Estudiante("Laura", "21","femenino", "2º", "A")
estudiante1.getInfo()

//modificamos el curso matriculado con el método
estudiante1.matriculado("3º")
estudiante1.getInfo()