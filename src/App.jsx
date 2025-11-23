import './index.css'
import { TableroTareas } from './components/TableroTareas.jsx'

// ¡Bienvenido a tu primer día!
// Esta es la aplicación principal. Ahora mismo renderiza el Tablero de Tareas.
// No necesitas tocar mucho aquí, el problema está dentro de los componentes.

export default function App() {
    return (
        <div className="app-container">
            <TableroTareas />
        </div>
    )
}