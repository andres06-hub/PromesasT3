/**
 * 1)
 * 
 * Cree y ejecute una promesa que siempre se resuelva,
 * y que lo haga con un string “Somos
 * programadores, hacemos mover el mundo”, de tal manera que en su
 * .then, se imprima tal string mediante console.log
 */

const promesaUno = new Promise((resolve, reject) => {
    resolve("Somos programadores, hacemos mover al mundo");
});

promesaUno.then((res) =>{
    console.log("--> "+res);
    
})
// _----------------------------------------------------------

/**
 * Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string
 * “Ha ocurrido un error desconocido.”, 
 * de tal manera que en su .catch, se imprima tal string mediante console.log
 */

let promesaDos = new Promise((resolve, reject) => {
    reject("Ha ocurrido un error desconocido.");
});

promesaDos.then((res) => {
    console.log("No entrara ya que siempre sera un una rechasada");
    
}).catch((err) => {
    console.log(err);
    
});


