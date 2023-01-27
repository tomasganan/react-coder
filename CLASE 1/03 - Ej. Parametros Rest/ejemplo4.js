// Ejemplo 4: Parametros Rest

function suma(...numeros) {
  let resultado = 0;
  for (const num of numeros) {
    resultado += num;
  }
  return resultado;
}
console.log(suma(1, 2, 3)); 
console.log(suma(5, 10, 15, 20));

// la función "suma" tiene un parámetro llamado "numeros" precedido por el operador rest (...). Esto significa que la función puede recibir cualquier cantidad de argumentos y todos se almacenarán en un arreglo llamado "numeros". Dentro de la función, utilizamos un bucle "for of" para iterar sobre cada elemento del arreglo y sumarlos.

//Los parámetros rest son útiles cuando no sabemos de antemano cuantos argumentos recibirá nuestra función, permitiendo a nuestra función trabajar con una cantidad variable de argumentos.