import "../styles/Table.css"
export default function Table({datos}){
    return (<div className="tablePrincipal   d-flex justify-content-center">
        <section className="tablaContenedor w-75 rounded-4">
        <div className="cabeceraTable row p-3 ">
            <h4 className="col text-center"> Hora </h4>
            <h4 className="col text-center"> Nombre </h4>
            <h4 className="col text-center"> Placa </h4>
            <hr />
        </div>
         {
            datos.map(dato=>(<div className="cuerpoTable row p-3">
            <h5 className="col text-center">{dato.hora}</h5>
            <h5 className="col text-center">{dato.nombre}</h5>
            <h5 className="col text-center">{dato.placa}</h5>
        </div>))
         }
        </section>
        </div>)
}