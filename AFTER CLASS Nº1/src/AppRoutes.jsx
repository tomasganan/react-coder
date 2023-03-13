import React from 'react'

import { Routes, Route } from "react-router-dom"
import About from './components/About'

const AppRoutes = () => {

  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes