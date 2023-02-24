import React from 'react'

import Alert from './Alert/Alert'
import Button from './Button/Button'
import Navbar from './Navbar/Navbar'

const Landing = () => {

  return (
    <>
      <Navbar />
      <div style={{padding: 30}}>
        <Button buttonName="Aceptar" isUsedBootstrap={true} />
        <Button buttonName="Eliminar" isUsedBootstrap={false} styleCondition={true} />
      </div>  

      <div>
        <Alert />
      </div>
    </>
  )
}

export default Landing