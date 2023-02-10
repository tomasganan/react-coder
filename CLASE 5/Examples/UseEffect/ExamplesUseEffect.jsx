import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'

const ExampleUseEffect = () => {

  // [ ] -> En el momento

  /* useEffect(() => {
    console.log("Componente montado")
  })
  
  return (
    <div>OnMount</div>
  ) */

  // [ prop ] -> En el momento y por cada cambio de prop.

  /* const [name, setName] = useState('Diego')

  useEffect(() => {
    console.log(`Nombre actual: ${name}`)
  }, [name])
  
  return (
    <div>
      <p>Hola {name}</p>
      <br/>
      <button onClick={() => setName('Pablo')}>Cambiar nombre</button>
    </div>
  ) */

  // [ prop1, prop2 ] -> En el momento y por cada cambio de prop1 o prop2.

  const [name, setName] = useState('Diego')
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`Nombre actual: ${name}, Contador: ${count}`)
  }, [name, count])
  
  return (
    <div>
      <p>Hola {name}. Contador: {count}</p>
      <br/>
      <button onClick={() => setName('Pablo')}>Cambiar nombre</button>
      <br/>
      <button onClick={() => setCount(count + 1)}>Aumentar contador</button>
    </div>
  )
}

export default ExampleUseEffect