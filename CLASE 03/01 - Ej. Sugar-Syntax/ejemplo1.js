// Ejemplo 1: Sugar-Syntax

// ANTES

var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// DESPUÉS

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);