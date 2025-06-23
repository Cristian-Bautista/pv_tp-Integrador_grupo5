import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductos } from "../Context/ProductoContext";

const ProductoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productos, setProductos } = useProductos();

  const esEdicion = Boolean(id);
  const productoExistente = productos.find(p => p.id === parseInt(id));

  const [formulario, setformulario] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  useEffect(() => {
    if (esEdicion && productoExistente) {
      setformulario({
        title: productoExistente.title,
        price: productoExistente.price,
        description: productoExistente.description,
        category: productoExistente.category,
        image: productoExistente.image
      });
    }
  }, [esEdicion, productoExistente]);


const handleChange = (e) => {
    const { name, value } = e.target;
    setformulario(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (esEdicion) {
      setProductos(prev =>
        prev.map(p => 
          p.id === parseInt(id) ? { ...p, ...formulario } : p
        )
      );
    } else {
      const nuevoProducto = {
        id: Date.now(), // Generar un ID único
        ...formulario
      };
      setProductos(prev => [...prev, nuevoProducto]);
    }

    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{esEdicion ? "Editar Producto" : "Crear Nuevo Producto"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formulario.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={formulario.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={formulario.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={formulario.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={formulario.image}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {esEdicion ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </form>
    </div>
  );
};

export default ProductoForm;
