import "../styles/Modal.css"
export default function Modal({children, titulo}){
    return(<div className="modalContainer d-flex justify-content-center">
        <div className="modalComponent w-75">
            <h2 className="text-center p-3">{titulo}</h2>
            {children}
        </div>

    </div>)
}