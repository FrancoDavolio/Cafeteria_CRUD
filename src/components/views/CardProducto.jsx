import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?cs=srgb&dl=pexels-kshkt-kttk-887853.jpg&fm=jpg" className="w-100"/>
      <Card.Body>
        <Card.Title>Brownie</Card.Title>
        <Card.Text>
          Precio: $400
        </Card.Text>
        <hr />
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
