// Tenis

// Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora


const jugadora1 = prompt("Ingrese el nombre de la primer jugadora");
const jugadora2 = prompt("Ingrese el nombre de la segunda jugadora");
let setJugadora1 = 0;
let setJugadora2 = 0;

while (setJugadora1 < 3 && setJugadora2 < 3) {
    let resultadoSet = prompt("Ingrese el nombre de la ganadora de este set");

    if (resultadoSet === jugadora1) {
        setJugadora1++;
    }
    else if (resultadoSet === jugadora2) {
        setJugadora2++;
    }
    else {
        alert("Ingrese un nombre válido");
    };

    alert(`El puntaje actual es el siguiente: 
    
    ${jugadora1}: ${setJugadora1} sets.
    ${jugadora2}: ${setJugadora2} sets.`)

}

if (setJugadora1 === 3) {
    alert(`La ganadora es la jugadora ${jugadora1}`)
}
else {
    alert(`La ganadora es la jugadora ${jugadora2}`)
}