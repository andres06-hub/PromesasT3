/**
 * Ejer
 * 
 * 1)
 */

const promesaUno = new Promise((resolve, reject) => {
    resolve("Somos programadores, hacemos mover al mundo");
});

promesaUno.then((res) =>{
    console.log("--> "+res);
    
})
