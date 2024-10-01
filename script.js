//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('ienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5')


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let nombre = "Mateo"
let edad = 22;
let trabajando = false;
let dimension = null;
let indefinido;
let objeto = { tipo: "mobile", marca: "Samsung" };
let array = [5, 6, 7, 8];

console.log("Mi nombre es " + nombre + ", mi edad es " + edad);
console.log("Estas trabajando?");

if(trabajando) {
    console.log("Sí");
} else {
    console.log("No");
}

console.log("Dimension? " + dimension);
console.log("Indefinido? " + indefinido);

console.log("Objeto?", objeto);
console.log("1, 2, 3, 4...", array);

//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num1 = 1;
let num2 = 2;

let suma = num1 + num2;

console.log(suma);

//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num3 = 3;
let num4 = 4;

let resta = num3 - num4;

console.log(resta);

//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num5 = 5;
let num6 = 6;

let mult = num5 * num6;

console.log(mult);

//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let num7 = 7;
let num8 = 8;

let div = num7 / num8;

console.log(div);

//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let var1 = 1;
let var2 = 2;

let comparacion = var1 == var2;
console.log("Variable 1 es igual que variable 2? " + comparacion);

// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let comparacion2 = var1 < var2;
console.log("Variable 1 es menor que variable 2? " + comparacion2);

//Ejercicio 10: completa el ejercicio

let num15 = 15;
let num20 = 20;

let comparacion3 = num15 < num20;
console.log(comparacion);

//Ejercicio 11: completa el ejercicio

let num30 = 1
let num30AsString = "1"

let result = num30 != num30AsString
console.log(result);

//Ejercicio 12: completa el ejercicio

let result2 = num30 == num30AsString
console.log(result2)

//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let name = "Mateo";
let lastName = "Roa";
let fullName = name + " " + lastName;

console.log("Nombre completo: " + fullName);

//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

 let a = 6;
let b = 3;

let res =  a < 10 && b > 1 
console.log(res)

let res2 = a < 10 && b < 1
console.log(res2)

let res3 = a == 5 && b == 5
console.log(res3)

let res4 = a == 6 || b == 0
console.log(res4)

let res5 = a == 0 || b == 3
console.log(res5)

let res6 = a == 6 && b == 3
console.log(res6) 
