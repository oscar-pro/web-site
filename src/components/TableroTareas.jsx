import React, { useState } from 'react';
import { FormularioTarea } from './FormularioTarea.jsx';
import { TarjetaTarea } from './TarjetaTarea.jsx';

export function TableroTareas() {

    const FechaActual = new Date();
    const DiaActual = FechaActual.getDate();
    const MesActual = FechaActual.getMonth() + 1;
    const AnioActual = FechaActual.getFullYear();
    const fechaFormateada = `${DiaActual}/${MesActual}/${AnioActual}`;

    const completada = false;

    const [tareas, setTareas] = useState([]);
        const agregarTarea = (texto) => {
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: texto,
            completada: completada,
            fecha: fechaFormateada
        };
        setTareas([...tareas, nuevaTarea]);
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
    };
    
    return (
        <div className="TableroTareas">
            <h1>📋 Tablero de tareas pendientes</h1>
            <FormularioTarea alAgregar={agregarTarea} />
            <div>
                {tareas.map((tarea) => (
                    <TarjetaTarea
                        tarea={tarea}
                        alEliminar={eliminarTarea}
                        key={tarea.id}
                    />
                ))}
            </div>
        </div>
    );
}
