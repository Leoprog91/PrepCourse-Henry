// Operadores de comparación

// Anteriormente conocimos los operadores 
// básicos y su precedencia, ahora nos 
// enfocaremos en los operadores de comparación: 
// mayor que (>), 
// menor que (<), 
// mayor o igual (>=), 
// menor o igual (<=), 
// igual == (se representa con doble igual)
// y distinto de (!=).

//Operaciones de comparación
console.log (4 < 7);
// true
console.log (4 < 1 );
// false
console.log (4 > 4); 
// false
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3);
// true
console.log (3 === 3); 
// true
console.log (3 == "3"); 
// true
console.log (3 === "3");
// false
console.log (7 == "7");
// true
console.log (7 === "7");
// false

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c);
// 2