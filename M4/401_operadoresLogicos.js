//AND

// Las expresiones se evalúan en orden, y la computadora 
// omitirá cualquier expresión redundante. En una 
// declaración &&, si la primera expresión es false, 
// la segunda expresión no se evaluará porque AMBAS 
// expresiones deben ser true.

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
// false
mayorYMenorYPar(8);
// true


// OR

// Lo mismo para la declaración ||. Si la primera 
// expresión es verdadero, la segunda no se evaluará 
// porque solo debe haber una declaración verdadera 
// para cumplir con los requisitos del operador.

function operadorOr(str) {
  if (str === 'Henry' || str.length < 2) console.log(true);
  else console.log(false);
}
operadorOr('Henry');
// true
operadorOr('Javascript');
// false
operadorOr('H');
// true

// NOT

// Utiliza paréntesis. Como vimos en el segundo ejemplo 
// de la negación !, utilizamos paréntesis para evaluar 
// PRIMERO lo que estaba dentro de ellos, y luego aplicamos 
// la negación. Podemos ajustar cualquier expresión entre 
// paréntesis y se evaluará antes que toda la expresión 
// en conjunto.

function negacion(permiso) {
  if (!permiso) {
    console.log('Tiene permiso');
  }else{
     console.log('No tiene permiso');
  }
}
negacion(true);
// No tiene permiso
negacion(false);
// Tiene permiso