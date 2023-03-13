import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../Context/CartContext';

const ItemDetail = () => {

  const { itemId } = useParams()

  const { addToCart, removeFromCart } = useContext(CartContext)

  const products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 10,
      description: 'Descripción del producto 1'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 20,
      description: 'Descripción del producto 2'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 30,
      description: 'Descripción del producto 3'
    }
  ];

  const selectItem = products.find(product => product.id == itemId)


  return (
    <div style={{  justifyContent: 'center', padding: '50px', gap: '20px' }}>
    
      <h2>{selectItem.name}</h2>
      <p>Price: {selectItem.price}</p>
      <p>Description: {selectItem.description}</p>
      <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => addToCart(selectItem, 1)}>
        Agregar al carrito
      </button>
      <button style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '25px',
        height: '25px'
        }} onClick={() => removeFromCart(selectItem.id)}>X</button>
    </div>
  );
}

export default ItemDetail