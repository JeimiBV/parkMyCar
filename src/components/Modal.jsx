import "../styles/Modal.css"
export default function Modal({children, titulo, mostrar}){
    return( mostrar?<div className="modalContainer d-flex justify-content-center position-absolute ">
    <div className="modalComponent ">
        <h2 className="text-center p-3">{titulo}</h2>
        {children}
    </div>

</div>:<></>)
}