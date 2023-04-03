import "../styles/Plaza.css"
export default function Plaza({datos}){
    return(datos?<div className="col-5   m-1">
        <button className="btn btn-success plazaC">
        <i class="fa-solid fa-road-circle-check  fs-1 w-100"></i>              
         </button>
    </div>:<div className="col-5 m-1">
        <button className=" btn btn-danger plazaC">
        <i class="fa-solid fa-car fs-1 w-100"></i>
        </button>
    </div>)
}