const API_URL = "https://ms-productos-3orp.onrender.com/api/productos";

export async function listarProductos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  const data = await response.json();

  console.log("PRODUCTOS:", data);

  return data;
}

export async function crearProducto(producto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  return response.json();
}

export async function actualizarProducto(id, producto) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  return response.json();
}

export async function eliminarProducto(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}