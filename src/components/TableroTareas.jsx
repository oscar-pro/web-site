import React, { useState } from 'react';
import { FormularioTarea } from './FormularioTarea';
import { TarjetaTarea } from './TarjetaTarea';

export function TableroTareas() {
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Arreglar el servidor', completada: false, fecha: new Date() },
        { id: 2, texto: 'Comprar café', completada: true, fecha: new Date() },
    ]);

    const agregarTarea = (texto) => {
        const nuevaTarea = {
            id: Math.random(), // (Esto es aceptable por ahora)
            texto: texto,
            completada: false,
            fecha: new Date()
        };

        // BUG: Esto es una MUTACIÓN DIRECTA del estado. React no se entera de que cambió.
        // NUNCA hagas .push() directamente al estado.
        // Tienes que usar setTareas([...tareas, nuevaTarea])
        tareas.push(nuevaTarea);
    };

    const toggleCompletada = (id) => {
        // FIXME: Aquí intentamos actualizar una tarea, pero la lógica es confusa.
        // Queremos crear un NUEVO array con la tarea modificada.
        const nuevasTareas = tareas.map(t => {
            if (t.id === id) {
                t.completada = !t.completada; // <-- Otra mutación directa :(
                return t;
            }
            return t;
        });
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (id) => {
        // TODO: Implementar la lógica para eliminar una tarea usando .filter()
        alert("Funcionalidad de eliminar aún no implementada para el ID: " + id);
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Arial' }}>
            <h1>📋 Tablero de Equipo</h1>

            <FormularioTarea alAgregar={agregarTarea} />

            <div>
                {tareas.map((tarea) => (
                    // BUG: React se queja en la consola sobre "Missing key prop".
                    // Necesitamos agregar key={tarea.id} aquí.
                    <TarjetaTarea
                        tarea={tarea}
                        alCompletar={toggleCompletada}
                        alEliminar={eliminarTarea}
                    />
                ))}
            </div>
        </div>
    );
}
