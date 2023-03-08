import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const ExamplesRendering = () => {

  // 1) Usando una declaración IF con un return temprano:
  /* const condition = false
  
  if(condition){
    return <h1>La condición es VERDADERA!</h1>
  } else {
    return <h1>La condición es FALSA!</h1>
  } */

  // 2) Usando operador ternario:
  /* const condition = false
  return(
    <h1>{condition ? 'VERDADERO' : 'FALSO'}</h1>
  ) */

  // 3) Usando una expresión lógica directa (&&):
  /* const condition = true
  return(
    <div>
      {condition && <h1>Es verdaderooooo o o o</h1>}
    </div>
  ) */

  // 4) Usando un componente diferente segun la condición:
  /* const condition = false

  const TrueComponent = () => {
    return <h1>Es verdadero.</h1>
  }

  const FalseComponent = () => {
    return <h1>Es falso.</h1>
  }

  return(
    <div>
    {condition ? <TrueComponent /> : <FalseComponent />}
    </div>
  ) */
  
  // 5) Usando una función para determinar el contenido:
  /* const condition = true

  const getContent = () => {
    if(condition){
      return <h1>La condición es VERDADERA.</h1>
    } else {
      return <h1>La condición es FALSA.</h1>
    }
  }

  return(
    <div>{getContent()}</div>
  ) */

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return(
    <div>
      <h2>Bienvenidos a mi APP!</h2>
      <Loader loading={loading} />
    </div>
  )
}

export default ExamplesRendering