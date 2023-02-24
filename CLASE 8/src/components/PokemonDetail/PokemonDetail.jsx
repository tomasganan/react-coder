import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const PokemonDetail = (props) => {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(dataJson => setPokemon(dataJson))
  }, [id])

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#f8f8f8', 
      borderRadius: '10px', 
      padding: '20px',
      margin: '30px',
      maxWidth: 500, 
      boxShadow: '0px 3px 3px rgba(0,0,0,0.5)' }}>
      {
        pokemon ? 
        <>
          <img style={{ width: '200px', height: '200px', marginBottom: '10px' }} src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h1 style={{ fontSize: '30px', margin: 0 }}>{pokemon.name}</h1>
        </>
        :
         <div>Cargando...</div>
      }
    </div>
  )
  
}

export default PokemonDetail;