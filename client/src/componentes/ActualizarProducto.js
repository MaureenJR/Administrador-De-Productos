import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ActualizarProducto = () => {
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/" + id)
            .then(res => {
                setNombre(res.data.nombre);
                setPrecio(res.data.precio);
                setDescripcion(res.data.descripcion);
            })
            .catch(err => console.log(err));
    }, [id])

    const editarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/" + id, {
            nombre,
            precio,
            descripcion
        })
            .then(res => navigate("/"))
            .catch(err => console.log(err));
    }

    return(
        <div className="card w-50 p-3 m-auto mt-5 text-center">
            <h1 className="mb-3">Editar Producto</h1>
            <form onSubmit={editarProducto}>
                <div className="mb-2 d-flex justify-content-evenly">
                    <label>Nombre:</label>
                    <input id="nombre" name="nombre" type="text" onChange={e => setNombre(e.target.value)} value={nombre}/>
                </div>
                <div className="mb-2 d-flex justify-content-evenly">
                    <label>Precio:</label>
                    <input id="precio" name="precio" type="text" onChange={e => setPrecio(e.target.value)} value={precio} className="ms-3"/>
                </div>
                <div className="mb-2 d-flex justify-content-evenly">
                    <label>Descripción:</label>
                    <input id="descripcion" name="descripcion" type="text" onChange={e => setDescripcion(e.target.value)} value={descripcion} className="me-2"/>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Actualizar Producto"/>
            </form>
        </div>
    )
}

export default ActualizarProducto;