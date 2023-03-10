// Filtrar elementos de un array: se puede utilizar el método .map() para aplicar una función que filtre los elementos de un array según ciertos criterios y crear un nuevo array con los elementos filtrados.

const numeros = [1, 2, 3, 4, 5];

const numerosMayoresQueTres = numeros.map(numero => {
  if (numero > 3) {
    return numero;
  }
});

console.log(numerosMayoresQueTres); // Output: [undefined, undefined, undefined, 4, 5]

// .map() no es el enfoque recomendado para filtrar elementos de un array, ya que puede ser menos eficiente y más difícil de leer que el uso del método .filter().

const numerosMayoresQueTres = numeros.filter(numero => numero > 3);

console.log(numerosMayoresQueTres) // Output: [4, 5]