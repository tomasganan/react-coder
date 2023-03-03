import React, { useState } from 'react'
import ThemeContext from './Context/ThemeContext'
import Navbar from './Navbar'

const AppLanding = () => {

  const [darkMode, setDarkMode] = useState(true)
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Navbar />
      </ThemeContext.Provider>
    </div>
  )
}

export default AppLanding