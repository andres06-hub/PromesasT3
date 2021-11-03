/**
 * Ejer
 * 4)
 */

// Se crea la promesa 
// Se define el tipo de la promesa 
// ya que se le define porque se hara operaciones con ella 
let promesa = new Promise<number>((resolve,reject) => {

    // Valor inicial
    let valorInicial:number = 2;
    // Se le pasa el valor
    resolve(valorInicial);
});
// Obtenemos los datos de la promesa
// Si es resulto y no hay error con .then

// Se va encadenando una por una
// son then encadenados
promesa.then((res) =>{
    console.log(res);
    return res ** 2;
}).then((res) =>{
    console.log(res);
    return res ** 2;
}).then((res)=> {
    console.log(res);
    return res ** 2;
}).then((res) => {
    console.log(res);
    // return
}).catch((err) => {
    console.log("Ha ocurrido un Error!");
    
});