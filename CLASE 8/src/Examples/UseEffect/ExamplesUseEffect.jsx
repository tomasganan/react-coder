import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'

const ExampleUseEffect = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camiseta", precio: 20 },
    { id: 2, nombre: "Pantalón", precio: 30 },
    { id: 3, nombre: "Zapatillas", precio: 50 }
  ]);

  const [nuevoProducto, setNuevoProducto] = useState({});

  const handleInputChange = e => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value
    });
  };

  const handleAddProduct = () => {
    setProductos([...productos, nuevoProducto]);
    setNuevoProducto({});
  };

  return(<div>
    <h1>Lista de productos</h1>
    <ul>
      {productos.map(producto => (
        <li key={producto.id}>
          <p>{producto.nombre}</p>
          <p>Precio: ${producto.precio}</p>
        </li>
      ))}
    </ul>
    <form>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={nuevoProducto.nombre || ""}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Precio:
        <input
          type="number"
          name="precio"
          value={nuevoProducto.precio || ""}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleAddProduct}>
        Agregar
      </button>
    </form>
  </div>)

}

export default ExampleUseEffect