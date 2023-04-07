import "../styles/Plaza.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../tasks/taskSlice";



export default function Plaza({ datos  }) {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    return (
        <div className="col-5 m-1">
            <button className="btn btn-success plazaC" onClick={() => { navigate("/listaReserva"); dispatch(addTask({datos})) }}>
                <i class="fa-solid fa-road-circle-check  fs-1 w-100"></i>
            </button>
        </div>)
}
