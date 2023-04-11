import { useNavigate } from "react-router-dom";
import "../styles/PagesStyles/Parqueo.css";


export default function BloqueP({ tittle, space, plazas, setPlazas }) {

    const navigate = useNavigate();

    const handleClick = (index) => {
      const newPlazas = plazas.map((plaza, i) =>
        i === index ? { ...plaza, disponible: !plaza.disponible } : plaza
      );
      setPlazas(newPlazas);
      navigate("/reservas");
    };

    return (
        <div className="col col-sm-6 d-flex flex-column text-center justify-content-center">
            <div className="titulo-auto">{tittle}</div>
            <div className="alinear-columnas">
                <div className="clase-linea">
                    <div className="plazas-column">
                        {plazas.slice(space, space + 6).map((plaza, index) => (
                            <div key={index + space} className="plaza-container m-0 mx-2">
                                <div className="horizontal-line" />
                                {plaza.existe && (
                                    <button
                                    
                                        onClick={() => handleClick(index + space)}
                                        disabled={!plaza.disponible}
                                        className={`plaza-button ${plaza.disponible ? "disponible" : "ocupado"
                                            }`}
                                    >

                                        {plaza.disponible ? `Plaza ${index + space + 1}` : "Ocupado"}

                                        {index + space === 0 && tittle == "Automovil" &&(
                                            <div className="iconos">
                                                <i class="fa fa-wheelchair logo-dis " aria-hidden="true"></i>
                                            </div>                                           
                                        )
                                    }
                                    </button>

                                    
                                )}
                                {!plaza.existe && (
                                    <button className="opacity-0 plaza-button placeholder" disabled>Plaza 6</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="linea-vertical"></div>
                </div>

                <div className="plazas-column">
                    {plazas.slice(space + 6, space + 12).map((plaza, index) => (
                        <div key={index + space + 6} className="plaza-container m-0 mx-2">
                            <div className="horizontal-line" />
                            {plaza.existe && (
                                <button
                                    onClick={() => handleClick(index + space + 6)}
                                    disabled={!plaza.disponible}
                                    className={`plaza-button ${plaza.disponible ? "disponible" : "ocupado"
                                        }`}
                                >
                                    {plaza.disponible ? `Plaza ${index + space + 6 + 1}` : "Ocupado"}

                                    {index + space === 0 && tittle == "Automovil" &&(
                                        <div className="iconos">
                                                <i class="fa fa-wheelchair logo-dis " aria-hidden="true"></i>
                                            </div> 
                                        )
                                    }
                                </button>
                            )}
                            {!plaza.existe && (
                                <button className="opacity-0 plaza-button placeholder" disabled>Plaza 25 </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}