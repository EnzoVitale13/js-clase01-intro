// 3 formas de declarar variables:

// var es globar y es viejo. NO USAR
var primera = "hola mundo";

// las dos formas que vienen del ES6: let y const. NO son globales, existen donde hayan sido creadas

// const es constante: no se puede cambiar
const segunda = "hola 2";

// let si se puede ser cambida
let tercera = "hola 3";

// para imprimir, usamor console.log()
console.log("primera:", primera);

console.log("segunda:", segunda);

console.log("tercera:", tercera);

// podemos reasignar el valor en los let y var!
tercera = "cambiando el valor!";
console.log("tercera", tercera);

// las constantes son inmutables! node a partir de este punto corta la ejecucion!
segunda = "cambiando segunda!";
console.log(segunda);

// las var se pueden cambiar, pero como rompio la constante no va a correr
primera = "cambiando la var";
console.log(primera);
