import { useParams } from "react-router-dom";
import { useProductos } from "../Context/ProductoContext";

const DetalleProducto = () => {
  const { id } = useParams();
  const { productos, favoritos, toggleFavorito } = useProductos();

  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }
  
  const esFavorito = favoritos.includes(producto.id);

  return (
    <div style={{ padding: "2rem", display: "flex", gap: "2rem", alignItems: "center" }}>
      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <div>
        <h2>{producto.title}</h2>
        <p><strong>Precio:</strong> ${producto.price}</p>
        <p><strong>Categoría:</strong> {producto.category}</p>
        <p><strong>Rating:</strong> {producto.rating.rate} ({producto.rating.count})</p>
        <p>{producto.description}</p>

        <button onClick={() => toggleFavorito(producto.id)}>
          {esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </button>

         <br /> <br />
        <Link to={`/editar/${producto.id}`}>
          <button>Editar Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default DetalleProducto;
