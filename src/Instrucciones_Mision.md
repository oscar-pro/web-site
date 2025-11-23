# 📧 Nuevo Correo: URGENTE - Arreglar el Tablero de Tareas

**De:** Jefe de Proyecto
**Para:** Nuevo Desarrollador (Tú)
**Asunto:** El becario anterior rompió todo... ayuda.

Hola,

Bienvenido al equipo. Sé que es tu primer día, pero tenemos una emergencia. El desarrollador anterior intentó hacer un "Tablero de Tareas" simple antes de irse, pero nada funciona.

La aplicación compila (a veces), pero está llena de errores:
1.  No se pueden agregar tareas nuevas (la página se recarga o no pasa nada).
2.  Las tareas no se marcan como completadas correctamente.
3.  Hay errores raros en la consola sobre "keys".
4.  El diseño se ve extraño en las tarjetas.

**Tu Misión:**
Abre los archivos en `src/components` y busca los comentarios que dejé marcados como `FIXME` (Arréglame) o `BUG`.
Necesitamos que esto funcione para la demo de mañana.

¡Buena suerte!

---

## Pistas para empezar

1.  Ve a `src/components/FormularioTarea.jsx`. Algo pasa cuando envías el formulario.
2.  Revisa `src/components/TableroTareas.jsx`. Parece que el estado se está modificando mal.
3.  Mira `src/components/TarjetaTarea.jsx`. Hay estilos que no cuadran.
