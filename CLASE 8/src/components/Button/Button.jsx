// Componente botón que recibe diferentes propiedades:props (Utilizando componente basado en funciones)

import React from 'react'

const Button = (props) => {

  return (
    
    !props.isUsedBootstrap ?
      <button 
        style={props.styleCondition ? {backgroundColor: 'red', color: 'white'} : {backgroundColor: 'green', color: 'white'}}>
          {props.buttonName}
      </button>
    :
      <button type="button" class="btn btn-dark">{props.buttonName}</button> 
  )
}

export default Button