import React, { useState } from 'react'

// Componente que representa un elemento de la lista. Es intercambiable ya que su funcionalidad es clara y específica, lo que permite que pueda ser utilizado en diferentes contextos.
const ListItem = (props) => {
  return <li>{props.text}</li>;
}
  
// Componente que representa la lista y es intercambiable ya que se puede utilizar en cualquier parte de la aplicación y no depende de ningún otro componente específico. 
// Ademas utiliza la abstracción de los eventos al exponer un evento personalizado onAddItem que permite que el componente padre, App, se encargue de agregar nuevos elementos a la lista.

const List = (props) => {
    const [newItemText, setNewItemText] = useState('');

    // Manejador del evento onSubmit del formulario de agregar elemento

    const handleAddItem =(e) => {
      e.preventDefault();
      if (newItemText.trim() !== '') {
        props.onAddItem(newItemText);
        setNewItemText('');
      }
    }

    return (
      // Renderizamos la lista de elementos y un form para agregar nuevos elementos a la lista.
      <div>
        <ul>
          {props.items.map((item, index) => <ListItem key={index} text={item} />)}
        </ul>
        <form onSubmit={handleAddItem}>
          <input type="text" value={newItemText} onChange={(e) => setNewItemText(e.target.value)} />
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }

const EventComponents = () => {

    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    // Función que se encarga de agregar un nuevo item a la lista. Maneja el evento onAddItem del componente List
    // Recibe como parámetro text, que es el texto que se va a agregar a la lista

    const handleAddItem = (text) => {
      // Actualizar el estado con los items previos + los nuevos, por eso utilizamos el operador spread, para copiar los elementos previos de la lista y agregar el nuevo elemento.
      setItems((prevItems) => [...prevItems, text]);
    }
  
    return (
      <div>
        <h1>Lista</h1>
        <List items={items} onAddItem={handleAddItem} />
      </div>
    );
}

export default EventComponents