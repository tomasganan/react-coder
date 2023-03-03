import React, { createContext } from 'react'

// Definimos un contexto, con un valor por defecto.

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
})

export default ThemeContext;

// El context creado anteriormente, tiene 2 propiedades: un provider y un consumer: cuando trabajamos con Hooks nos interesa el provider ya que para consumir el estado utilizamos el hook de reack especifico (useContext)