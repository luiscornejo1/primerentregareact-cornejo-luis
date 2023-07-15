import './Categorias.css'

let carreras = [
    {nombre:'polos'},
    {nombre:'camisetas'},
    {nombre:'zapatillas'},
    {nombre:'relojes'},
    {nombre:'peines'},
]

export default function Categorias() {
    return(
        <div className="Categorias">
            {
                carreras.map(elm=>(
                    <div key={elm.nombre} className="categoria-elemento">{ elm.nombre }</div>
                ))
            }
        </div>
    )
}