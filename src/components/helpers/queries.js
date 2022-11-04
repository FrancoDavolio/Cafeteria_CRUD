const URL = process.env.REACT_APP_API_CAFE;

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (e) {
    console.log(e);
  }
}
