// Control de flujo (if/else)

// En esta lección abordaremos la forma de direccionar 
// nuestro código a través de los condicionales (If/else)  
// son estructuras fundamentales para la resolución de 
// problemas. En la siguiente video clase detallaremos 
// su importante con ejemplos prácticos.

function viajar(destino) {
  if(destino === 'Brasil') {
           console.log('Gire a la izquierda');
  } else if(destino === 'Argentina') {
           console.log('Gire a la derecha');
  } else {
           console.log('Nos perdimos');''
  }
};
viajar('Brasil');
// Gire a la izquierda

viajar('Argentina');
// Gire a la derecha

function puedeManejar(edad) {
  if(edad >= 18) {
    console.log( true );
  }else {
    console.log( false );
  }
}

puedeManejar(17);
// false

puedeManejar(19);
// true