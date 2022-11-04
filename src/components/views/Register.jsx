import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log("desde mi funsion submit");
    console.log(datos);
  };

  return (
    <Container className="mainSection">
      <h1>Register</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Franco012"
            {...register("usuario", {
              required: "El usuario es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad de caracteres minimos es 2",
              },
              maxLength: {
                value: 20,
                message: "La cantidad maxima de caracteres es 100",
              },
            })}
          />
          <Form className="text-danger">{errors.usuario?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: holamundo123@gmail.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message:
                  "Por favor ponga un email valido",
              },
            })}
          />
          <Form className="text-danger">{errors.email?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="pasword"
            placeholder="Ej: holamundo123"
            {...register("contrasena", {
              required: "La contraseña es obligatorio",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                message:
                  "Siga estas intrucciones: Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial",
              },
            })}
          />
          <Form className="text-danger">{errors.contrasena?.message}</Form>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
