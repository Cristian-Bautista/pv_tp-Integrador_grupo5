import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductos } from "../Context/ProductoContext";
import './productoform.css';


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
    image: "",
    rating:{
      rate: "",
      count:"",
    },
  });

  useEffect(() => {
    if (esEdicion && productoExistente) {
      setformulario({
        title: productoExistente.title,
        price: productoExistente.price,
        description: productoExistente.description,
        category: productoExistente.category,
        image: productoExistente.image,
        rating: {
          rate: productoExistente.rating.rate,
          count: productoExistente.rating.count,
        }
      });
    }
  }, [esEdicion, productoExistente]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setformulario(prev => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value
        }
      }));
    }else{
    setformulario(prev => ({ ...prev, [name]: value }));
    }
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
    <div className="form-container">
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
          />
        <select
  name="category"
  value={formulario.category}
  onChange={handleChange}
  required
          style={{
            padding: '1rem',
    fontSize: '1rem',
    width: '100%',
    borderRadius: '9px' 
          }}
>
  <option value="">Categoría</option>
  <option value="calzado">Calzado</option>
  <option value="ropa">Ropa</option>
  <option value="herramienta">Herramienta</option>
  <option value="casa">Casa</option>
  <option value="objetos">Objetos</option>
</select>


        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={formulario.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.1"
          name="rate"
          placeholder="Calificar"
          value={formulario.rating.rate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="count"
          placeholder="Cantidad de Venta"
          value={formulario.rating.count}
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
