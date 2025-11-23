import React from 'react';

// BUG VISUAL: El diseñador dice que el fondo debería ser blanco, pero se ve gris.
// Además, el botón de eliminar está muy pegado al texto.

export function TarjetaTarea({ tarea, alCompletar, alEliminar }) {

    // FIXME: Aquí hay un error. A veces 'tarea' llega undefined y la app explota.
    // Deberíamos verificar si tarea existe antes de intentar leer sus propiedades.

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
            backgroundColor: '#eeeeee', // <--- ¿No debería ser blanco (#ffffff)?
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                {/* BUG LÓGICO: El estilo de tachado (textDecoration: 'line-through') no se aplica cuando la tarea está completada.
            Parece que la condición está al revés o mal escrita. */}
                <span style={{ textDecoration: tarea.completada == false ? 'line-through' : 'none' }}>
                    {tarea.texto}
                </span>

                <div style={{ fontSize: '0.8em', color: '#666' }}>
                    {/* FIXME: Queremos mostrar la fecha, pero tarea.fecha es un objeto Date.
                Esto dará error si intentamos renderizarlo directamente.
                Necesitamos convertirlo a string (ej: tarea.fecha.toString()) */}
                    Creado: {tarea.fecha}
                </div>
            </div>

            <div>
                <button onClick={() => alCompletar(tarea.id)}>
                    {tarea.completada ? 'Desmarcar' : 'Completar'}
                </button>

                {/* FIXME: Este botón no hace nada cuando le haces click. Falta el evento onClick. */}
                <button style={{ marginLeft: '5px', backgroundColor: 'red', color: 'white' }}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}
