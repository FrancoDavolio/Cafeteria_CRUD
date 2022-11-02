import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardProducto from './CardProducto';

const Inicio = () => {
    return (
        <Container>
            <h1 className='text-center display-1 my-5'>Bienvenidos</h1>
            <hr />
            <Row>
                <Col md="3">
                    <CardProducto></CardProducto>
                </Col>
            </Row>
        </Container>
    );
};

export default Inicio;