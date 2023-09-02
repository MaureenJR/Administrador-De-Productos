import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const VerProducto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState ({});

    useEffect (() => {
        axios.get ("http://localhost:8000/api/productos/" + id)
            .then( res => {
                setProducto(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <div className="card w-50 p-3 m-auto mt-5">
            <h1>{producto.nombre}</h1>
            <h2>{producto.precio}</h2>
            <p>
                {producto.descripcion}
            </p>
            <Link to="/" className="btn btn-primary">Regresar</Link>
        </div>
    )
}

export default VerProducto;
