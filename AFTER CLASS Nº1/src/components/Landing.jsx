import React from 'react'

import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div style={{ textAlign: "center"}}>
        <Link to="/">
          <img src="https://cdn-1.webcatalog.io/catalog/mercado-libre/mercado-libre-icon-filled-256.png?v=1675613927681" style={{ height: "50px"}} />
        </Link>
        <h1>Bienvenido a la aplicación de Mercado Libre</h1>
        <p>Busca productos y encuentra las mejores ofertas.</p>
    </div>
  )
}

export default Landing