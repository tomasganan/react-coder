/* Los fragmentos en React son una forma de agrupar varios elementos de React juntos y renderizarlos sin añadir un nodo extra en el árbol del DOM. Esto es útil cuando queremos renderizar varios elementos juntos sin tener que envolverlos en un nodo adicional.

Por ejemplo, supongamos que queremos renderizar una lista de elementos sin tener que envolverlos en un elemento <ul> o <ol>. En lugar de hacer esto, podemos utilizar un fragmento: */

import React from 'react';

const List = (props) => {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </React.Fragment>
  );
};

export default List;