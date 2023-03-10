import React, { useEffect, useState } from 'react'

import { doc, getDoc, getDocs, getFirestore, collection, query, where, limit } from 'firebase/firestore'

const AppFire = () => {
  
  const [items, setItems] = useState()
  
  // Obtener 1 documento específico.
  useEffect(() => {
    
    const db = getFirestore() // Instancia de Firestore para poder interactuar con la base de datos.

    const djRef = doc(db, 'items', 'MJFBqjzkK8bTRkeMukyU') // El 1° parámetro de doc es la referencia a la colección. El 2° parámetro especifica el nombre del documento que se desea obtener de la colección especificada en el primer parámetro. El 3° parámetro es el ID del documento que se desea obtener. 

    getDoc(djRef).then((snapshot) => { // Obtiene el documento de Firestore y se suscribe a cualquier cambio en él. El método getDoc devuelve una promesa que se resuelve con un objeto Document Snapshot.
      if(snapshot.exists()){
        setItems({ id: snapshot.id, ...snapshot.data() }) // Se utiliza la función setItems para actualizar el estado y se pasa un objeto que incluye el ID del documento y los datos del documento como propiedades. 
      }
    })
  }, [])

  // Obtener todos los documentos sin filtros.
  useEffect(() => {
    const db = getFirestore()
    const djRefCollection = collection(db, 'items')

    getDocs(djRefCollection).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }    
    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })

  }, [])

  // Obtener todos los documentos con filtros/condiciones (where, limit):
  useEffect(() => {
    const db = getFirestore()

    const q = query(
      collection(db, 'items'),
      where('price', '>=', 150), //  Usamos 'where' para agregar un filtro a la consulta, lo que significa que sólo se devolverán los documentos que cumplan con la condición establecida (en este caso, los documentos que tengan un campo "price" con un valor mayor o igual a 150). Podemos utilizar 1 o mas 'where' por ejemplo: Traeme todos los documentos con 'price' mayor a 100 y sean de la 'category' celulares.
      limit(1)  // Usamos 'limit' para limitar en resultado máximo de documentos. En este caso que solo devuelva 1 documento.
    )

    getDocs(q).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
    })
  }, [])

  return (
    <div>
    { items &&
      <>
      <img src={items.imageId} />
      <h4>{items.title}</h4>
      <p>{items.description}</p>
      <p>Stock: {items.stock}. Precio: {items.price}</p>
      </>
    }
    </div>
  )
}

export default AppFire