// Modificar los valores de un array: se puede utilizar el método .map() para aplicar una función que modifique cada elemento del array original y crear un nuevo array con los valores modificados.

// Ejemplo de modificación de array: Al array original se lo multiplica por 2.

const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log(numerosMultiplicados); // Output: [2, 4, 6, 8, 10]

// Ejemplo de modificación de array: Al array original se lo pasa a mayusculas.

const frutas = ['manzana', 'banana', 'kiwi'];

const frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());

console.log(frutasMayusculas); // Output: ['MANZANA', 'BANANA', 'KIWI']