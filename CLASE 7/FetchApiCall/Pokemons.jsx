import React, { useState, useEffect } from 'react'

const Pokemons = () => {
  
  const [pokeList, setPokeList] = useState(null)

  // Usamos un efecto para cargar los datos de la API de pokemones al montar el componente.

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(dataJson => setPokeList(dataJson.results))
  }, [])
    
  return (
    <div style={{ backgroundColor: '#F5F5F5', padding: '20px'}}>
      <h1 style={{ textAlign: 'center', color: '#333', fontWeight: 'bold'}}>Lista de pokemones</h1>
      <ul style={{ margin: 0, padding: 0 }}>
         {
           pokeList.map(pokemon => (
             <li style={{ backgroundColor: '#FFF', padding: '10px', margin: '10px 0', borderRadius: '5px', boxShadow: '0px 3px 3px rgba(0,0,0,0.1)'}}>{pokemon.name}</li>
           ))
         } 
      </ul>
    </div>
  )
}

export default Pokemons