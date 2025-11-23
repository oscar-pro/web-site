import React, { useState } from 'react';

export function FormularioTarea({ alAgregar }) {
    const [texto, setTexto] = useState('');

    const manejarEnvio = (evento) => {
        // BUG CRÍTICO: Cuando tocas "Agregar", la página se recarga completa y pierdes todo.
        // Falta evitar el comportamiento por defecto del formulario.
        // Pista: evento.preventDefault()

        if (texto.trim() === '') return;

        alAgregar(texto);
        setTexto('');
    };

    return (
        <form onSubmit={manejarEnvio} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="¿Qué tienes que hacer?"
                value={texto}
            // FIXME: Escribo en el input pero no cambia nada. 
            // Falta el evento onChange para actualizar el estado.
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
}
