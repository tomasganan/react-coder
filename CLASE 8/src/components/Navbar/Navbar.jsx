import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Logo</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={'/'}>Inicio</Link>      
            </li>
            <li class="nav-item">
              <Link to={'/contact'}>Contacto</Link>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar