import React from 'react';
import { useState } from 'react';

export function TarjetaTarea({ tarea, alEliminar }) {
    const fechaFormateada = (fecha) => {
        const fechaFormateada = new Date(fecha);
        const dia = fechaFormateada.getDate();
        const mes = fechaFormateada.getMonth() + 1;
        const anio = fechaFormateada.getFullYear();
        return `${dia}/${mes}/${anio}`;
    };

    const [Complet, setComplet] = useState(false); // pasa a true

    const completed = Complet ? 'Desmarcar' : 'Marcar'; // si pasa a true el contenido del btn => Desmarcar sino Marcar


    const id = tarea.id;
    const texto = tarea.texto;
    // const completada = tarea.completada;
    const fecha = tarea.fecha;

    const fechaFormateadaTarea = fechaFormateada(fecha);
    console.log(`${tarea}/ fecha: n${fecha}/n${id}`)// pasar todo a la consola junto al id

    const manejarCompletar = () => {
        setComplet(!Complet)
    }


    const manejarEliminar = (evento) => {
        evento.preventDefault();
        alEliminar(id);
    };

    return (
        <div style={{
            border: '2px solid #ccc',
            padding: '10px',
            margin: '10px',
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className='ContentTareasPendientes'>
                <span style={{ textDecoration: Complet ? 'line-through' : 'none', color : Complet ? 'red': 'blue'}}>  {/* lo mimso  si es true el estilo cambia y se subraya si el false se queda normal */}
                    {/* falta Eliminar el otro input  */}
                    {tarea.texto}
                </span>

                <div style={{ fontSize: '1em', color: '#666' }}>
                    Creado: {fecha}
                </div>
            </div>



            <div>
                <button onClick={manejarCompletar}>
                    {completed}
                </button>
                <button onClick={manejarEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}
