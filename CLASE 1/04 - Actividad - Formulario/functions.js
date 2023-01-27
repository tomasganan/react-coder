const form = document.getElementById("form"); // Obtenemos el elemento HTML con el id 'form'

form.addEventListener("submit", (event) => { // Se agrega un evento (alert) al formulario cuando se haga el submit
  event.preventDefault(); // Evitamos que el form se envie. Ejecutamos el código que se encuentra en la función
  const name = document.getElementById("name").value; // Obtenemos el elemento HTML con el id 'name'
  const email = document.getElementById("email").value; // Obtenemos el elemento HTML con el id 'email'
  alert(`Nombre: ${name}\nEmail: ${email}`); // Mostramos una alerta con el 'name' e 'email' obtenido.
});