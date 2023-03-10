import React, { useState } from 'react'

const FetchExample = () => {
  
  // Utilizamos un estado para manejar nuestra 'futura' data.
  const [data, setData] = useState(null)
  
  const handleFetch = () => {
    // Usamos fetch() para enviar la solicitud HTTP (GET) en busca de la data.
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // Obtenemos la respuesta (data) y la transformamos en formato JSON.
    .then(response => response.json())
    // La función 'response.json()' devuelve una promesa que se resuelve en un objeto JSON. Acá utilizamos otro .then() para recibir el objeto JSON devuelvo por la respuesta.
    .then(dataJson => {
      // Imprimir por consola la data.
      console.log(dataJson)
      // Setear la data en el estado.
      setData(dataJson)
    })
    // Agregamos .catch() en el caso de que exista algun error.
    .catch(error => console.log(error))
  }

  return (
    <div>
      <button onClick={handleFetch}>TRAEME LA DATA!</button>
      {
        data && 
        <div>
          <h2>{data.title}</h2>
          <p>{data.id}</p>
          <p>{data.completed ? '¡COMPLETADO!' : 'x NO COMPLETADO x'}</p>
        </div>
      }
    </div>
  )
}

export default FetchExample