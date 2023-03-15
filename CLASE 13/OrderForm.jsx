import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const OrderForm = ({ items }) => {

  // Definimos variables que son estados para guardar información sobre el comprador, los productos  seleccionados y el total de la compra.
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);


  // Instancia de firestore
  const db = getFirestore();

  // Referencia a la colección ordes para acceder a dicha colección.
  const ordersCollection = collection(db, 'orders');

  // Función para manejar el submit del form
  const handleSubmit = (e) => {

    e.preventDefault(); // Evitamos que el formulario se envié por si mismo.
  
    // Objeto ‘order’ con la información del comprador, los ítems y su total.
    const order = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      },
      items: selectedItems,
      total: total
    };
  
    // Método ‘addDoc’ para agregar un nuevo documento con los datos de la orden. 
    addDoc(ordersCollection, order)
      .then((docRef) => {
        console.log('Documento enviado. ID:', docRef.id);
        alert('¡Compra realizada con éxito!');
        resetForm();
      })
      .catch((e) => {
        console.log('Error al agregar el documento', e);
      });
  };
  
  // Función para manejar el seleccionado/deseleccionado de los checkbok
  const handleSelectItem = (item) => {
    // Comprobamos si el elemento seleccionado está o no en la lista de elementos.
    const isSelected = selectedItems.includes(item);

     // Si no está seleccionado, se agrega a la lista de elementos y se agrega su precio al total.
    if (!isSelected) {
      setSelectedItems([...selectedItems, item]);
      setTotal(total + item.price);
    } else {
      // Si el elemento ya está seleccionado, al deseleccionar se elimina de la lista y se resta su precio total al total (total).
      const updatedSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
      setSelectedItems(updatedSelectedItems);
      setTotal(total - item.price);
    }
  };

  // Función para resetear el formulario luego de enviar
  const resetForm = () => {
    setBuyerName('');
    setBuyerPhone('');
    setBuyerEmail('');
    setSelectedItems([]);
    setTotal(0);
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="text" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
        </label>
        <br />

        <h3>Seleccione los productos que desea comprar:</h3>

        {items.map((item) => (
          <div key={item.id}>
            <label>
              <input 
                type="checkbox" 
                checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)} 
                onChange={() => handleSelectItem(item)} />
                {item.title} - ${item.price}
            </label>
          </div>
        ))}

        <br />

        <h3>Total: ${total}</h3>
        <button type="submit" className="btn btn-primary">Realizar compra</button>

      </form>
    </div>
  );
};

export default OrderForm;