let comillasSimples =
  "hola! \"estoy adentro de comillas\" 'igual podemos usar simples' ";
let comillasDobles =
  "hola! \"igual podemos usar dobles\" \n 'yo tambien estoy dentro de comillas'";
let comillaInvertida = `soy un hola desde backtick`;

console.log(comillasSimples);
console.log(comillasDobles);
console.log(comillaInvertida);

// vamos a acceder a un carater en particular
let conMetodos = "hola mundo";

//empezamos a contar desde 0. Aca pedimos el caracter en la posicion 3:
console.log("usando metodos:", conMetodos.charAt(3));
//podewmos hacerlo sin el metodo.
console.log("accediendo directamente al caracter:", conMetodos[6]);

//podriamos crear una variable nueva para guardar ese caracter que queremos:
let unaLetra = conMetodos.charAt(7);
console.log("una letra", unaLetra);
