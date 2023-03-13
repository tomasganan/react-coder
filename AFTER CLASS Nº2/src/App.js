import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import NavbarPage from "./components/NavbarPage";
import CartProvider from "./Context/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <NavbarPage />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:itemId" element={<ItemDetail />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;