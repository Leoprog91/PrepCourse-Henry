// Los arreglos o arrays son lo que se conoce como objeto 
// global dentro de Javascript, y que nos permiten guardar 
// y gestionar información. Esto nos será de gran utilidad 
// cuando queramos almacenar datos. 

// Dentro de los arreglos existen dos conceptos que pueden 
// parecer similares, pero son muy diferentes.

// Por un lado tenemos lo que se conoce como elemento. Los 
// elementos son aquellos datos que hayamos guardado. 

// Por otro lado, está el concepto de índice. Los índices 
// no representan al dato en sí mismo, sino la posición en 
// la que se está guardando. Un detalle muy importante que 
// hay que destacar es que, en los arreglos, siempre se 
// comienza a contabilizar las posiciones desde el número 
// cero, no el uno.

listaDeCompras = [];

// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);