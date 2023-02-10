import React, { useState } from 'react'

const ExampleUseState = () => {
  
  // Declarando un estado llamado 'count' con un valor inicial de 0.
  const [count, setCount] = useState(0)

  console.log("count:", count)
    
  return (
    <div>
     <p>El contador actual es: {count}</p>
     <button onClick={() => setCount(count + 1)}>Aumentar contador</button>
    </div>
  )
}

export default ExampleUseState