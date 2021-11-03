/**
 * Cree una promesa que implemente 4 métodos .then en cadena de tal manera
 * que la promesa se resuelva inicialmente con el valor 2 <resolve(2)> 
 * y los siguientes métodos .then eleven al cuadrado el valor pasado, 
 * imprimiendo al final el mensaje “el valor final es: X” donde x es el resultado 
 * final del encadenamiento.
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