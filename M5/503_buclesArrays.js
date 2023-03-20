// Bucles o ciclos en los Arrays

// Bucle For

// Crea un bucle que consiste en tres expresiones 
// opcionales, encerradas en paréntesis y separadas 
// por puntos y comas, seguidas de una sentencia 
// ejecutada en un bucle.

// Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// Bucle While

// Crea un bucle que ejecuta una sentencia especificada 
// mientras cierta condición se evalúe como verdadera. 
// Dicha condición es evaluada antes de ejecutar la sentencia.

// Sintaxis: while (condicion)
//   sentencia

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);

// Bucle infinito

// Esto no es un nuevo tipo de bucle, sino algo que se 
// puede producir en los que ya aprendimos. Un bucle 
// infinito se produce cuando un bucle comienza a 
// ejecutarse, pero jamás termina. Esto se debe a que 
// nunca se llega a la condición de quiebre.

