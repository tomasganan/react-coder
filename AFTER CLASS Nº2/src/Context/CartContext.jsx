import React, { useState, createContext } from "react";

// Definimos un CartContext y lo exportamos en la misma linea. No es necesario inicializar en blanco las funciones, pero es una buena práctica hacerlo para que los consumidores del contexto puedan conocer las funciones que están disponibles y cómo se deben llamar

export const CartContext = createContext({
  cart: [],
  clearCart: () => {},
  isInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {}
});

// El componente CartProvider es el proveedor del contexto y es responsable de almacenar el estado del carrito de compras y de proporcionar las funciones necesarias para manipular ese estado.
const CartProvider = (props) => {

  // Creamos un estado para almacenar el estado del carrito de compras. Lo inicializamos como un arreglo vacio.
  const [cart, setCart] = useState([]);

  // Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }

  // Verificar si un producto ya está en el carrito.
  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  }

  // Agregar un producto al carrito.
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  
  // Eliminar un producto del carrito.
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart);
  };

  // Obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    let cant = 0
    cart.forEach((e) => cant += e.quantity)
    return cant
  };

  // Obtener el total del carrito en función de la cantidad y el precio de cada producto
  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total        
  };

  return (
    //  Por último utilamos el Context de React para proveer el estado del carrito y las funciones que lo manipulan a cualquier componente que se suscriba a este contexto. 
   
   // CartContext.Provider es un objeto que contiene los valores que se van a compartir con los componentes que se suscriban a este contexto.
    <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, getTotalQuantity, getTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;