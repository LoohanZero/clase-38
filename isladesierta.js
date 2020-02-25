// Isla desierta

// Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:
// ⛵️🌊🌊🌊🏝
// // AVANZAR
// 🌊⛵️🌊🌊🏝
// // AVANZAR
// 🌊🌊⛵️🌊🏝
// // RETROCEDER
// 🌊⛵️🌊🌊🏝
// // AVANZAR
// 🌊🌊⛵️🌊🏝
// // AVANZAR
// 🌊🌊🌊⛵️🏝
// ¡Has llegado a la isla!

let mar = "⛵️ 🌊 🌊 🌊 🌊 🌊 🌊 🌊 🏝".split(" ");
let indexOfBarco = mar.indexOf("⛵️");
let indexOfIsla = mar.indexOf("🏝");
let removido = [];

while (indexOfIsla !== (indexOfBarco + 1)) {
    

    let orden = prompt(`El mar y la isla están a la siguiente distancia: 
    ${mar}
    Ingrese AVANZAR o RETROCEDER para indicarle al barco qué hacer.`)

    if (orden==="AVANZAR") {
                    
        removido = mar.splice((indexOfBarco + 1), 1);
        mar.unshift(removido);      
    }
    else if (orden === "RETROCEDER") {

        if (indexOfBarco !== 0) {

            removido = mar.splice((indexOfBarco - 1), 1);
            mar.splice((indexOfBarco), 0, removido);
        }
        else {
            alert("¡El barco no puede alejarse más de la isla sin chocar!")
        };
    }
    else {
        alert("Ingrese un valor válido, inténtelo nuevamente.")
    };

    indexOfBarco = mar.indexOf("⛵️");
    indexOfIsla = mar.indexOf("🏝");
    removido = [];
}

alert(`¡El barco ha llegado a la isla! 
${mar}`)
