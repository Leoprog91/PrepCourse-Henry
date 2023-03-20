// Funciones

// En esta lección abordaremos las funciones, 
// que son un concepto fundamental en la resolución 
// de problemas a través de la programación.
// Observa con detalle la siguiente video clase para 
// introducirte en las funciones de Javascript.

// Función: sumaTres

// Primera
var sumaUno = (x) => {
  return x + 1;
}
console.log(sumaUno(1));
// 2

// Segunda
var sumaDos = function(x){
  return x + 2;
};
console.log(sumaDos(2));
// 4

// Tecera
var sumaTres = (x) => {
  return x + 3;
};
console.log(sumaTres(3));
// 6

// Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
  console.log(nombre); // errado
  return nombre; // correcto
}
console.log(cuidadoConElConsoleLog('soyHenry'));

// Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c);
// 2

// Habrás notado en la video clase que comenzamos 
// a asignarle nombres a nuestras funciones. 
// Bueno, existen diferentes maneras de escribir 
// nombres dentro del mundo del código a esto le 
// llamamos nomenclatura, en la siguiente lección 
// lo exploraremos con detalle.
