import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarProductoAPI, obtenerProductoAPI } from "../helpers/queries";

const EditarProducto = () => {
  const navegacion=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombreProducto", respuesta.dato.nombreProducto);
        setValue("precio", respuesta.dato.precio);
        setValue("imagenURL", respuesta.dato.imagenURL);
        setValue("categoria", respuesta.dato.categoria);
      }
    });
  }, []);

  const onSubmit = (datos) => {
    console.log(datos);
    editarProductoAPI(id, datos).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto editado exitsamente",
          "El producto fue correctamente actualizado",
          "success"
        );
        navegacion("/administrar");
      } else {
        Swal.fire("Error", "Intentelo mas tarde");
      }
    });
  };

  return (
    <Container className="mainSection">
      <h1>Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del  producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad de caracteres minimos es 2",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es 100",
              },
            })}
          />
          <Form className="text-danger">{errors.nombreProducto?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 1,
                message: "El minimo es $1",
              },
              max: {
                value: 10000,
                message: "El maximo es $10000",
              },
            })}
          />
          <Form className="text-danger">{errors.precio?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.imagen.com/es-es/hola-31231/"
            {...register("imagenURL", {
              required: "La URL de la imagen es obligatorio",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form className="text-danger">{errors.imagenURL?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Elegir una categoria es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida-fria">Bebida-Fria</option>
            <option value="bebida-caliente">Bebida-Caliente</option>
            <option value="dulce">Dulce</option>
          </Form.Select>
          <Form className="text-danger">{errors.categoria?.message}</Form>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarProducto;
