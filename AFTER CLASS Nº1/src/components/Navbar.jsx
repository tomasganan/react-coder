import React, { useState } from 'react'

import { Link } from "react-router-dom"

const Navbar = (props) => {

  const [value, setValue] = useState("")

  // Función que se llama al enviar el formulario de busqueda
  const handleSubmit = (event) => {
    event.preventDefault();
    // Setear lo ingresado por el usuario (value) en nuestro estado search
    props.setSearch(value)
  }

  // Función para controlar el campo input de la busqueda
  const handleChange = (event) => {
    // Setear nuestro estado con el evento (valor actual ingresado)
    setValue(event.target.value)
  }


  return (
    <nav style={{ backgroundColor: "#FFF000", padding: "20px"}}>
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}></input>
        <button type="submit">Buscar</button>
        </form>
      </div>
      <div style={{ float: "right"}}>
        <Link to="/about">Sobre nosotros</Link>
      </div>
    </nav>
  )
}

export default Navbar