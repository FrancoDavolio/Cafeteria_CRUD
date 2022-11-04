const URL = process.env.REACT_APP_API_CAFE

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL)
    const listaProductos = await respuesta.json()
    return listaProductos
  } catch (e) {
    console.log(e)
  }
}

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    })
    return respuesta
  } catch (e) {
    console.log(e)
  }
}

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + '/' + id, {
      method: 'DELETE',
    })
    return respuesta
  } catch (e) {
    console.log(e)
  }
}

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + '/' + id)
    const producto ={
      dato: await respuesta.json(),
      status: respuesta.status
    }
    return producto;
  } catch (e) {
    console.log(e)
  }
}
