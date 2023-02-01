// Ejemplo 2: Métodos de Array

/* 
.push(): agrega elementos al final de un arreglo.
.pop(): elimina el último elemento de un arreglo.
.shift(): elimina el primer elemento de un arreglo.
.unshift(): agrega elementos al principio de un arreglo.
.slice(): devuelve un nuevo arreglo con una porción seleccionada de un arreglo.
.splice(): te permite agregar o eliminar elementos de un arreglo. 
*/

const numbers = [1, 2, 3, 4];

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.pop();
console.log(numbers); // [1, 2, 3, 4]