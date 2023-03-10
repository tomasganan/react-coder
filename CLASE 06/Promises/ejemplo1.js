const myPromise = new Promise((resolve, reject) =>{
    // Aca se define el código que se va a ejecutar si la operación fue exitosa (resolve)
    //resolve("La operación fue EXITOSA!")
    
    // Aca se define el código que se va a ejecutar si la operación tuvo algún error (reject)
    reject("UPS! Ocurrio un error")
})

// Consumiendo la promesa en caso de éxito.

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("La operacion asincrona ha finalizado")
    })