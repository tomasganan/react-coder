// Componente contenedor: Recibe datos a través de las props y los va a ir pasando a su compoente hijo (Child), donde Child es un componente de presentación que muestra los datos en una lista.

import React from 'react'

const Container = (props) => {
  return (
    <div>
      <Child data={props.data} />
    </div>
  )
}

const Child = (props) => {
  return(
    <ul>
      { props.data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))
      }
    </ul>
  )
}

export default Container