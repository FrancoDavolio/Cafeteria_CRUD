import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Card style={{ width: "18rem" }} className="my-3">
      <Card.Img variant="top" src={producto.imagenURL} className="foto"/>
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          Precio: ${producto.precio}
        </Card.Text>
        <hr />
        <Link className="btn btn-primary" to={`/inicio/detalle/${producto.id}`}>Ver mas</Link>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
