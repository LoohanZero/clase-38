// Simón dice II

// Replicar el juego de Simón dice. El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego continúa indefinidamente hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.

let bien = true;
let simon = 0;
let jugador = "";
let simonDice = [];


while (bien) {
    
    let jugadorDice = [];
    simon = Math.round(Math.random() * 3) + 1;
    
    if (simon === 1) {
        simon = "rojo";
    }
    else if (simon === 2) {
        simon = "verde";
    }
    else if (simon === 3) {
        simon = "azul";
    }
    else {
        simon = "amarillo";
    }; 

    simonDice.push(simon);

    alert(`Simón dice: ${simonDice}`);

    for (i = 0; i < simonDice.length; i++) {
        jugador = prompt("Ingrese el color que dice Simon");
        jugadorDice.push(jugador);
    }

    bien = simonDice.join(' ') === jugadorDice.join(' ');

    if (bien) {
        alert(`¡Felicitaciones! ¡Usted ha acertado todos los colores!
        Simón dijo: ${simonDice}
        Y usted dijo: ${jugadorDice}.`)
    } else {
        alert(`¡Ups, usted se ha equivocado!
        Simón dijo: ${simonDice}
        Y usted dijo: ${jugadorDice}.`)
    }

}