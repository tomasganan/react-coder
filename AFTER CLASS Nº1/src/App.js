import React, { useState, useEffect } from "react"

import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./AppRoutes";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

function App() {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    if(search != "") {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setResults(data.results))
    }
  }, [search])

  return (
    <div>
      <BrowserRouter>

        <Landing />
        <Navbar setSearch={setSearch} />
        <Results results={results} />

        <AppRoutes />

      </BrowserRouter>
    </div>
  );
}

export default App;
