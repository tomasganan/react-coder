// Ejemplo 3: Operador Spread

const frutas = ['manzana', 'banana'];
const verduras = ['lechuga', 'tomate'];
// Usamos el operador spread para combinar los elementos de los dos arreglos en un nuevo arreglo (comida)
const comida = [...frutas, ...verduras];
console.log(comida);