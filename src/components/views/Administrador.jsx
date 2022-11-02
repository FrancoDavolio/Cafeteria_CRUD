import React from "react";
import { Container, Button, Row, Col, Table } from "react-bootstrap";

const Administrador = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md="10">
          <h1 className="fs-1">Productos disponibles</h1>
        </Col>
        <Col md="2">
          <Button>Agregar</Button>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Dulce</td>
            <td><Button variant="warning">Editar</Button><br /><Button variant="danger">Borrar</Button></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
