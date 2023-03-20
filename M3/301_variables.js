// Variables y tipos de datos

// Luego de conocer las características 
// más importantes de Javascript es momento 
// de introducirnos en su sintaxis, es decir; 
// en conocer el conjunto de reglas que 
// debemos seguir al escribir el código 
// fuente para que el lenguaje de programación 
// lo entienda como correcto.

// String
var bootcamp = 'Henry';
console.log(bootcamp);
// Henry

// Números
var numeroEntero = 17;
console.log(numeroEntero);
// 17

var numeroNegativo = -4;
console.log(numeroNegativo);
// -4

var numeroDecimal = 11.75;
console.log(numeroDecimal);
// 11.75

// Booleanos
var estoyEntendiendo = true;
console.log(estoyEntendiendo);
// true

var estoyAburrido = false;
console.log(estoyAburrido);
// false

// Undefined
var cajon1;
console.log(cajon1);
// undefined

// Null
var sinNada = null;
console.log(sinNada);
// null

// MÉTODO LENGTH

// Este es un método que solo se puede aplicar 
// al tipo de dato string (más adelante veremos 
// que también lo podemos utilizar en arreglos). 
// En este ejemplo podemos ver que si lo intentamos 
// aplicar en un número o en un booleano, nos 
// devuelve error.

console.log("Aplicando metodo length sobre 'Henry': " + bootcamp.length);
// Aplicando metodo length sobre 'Henry': 5
