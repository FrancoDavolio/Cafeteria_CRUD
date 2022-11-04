import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import CrearProducto from "./components/views/CrearProducto";
import EditarProducto from "./components/views/EditarProducto";
import CardProducto from "./components/views/CardProducto";
import DetalleProducto from "./components/views/DetalleProducto";
import "./App.css"
import Login from "./components/views/Login";
import Register from "./components/views/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/menu" element={<Menu></Menu>}></Route>
          <Route exact path="/footer" element={<Footer></Footer>}></Route>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/register" element={<Register></Register>}></Route>
          <Route
            exact
            path="/inicio/card"
            element={<CardProducto></CardProducto>}
          ></Route>
          <Route
            exact
            path="/inicio/detalle"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/administrar/crear"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route
            exact
            path="/administrar/editar"
            element={<EditarProducto></EditarProducto>}
          ></Route>
          <Route
            exact
            path="/administrar"
            element={<Administrador></Administrador>}
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
