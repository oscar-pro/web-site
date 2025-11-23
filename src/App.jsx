import './index.css'
import { useState } from 'react'
export function Btn() {

    const [click, setclick] = useState(false);
    const TextBtn = click ? 'Dejar de seguir' : 'Seguir';
    const c = click ? 'BtnClick' : 'Btn';
    const handleclick = () => {
        setclick(!click)
    }

    return (
        <button onClick={handleclick} className={c}>{TextBtn}</button>
    )
}