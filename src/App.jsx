import { useEffect, useState } from "react";
import ProductoForm from "./components/ProductoForm";
import ProductoList from "./components/ProductoList";
import {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from "./services/productoService";

import "./styles/style.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  const cargarProductos = async () => {
    const data = await listarProductos();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const guardarProducto = async (producto) => {
    if (producto.id) {
      await actualizarProducto(producto.id, producto);
      setProductoEditando(null);
    } else {
      await crearProducto(producto);
    }

    cargarProductos();
  };

  const editarProducto = (producto) => {
    setProductoEditando(producto);
  };

  const borrarProducto = async (id) => {
    await eliminarProducto(id);
    cargarProductos();
  };

  return (
    <div className="container">
      <h1>Inventario Smart</h1>
      <p>Sistema web para gestionar productos y controlar stock.</p>

      <ProductoForm
        productoEditando={productoEditando}
        guardarProducto={guardarProducto}
      />

      <ProductoList
        productos={productos}
        editarProducto={editarProducto}
        eliminarProducto={borrarProducto}
      />
    </div>
  );
}

export default App;