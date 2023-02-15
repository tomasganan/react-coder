// Convertir objetos a otro formato: se puede utilizar el método .map() para aplicar una función que convierta cada objeto de un array a otro formato y crear un nuevo array con los objetos convertidos.

const usuarios = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 40 },
];

const nombresUsuarios = usuarios.map(usuario => usuario.nombre);

console.log(nombresUsuarios); // Output: ['Juan', 'María', 'Pedro']