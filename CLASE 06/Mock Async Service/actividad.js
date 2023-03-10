// MOCK ASYNC SERVICE

// Array de objetos de tipo producto

const products = [
  {id: '1', name: 'Coca cola', description: 'Bebida sin alcohol', stock: 5},
  {id: '2', name: 'Fideos', description: '100% trigo', stock: 10},
  {id: '3', name: 'Yerba Nacional', description: 'Sabor garantizado', stock: 12}
]

// Promesa que resuelva/muestre en tres segundos. (ANEXO: Validación si el array viene vacio)

const getProducts = new Promise((resolve, reject) => {
   setTimeout(() => {
    if(products.length){
      resolve(products) 
    } else {
      reject("No hay productos para mostrar")
    }
   }, 3000) 
})

// Consumir la promesa

getProducts
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})