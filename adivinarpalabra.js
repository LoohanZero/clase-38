// Adivinar palabra

// Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.


const palabra = ["perro", "gato", "tortuga", "conejo", "loro", "pez", "hamster"];

const azar = Math.round(Math.random() * 6);
let palabraAAdivinar = "";
let ingresoJugador = "";
let copiaDividida = [];
let showPista = [];
let pista = [];

for (i=0; i < palabra.length; i++) {

    if (azar === i) {
        palabraAAdivinar = palabra[i];
    }
}

let copia = palabraAAdivinar.slice();
copiaDividida = copia.split("");

while (copiaDividida.length !== 0 && palabraAAdivinar !== ingresoJugador) {
    
    pista = copiaDividida.shift();  
    showPista += pista;
 
    ingresoJugador = prompt(`Intente adivinar la palabra elegida. Pista: ${showPista}`);
   

}

if (palabraAAdivinar === ingresoJugador) {
    alert("¡Usted ha adivinado la palabra!")
}
else {
    alert("¡Usted ha perdido, inténtelo nuevamente!")
}
