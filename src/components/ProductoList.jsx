function ProductoList({ productos, editarProducto, eliminarProducto }) {
    return (
        <div className="productos-grid">
            {productos.map((producto) => (
                <div key={producto.id} className="card">
                    <h3>{producto.nombre}</h3>

                    <p>{producto.descripcion}</p>

                    <p>
                        <strong>Precio:</strong> S/ {producto.precio}
                    </p>

                    <p>
                        <strong>Stock:</strong> {producto.stock}
                    </p>

                    <p>
                        <strong>Estado:</strong>{" "}
                        {producto.estado ? "Activo" : "Inactivo"}
                    </p>

                    {producto.stock <= 5 && (
                        <p className="alerta">⚠ Stock bajo</p>
                    )}

                    <button onClick={() => editarProducto(producto)}>
                        Editar
                    </button>

                    <button
                        onClick={() => {
                            const confirmar = window.confirm(
                                `¿Deseas eliminar el producto ${producto.nombre}?`
                            );

                            if (confirmar) {
                                eliminarProducto(producto.id);
                            }
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductoList;