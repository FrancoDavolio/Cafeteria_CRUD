import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, consultarAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, setProducto }) => {
  
  const borrarProducto = () => {
    borrarProductoAPI(producto.id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto fue eliminado",
          "El producto fue eliminado exitosamente",
          "success"
        );
        consultarAPI().then((respuesta) => {
          setProducto(respuesta);
        });
      } else {
        Swal.fire("Ocurrio un error", "intentelo mas tarde", "error");
      }
    });
  };

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td>{producto.imagenURL}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link
          className="btn btn-warning"
          to={`/administrar/editar/${producto.id}`}
        >
          Editar
        </Link>
        <br />
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
