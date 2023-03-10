import React from 'react'

const ContactView = () => {
  return (
    <>
    <div style={{backgroundColor: 'turquoise', padding: 30}}>
    <form role="form">
        <div class="form-group">
            <label for="name">Nombre</label>
            <input type="name" class="form-control" id="name" />
        </div>
        <div class="form-group">
            <label for="email">Dirección de email</label>
            <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button style={{marginTop: 20}} type="button" class="btn btn-dark">Enviar</button>
        </form>
    </div>
    </>
  )
}

export default ContactView