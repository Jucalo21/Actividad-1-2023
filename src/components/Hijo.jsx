import React from 'react'
import './card.css'

export const Hijo = (props) => {
return (
    <div className="card">
        <h2>{props.titulo}</h2>
        <img src={props.imagen} alt={props.titulo}/>
        <h4>contador:</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis semper nisi eu luctus. Vestibulum.</p>
        <button>Detalle</button>
    </div>
)
}