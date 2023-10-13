/*
Escribe una clase que codifique y decodifique una cadena de caracteres utilizando el cifrado Cesar,
teniendo en cuenta lo siguiente:
-La clase recibirá un número entero que corresponderá al número de posiciones que  se desplazará en el alfabeto.
-El texto recibido podrá contener letras mayúsculas y minúsculas, pero la codificación y decodificación siempre será en mayúscula.
Un ejemplo de uso es el siguiente:

let cifrado = new Cesar(5)
let encoded = cifrado.encode(userText) // IBJH
let decoded = cifrado.decode(text_encode) //DWEC
 */

class Cesar {

    alfabeto_espaniol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z']

    constructor(numero) {
        this.numero = numero
    }


    encode(texto) {
        let copia_alfabeto = [...this.alfabeto_espaniol]

        //cogemos las letras que se tiene que desplazar del final del alfabeto

        const letras_a_mover = copia_alfabeto.slice(((copia_alfabeto.length) - this.numero), copia_alfabeto.length).reverse()

        //y las añadimos al principio.
        letras_a_mover.forEach((letra) => copia_alfabeto.unshift(letra))

        //Las letras añadidas siguen al final, pero eso no afecta luego a la hora de buscar
        //porque el índice es del primer elemento que encuentra


        console.log(copia_alfabeto);
        let texto_codificado = ""


        for (const caracter_texto of texto.toUpperCase()) {
            console.log(caracter_texto)
            for (const letra of copia_alfabeto) {
                if (letra === caracter_texto) {
                    console.log(letra)
                    texto_codificado = texto_codificado + this.alfabeto_espaniol[copia_alfabeto.indexOf(caracter_texto)]
                    console.log(copia_alfabeto.indexOf(caracter_texto))
                    break
                }

            }
        }
        return texto_codificado

    }

    decode(texto) {

        let texto_descifrado = ""
        let copia_alfabeto = [...this.alfabeto_espaniol]
        const letras_a_mover = copia_alfabeto.slice(((copia_alfabeto.length) - this.numero), copia_alfabeto.length).reverse()
        letras_a_mover.forEach((letra) => copia_alfabeto.unshift(letra))

        for (const caracter_texto of texto.toUpperCase()) {
            for (const letra of this.alfabeto_espaniol) {
                if (letra === caracter_texto) {

                    texto_descifrado = texto_descifrado + copia_alfabeto[this.alfabeto_espaniol.indexOf(caracter_texto)]
                    console.log(letra)
                    break
                }

            }
        }
        return texto_descifrado


    }
}


//Para probar con valor predeterminado

let cifrado = new Cesar(5)
let encoded = cifrado.encode("dwec") // IBJH
let decoded=cifrado.decode("IbJh")

console.log("Cadena a codificar: dwec")
console.log(encoded)
console.log("Cadena a descodificar: IbJh")
console.log(decoded);

//Para probar con input de usuario

let input_usuario=parseInt(prompt("Introduzca un número para cifrar\n"))
let texto_usuario
if (!Number.isNaN(input_usuario)){
    texto_usuario=prompt("Introduzca el texto a cifrar")
    let cifrado2 = new Cesar(input_usuario)
    const texto_encriptado=cifrado2.encode(texto_usuario)
    alert(`texto cifrado= ${texto_encriptado}`)
    alert(`texto descifrado= ${cifrado2.decode(texto_encriptado)}`)
}
else {
    alert("introduzca un nº válido")
}



