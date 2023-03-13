import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Home = () => {
  const { addToCart, removeFromCart } = useContext(CartContext);

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

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bienvenidos a FIRULAY SHOP</h1>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', gap: '20px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ 
            width: '300px', 
            height: '300px', 
            border: '1px solid grey', 
            padding: '10px',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            }}>

            <h3 style={{ textAlign: 'center' }}>{item.name}</h3>
            <p style={{ textAlign: 'center' }}>{item.description}</p>
            <p style={{ textAlign: 'center' }}>Precio: ${item.price}</p>
            <Link style={{ textAlign: 'center' }} to={`/item/${item.id}`}>Ver detalle</Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => addToCart(item, 1)}>
                    Agregar al carrito
                </button>
                <button style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px'
                }} onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Home;