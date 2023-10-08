/*
-Escribe un script que pida al usuario el valor del radio 
de una circunferencia y muestre por pantalla (no en la consola):
-El valor del radio.
-El valor del diámetro.
-El valor del perímetro de la circunferencia.
-El valor del área del círculo.
-El valor del área de la esfera.
-El valor del volumen de la esfera.
Notas:
El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
Debes escribir las unidades correspondientes a cada valor:  cm,  cm2, o cm3.
Los datos deben tener 2 decimales
*/

//para validar el input utilizo la función que creé 
//en el paquete ACT_03/js/est_codigo_ej01.js
import {validar_numero} from "D:\VSCODE\ACT03_Estructuras\js\est_codigo_ej01.js"

const radio=parseFloat(prompt("Introduzca el valor del radio:\n"))

const respuesta_valida=validar_numero(radio)

if (respuesta_valida===true){
    alert(
        //usamos round con *100/100 para redondear a dos decimales
        `El valor del radio = ${radio} cm\n
         El valor del diámetro = ${radio*2} cm \n
         El valor del perímetro = ${Math.round((radio*2*Math.PI) * 100 / 100)} cm\n 
         El valor del área del círculo = ${Math.round(( (radio**2)*Math.PI)* 100 / 100)} cm2\n
         El valor del área de la esfera = ${Math.round((4*(radio**2)*Math.PI)* 100 / 100)} cm2\n
         El valor del volumen = ${Math.round(((4/3)*Math.PI*radio**3)* 100 /100)} cm3` 
    )
}