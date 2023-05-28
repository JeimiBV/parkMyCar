import "../styles/Plaza.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../tasks/taskSlice";

export default function Plaza({datos}) {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    
    return (
        <div className="col-5 m-1 ">
            <button className="btn plazaC fs-1 " onClick={() => { navigate("/listaReserva"); dispatch(addTask({
                plaza:datos.num,
                id:datos.id
            })) }}>
                {datos.num}
            </button>
        </div>)
}