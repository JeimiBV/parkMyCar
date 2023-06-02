import "../styles/Card.css"
export default function Card({children, titulo, vertical }) {
    return(
        <div className={vertical?"d-flex card cardV my-md-2 my-1 p-4 ":"d-flex card cardH my-md-4 my-1 p-4 "} >
            <h3>
                {titulo}
            </h3>
            {children}
        </div>
    );
}