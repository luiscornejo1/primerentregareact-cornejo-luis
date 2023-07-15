import './Menu.css'

export default function Menu() {
    const lista = ['Home', 'Productos', 'Comunidad', 'Nosotros'];
    const obj=[];
    for (let i=0;i<lista.length;i++){
        obj.push({pos:i,nombre:lista[i]});
    }
    return(
        <div className="col-md-5 menu">{
            obj.map(elem=>
                <div key={elem.pos} className="menuItem">
                    <a href={`${elem.pos===0?'index':elem.nombre}.html`}>{elem.nombre}</a>
                </div>
            )}
        </div>
    )
}
