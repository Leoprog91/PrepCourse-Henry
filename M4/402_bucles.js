// Bucle For

// Por un lado, el Bucle For es utilizado cuando sabemos 
// con antelación la cantidad máxima exacta de pasos que 
// queremos ejecutar. Esta cantidad máxima de pasos se sitúa 
// como segundo parámetro entre los paréntesis.
var suma = 0;
for (let i = 0; i < 5; i++) {
  suma = suma + i;
  console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);
// Variable suma:  10

// Bucle while

// El Bucle While es usado cuando no tenemos la 
// certeza de cuántos pasos vamos a necesitar
// hasta finalizar la ejecución. Por ejemplo,
// podríamos pensar en una función que siga 
// agregando +1 hasta llegar a un número 
// determinado. 
var suma = 0;
while(suma < 3) {
  suma = suma + 1;
  console.log(suma);
}
console.log(suma);
// 3


// Expresión Switch

// La expresión Switch evalúa una condición. Compara su valor 
// con una instancia case, y ejecuta declaraciones asociadas 
// a ese case, así como las declaraciones en los case que siguen.
function expresiónSwitch(expr){
  switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
}

console.log("¿Hay algo más que te quisiera consultar?");
console.log(expresiónSwitch("Naranjas"));
console.log(expresiónSwitch("Manzanas"));
console.log(expresiónSwitch("Platanos"));
console.log(expresiónSwitch("Cerezas"));
console.log(expresiónSwitch("Mangos"));
console.log(expresiónSwitch("Papayas"));
console.log(expresiónSwitch("Limon"));

// Bucle Do-While

// El bucle Do-While (hacer mientras) ejecuta una sentencia 
// especificada, hasta que la condición de comprobación se 
// evalúa como falsa. La condición se evalúa después de 
// ejecutar la sentencia, dando como resultado que la 
// sentencia especificada se ejecute al menos una vez.
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

// Declaración continue y break

// La declaración continue se utiliza dentro de los Bucles. 
// Nos permite omitir alguna de las iteraciones si se cumple 
// una condición específica.

// La declaración break se utiliza dentro de los Bucles. 
// Nos permite "romper" o finalizar el bucle con antelación si se 
// cumple una condición específica.

i = 0;
n = 0;
while (i < 10) {
  i++;
  if (i == 3)
    continue;
  if (i == 5)
    break;
  if (i != 3 && i !=5)
    console.log(i);
  n += i;
}