import React from 'react'

const InputMask = () => {
  
  // Definimos la función para verificar si la tecla presionada es una vocal.
  const handleKeyDown = (e) => {
    
    // Definimos el arreglo de vocales.
    const vocals = ['a', 'e', 'i', 'o', 'u']

    // Si la tecla presionada es una vocal, se llama a la función preventDefault del evento, lo que evita que la tecla sea ingresada en el input.
    // Se usa toLowerCase() para asegurarse de que no importe si la tecla presionada es mayúscula o minúscula.
    if(vocals.includes(e.key.toLowerCase())){
      e.preventDefault()
    }
  }

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown}></input>
    </div>
  )
}

export default InputMask