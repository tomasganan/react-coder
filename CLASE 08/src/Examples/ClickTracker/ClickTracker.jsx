import React, { useState } from 'react'

const ClickTracker = () => {

  const [count, setCount] = useState(0)
  const [click, setClick] = useState()

  const handleClick = () => {
    setCount(count + 1)
    setClick(new Date().toLocaleString())
  }

  console.log("click", click)

  return (
    <div style={{ padding: 10, textAlign: 'center' }}>
      <p>Has clickeado: {count} veces</p>
      {click ? 
        <p>Último click: {click} </p> 
      : 
        <p style={{color: 'red'}}>No hay fechas para mostrar</p>
      }

      <button style={{
        padding: 10,
        fontSize: 14,
        backgroundColor: 'cyan',
        borderRadius: 10,
        border: 'none'
      }}
      onClick={handleClick}
      >
        Clickeame!
      </button>
    </div>
  )
}

export default ClickTracker