"use strict";
/**
 * Ejer
 * 5)
 */
// 1)
// Se crea la 1 promesa que siempre se resuleve
let primeraPromesa = new Promise((resolve, reject) => {
    // Se crea variable que almacenara la cadena
    let cadena = "Somos ADSI";
    resolve(cadena);
});
// 2)
// Se crea la 2 promesa que se podra resolver y rechazar
const segundaPromesa = new Promise((resolve, reject) => {
    // Se declaran las variables
    let estado = false; // estado del programador
    // Se declara la condicion
    if (estado) { // si el estado es true se cumplira
        // 
        let cadenaSiSeResuleve = "Somos programadores";
        resolve(cadenaSiSeResuleve);
    }
    else {
        // cuando el estado esta en false    
        reject("Promesa 2 NO cumplida");
    }
});
// 3)
// Se crea la 3 promesa
let terceraPromesa = new Promise((resolve, reject) => {
    // Promesa que siempre se recuelve
    resolve("Hacemos mover al mundo");
});
// ----------------------------------------------
// Se llaman las promesas con los datos
// ----------------------------------------------
// Se obtienen los datos de "resolve"
// Siempre se resolvera la promesa NO trendra 'catch'
primeraPromesa.then((res) => {
    console.log(res);
    // Retorno la promesa
    return segundaPromesa;
}).then((res) => {
    // 
    console.log(res);
    return terceraPromesa;
}).catch((err) => {
    // 
    console.log(err);
}).then((res) => {
    console.log(res);
});
