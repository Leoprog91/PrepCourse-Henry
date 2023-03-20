// Métodos de Arrays
var colores = ['Amarillo', 'Azul'];
console.log(colores);

// Métodos de inserción

// PUSH y UNSHIFT

// El método push() añade uno o más elementos al 
// final de un arreglo, y devuelve la nueva 
// longitud del array.
colores.push('Rojo');
console.log(colores);

// El método unshift() agrega uno o más elementos 
// al inicio de un arreglo, y devuelve la nueva 
// longitud del array.
colores.unshift('Verde');
console.log(colores);

// POP y SHIFT

// El método pop() elimina y devuelve el último 
// elemento de un arreglo.
colores.pop();
console.log(colores);

// El método shift() elimina y devuelve el primer 
// elemento de un arreglo.
colores.shift();
console.log(colores);

// Métodos varios

// INCLUDES
// El método includes() determina si un arreglo incluye 
// o contiene un elemento específico. Devuelve true o 
// false en cada caso.
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');
console.log(existeDali);

// EVERY
// El método every() determina si todos los elementos 
// en un arreglo satisfacen una misma condición.
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
console.log(cumplenCondicion);

// SPLIT
// El método split() convierte un string en un arreglo, 
// donde cada elemento contendrá un sub-string, dependiendo 
// del parámetro divisor que indiquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
palabraSeparada.pop();
console.log(palabraSeparada);
palabraSeparada.push('y');
console.log(palabraSeparada);

// JOIN
// El método join() convierte un arreglo en un string, 
// uniendo todos los elementos de este en una misma cadena.
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

// Métodos de recorrido

// El método forEach() nos permite recorrer un arreglo, 
// realizando alguna acción en para cada elemento.
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } );

numeros.forEach( (num) => {
  if( num === 3 )
    console.log(num)
} );

// El método map() también nos permite recorrer un arreglo 
// y realizar una acción por cada elemento. La diferencia 
// es que este método devuelve un nuevo arreglo los elementos 
// modificados.
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );
console.log(masUno);

// Más métodos de arreglos

// Has aprendido algunos de los métodos más utilizados de los 
// arreglos. Te invitamos a que revises la sección de "métodos" 
// sobre objetos para conocer muchos otros que te puede ser de 
// utilidad!
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array