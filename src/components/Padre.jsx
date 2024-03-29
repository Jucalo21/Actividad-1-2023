import React, { useState } from 'react'
import { Hijo } from './Hijo'
import { Hijo2 } from './Hijo2'
import './card.css'

const datos = [
    {
    titulo: "Café",
    imagen: "https://www.portafolio.co/files/article_main/uploads/2021/11/20/6199a09028f1d.jpeg",
    texto: "",
    detalles: <button>Detalles</button>,
    contador:""
    },
    {
    titulo: "Pizza",
    imagen: "https://www.saborusa.com/hn/wp-content/uploads/sites/12/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
    texto: "",
    detalles: <button>Detalles</button>,
    contador:""
    },
    {
    titulo: "Perro Caliente",
    imagen:"https://images-gmi-pmc.edge-generalmills.com/f5a517df-12c8-4d55-aa70-c882d99122e0.jpg",
    texto: "",
    detalles: <button>Detalles</button>,
    contador:""
    },
    {
    titulo:"Coca Cola",
    imagen:"https://cdn.shopify.com/s/files/1/0492/2458/1274/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_1.5l_nr_bebidas_liquidas_700x700.jpg?v=1620489417",
    texto: "",
    detalles: <button>Detalles</button>,
    contador:""
    },
    {
        titulo:"Papa frita",
        imagen:"https://comidaschilenas.com/wp-content/uploads/2020/01/Receta-de-papas-fritas-perfectas.jpg",
        texto: "",
        detalles: <button>Detalles</button>,
        contador:""
    },
    {
        titulo :"Pepsi",
        imagen:"https://dumbosalsa.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNVB2V0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f202436c549471fd2d0068f8a23419f865a68a90/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/Gaseosa%20Pepsi%20X%201.5Lt%20(Bebidas).png?locale=en",
        texto: "",
        detalles: <button>Detalles</button>,
        contador:""
    }
];

export const Padre = () => {
const [cont, setCont] = useState(0)

function actualizarContador(nuevoValor) {
    setCont(nuevoValor);
}

    return (
        <div className="card-list">
        <hr />
        <Hijo2 className="Footer-box" actualizarContador={actualizarContador}
        contador={cont}
        />
        {
            datos.map((producto, index)=>(
                <Hijo
                key={index}
                titulo={producto.titulo}
                imagen={producto.imagen}
                texto={producto.texto}
                contador={cont}
                boton="Detalles"
                />
            ))
        }
        
        </div>
    )
}
