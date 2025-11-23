import React, { useState } from 'react';

export function FormularioTarea({ alAgregar }) {

    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getMonth() + 1;
    const year = fecha.getFullYear();
    const fechaFormateada = `${day}/${month}/${year}`;
    const completada = false;
    const [texto, setTexto] = useState('');



    const manejarEnvio = (evento) => {
        evento.preventDefault();
        alAgregar(texto, fechaFormateada, completada);
        setTexto('');
    };

    // en este hay un error 

    return (
        <form onSubmit={manejarEnvio}>
            <input type="text" value={texto} onChange={(evento) => setTexto(evento.target.value)} />
            <button type="submit">Agregar</button>
        </form>
    );
}
   
