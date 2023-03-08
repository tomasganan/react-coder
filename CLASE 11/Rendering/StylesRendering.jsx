import React from 'react'

const StylesRendering = () => {

  // 1) Conditional rendering para mostrar u ocultar un componente:
  const show = true

  return (
    <div>{show ? 'Contenido visible' : null}</div>
  )

  // 2) Conditional rendering para cambiar el estilo de un componente:
  const condition = true
  const style = { color: condition ? 'green' : 'red', 
                  backgroundColor: condition ? 'yellow' : 'black'  }

  return(
    <div style={style}>
      Texto condicional
    </div>
  )

  // 3) Conditional rendering para añadir una clase a un componente:
  const condition = true
  const className = condition ? 'clase1' : 'clase2'

  return(
    <div className={className}>
      Componente con clase condicional
    </div>
  )

  // 4) Conditional rendering para pasar propiedades dinámicas a un componente:
  const condition = false

  const props = condition ? {
    className: 'clase1',
    title: 'Titulo dinámico'
  } : {
    className: 'clase2',
    title: 'Titulo clase 2'
  }

  return(
    <div {...props}>Componente con propiedades condicionales</div>
  )
}

export default StylesRendering