import "../styles/Modal.css"
export default function Modal({children}){
    return(<div className="modalContainer d-flex justify-content-center">
        <div className="modalComponent w-75">
            {children}
        </div>

    </div>)
}