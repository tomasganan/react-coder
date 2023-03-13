import React from 'react'

const Results = (props) => {

  return (
    <div>
      {
        props.results.map((result) => (
        <div>
          <img src={result.thumbnail}></img>
          <div>
          <h2>{result.title}</h2>
          <p>Precio: ${result.price}</p>
          <p>Cant. de vendidos: {result.sold_quantity}</p>
          </div>
        </div>          
        ))
      }
    </div>
  )
}

export default Results