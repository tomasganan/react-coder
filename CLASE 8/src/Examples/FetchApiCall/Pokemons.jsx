import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const Pokemons = () => {
  
  const [pokeList, setPokeList] = useState(null)

  // Usamos un efecto para cargar los datos de la API de pokemones al montar el componente.

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(dataJson => setPokeList(dataJson.results))
  }, [])
    
  return (
    <div style={{ backgroundColor: 'tomato', padding: '20px'}}>
      <h1 style={{ textAlign: 'center', color: '#333', fontWeight: 'bold'}}>Lista de pokemones</h1>
      <ul style={{ margin: 0, padding: 0 }}>
         {
           pokeList?.map((pokemon, index) => (
             <li style={{ backgroundColor: '#FFF', padding: '10px', margin: '10px 0', borderRadius: '5px', boxShadow: '0px 3px 3px rgba(0,0,0,0.1)'}}>
               <Link to={`/pokemon/${pokemon.url.split('/').slice(-2)[0]}`}>{pokemon.name}</Link>
             </li>
           ))
         } 
      </ul>
    </div>
  )
}

export default Pokemons