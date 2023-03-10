import React, { useState } from 'react'

const EventsExamples = () => {


  // onClick: En este ejemplo, se declara un componente que renderiza un botón con el texto "Clickeame!". Al botón se le asigna el evento onClick, que está vinculado a la función handleClick. Cuando el usuario hace clic en el botón, la función handleClick se ejecuta y se imprime el mensaje "El boton ha sido clickeado" en la consola.
  const handleClick = () => {
    console.log("El boton ha sido clickeado")
  }

  // onChange: En este ejemplo, el estado valorInput guarda el valor actual del input, mientras que la función handleChange actualiza el estado cada vez que el usuario ingresa un nuevo valor. El evento onChange se encarga de llamar a esta función cada vez que el valor del input cambia.
  const [valueInput, setValueInput] = useState("")

  const handleChange = (event) => {
    setValueInput(event.target.value)
  }

  // onKeyPress: En este ejemplo, estamos utilizando el evento onKeyPress para detectar cuando el usuario presiona la tecla "Enter" mientras escribe en el input. Si se detecta el evento, se ejecuta la función handleKeyPress que imprime un mensaje en la consola.

  const [value, setValue] = useState("")

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log("El usuario presiono ENTER.")
    } else {
      console.log("El usuario presiono cualquier tecla menos ENTER.")
    }
  }

   // onMouseOver: En este ejemplo, cuando el cursor del mouse entra en el área del elemento div, se ejecuta la función handleMouseOver, que simplemente imprime un mensaje en la consola.

  const handleMouseOver = (event) => {
    console.log("El mouse ha entrado en el area del elemento.")
  }

  // onKeyDown: Esta función prevendrá el comportamiento por defecto del evento 'onKeyDown', lo cual en el caso del input podria ser por ejemplo, ingresar el caracter correspondiente a la tecla presionada en el campo de entrada. En este caso particular, la función onInput previene que el usuario pueda ingresar caracteres en el campo de entrada.

  const onInput = (event) => {
    event.preventDefault()
  }

  // onKeyDown #2: En este ejemplo, se utiliza el estado keyPressed para mostrar la última tecla presionada por el usuario. La función handleKeyDown se encarga de actualizar este estado cada vez que el usuario presiona una tecla en el input.
  const [keyPressed, setKeyPressed] = useState("")

  const handleKeyDown = (event) => {
    setKeyPressed(event.key)
  }

  return (
    <>
    <h3>onClick</h3>
    <div>
      <button onClick={handleClick}>CLICKEAME!</button>
    </div>

    <h3>onChangue</h3>
    <form>
      <label>Ingresa tu nombre: 
          <input type="text" onChange={handleChange}></input>
      </label>
      <p>Tu nombre es: <b>{valueInput}</b></p>
    </form>

    <h3>onKeyPress</h3>
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>

    <h3>onMouseOver</h3>
    <div onMouseOver={handleMouseOver}>
      <p>El usuario pasó el mouse por encima de este parrafo</p>
    </div>

    <h3>onKeyDown</h3>
    <p>Coder name</p>
    <input onKeyDown={onInput}></input>

    <h3>onKeyDown</h3>
    <p>Presiona una tecla. Tecla presionada: <b>{keyPressed}</b></p>
    <input type="text" onKeyDown={handleKeyDown}></input>
    </>
  )
}

export default EventsExamples