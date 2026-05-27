import { useEffect, useState } from "react";

function ProductoForm({ productoEditando, guardarProducto }) {

const [producto, setProducto] = useState({
  nombre: "",
  descripcion: "",
  precio: "",
  stock: "",
  estado: true
});

  useEffect(() => {
    if (productoEditando) {
      setProducto(productoEditando);
    }
  }, [productoEditando]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  guardarProducto({
    ...producto,
    precio: Number(producto.precio),
    stock: Number(producto.stock),
    estado: true,
  });

  setProducto({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    estado: true,
  });
};

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={producto.nombre}
        onChange={handleChange}
      />

      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={producto.descripcion}
        onChange={handleChange}
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={producto.precio}
        onChange={handleChange}
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={producto.stock}
        onChange={handleChange}
      />

      <button type="submit">
        Guardar Producto
      </button>

    </form>
  );
}

export default ProductoForm;