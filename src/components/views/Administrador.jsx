import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Table } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries.js";
import ItemProducto from "./ItemProducto.jsx";
import { Link} from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }, []);

  return (
    <Container className="mainSection">
      <Row className="my-4">
        <Col md="10">
          <h1 className="fs-1">Productos disponibles</h1>
        </Col>
        <Col md="2">
          <Link className="btn btn-primary" to="/administrar/crear">Agregar</Link>
        </Col>
        <hr />
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de img</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ItemProducto key={producto.id} producto={producto}></ItemProducto>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
