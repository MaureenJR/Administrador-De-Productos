import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TodosProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos")
            .then(res => {
                setProductos(res.data)
            })
            .catch(err => console.log(err));
    },[]);

    const borrarProducto = idProd => {
        axios.delete("http://localhost:8000/api/productos/" + idProd)
            .then( res => {
                let nuevaLista = productos.filter(producto => producto._id !== idProd);
                setProductos(nuevaLista);
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="mt-4">
            <h1>Administrador de Productos</h1>
            <Link to="/nuevo" className="btn btn-success mt-3">Nuevo Producto</Link>
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <Link to={`/producto/${producto._id}`} className="btn btn-primary me-3">Detalle</Link>
                                    <button className="btn btn-danger" onClick={() => borrarProducto(producto._id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodosProductos;

