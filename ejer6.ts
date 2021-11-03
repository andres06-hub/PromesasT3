/**
 * 
 * 
 */

let estado:boolean = false;

// Se crea la promesa
let miPromesa = new Promise((resolve, reject) => {

    // Se crea una funcion para declarativa
    function proceso(){
        
        if (estado) {
            // Se resuelve la promesa
            resolve("Promesa resuelta");
        }else{
            resolve(new Error("Promesa rechazada ::ERROR::"));
        }
    }
    // Se asigan el tiempo para la ejecuacion de la funcion
    setTimeout(proceso, 2000);
});

miPromesa
    .then((res) => {
    console.log(res);
})  .catch((err) => {
    // Imprimimos el mensaje que queremos mostrar con el 
    // message del error obtenido
    console.log(err.message);
});
