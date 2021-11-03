"use strict";
/**
 *
 * Ejer
 * 3)
 */
let estrato = 2;
// creamos la promesa
let validacion = new Promise((resolve, reject) => {
    // Se valida que el estrato ingresado sea un estrato valido
    if (estrato > 0) {
        // Se valida el estrato para las diferentes situeciones 
        // Que se podran presentar
        if (estrato > 0 && estrato <= 2) {
            resolve("Puede adquirir el subsidio");
        }
        else if (estrato > 2 && estrato <= 6) {
            resolve("Usted no tiene derecho a subsidio");
        }
        else {
            resolve('Estrato no válido\nEstrato ingresado : ' + estrato);
        }
    }
    else {
        // Por si el estrato es menor a '0'
        reject(new Error("¡Por Favor! ingrese un estrado valido \n Estrato ingresado : " + estrato));
    }
});
validacion.then((res) => {
    console.log(res);
});
validacion.catch((err) => {
    // Imprimimos el mensaje que queremos mostrar con el 
    // message del error obtenido
    console.log("Ha ocurrido un error : ", err.message);
});
