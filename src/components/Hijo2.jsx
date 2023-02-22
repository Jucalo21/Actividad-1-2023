import React, { useState } from 'react'

export const Hijo2 = (props) => {
    function Incrementar() {
        props.actualizarContador((prevContador) => prevContador + 1);
    }

    function Decrementar() {
        props.actualizarContador((prevContador) => prevContador - 1);
    }

    function Resetear() {
        props.actualizarContador(0);
    }

return (
    <div className='footer-box'>
        <button onClick={Incrementar}>Incrementar</button>
        <button onClick={Decrementar}>Decrementar</button>
        <button onClick={Resetear}>Resetear</button>
    </div>
)
}
