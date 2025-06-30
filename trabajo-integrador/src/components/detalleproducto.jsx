import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useProductos } from "../Context/ProductoContext";
import './detalleproducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const { productos, favoritos, toggleFavorito } = useProductos();

  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const esFavorito = favoritos.includes(producto.id);

  return (
    <div className='detalle-container'>
      <img
        src={producto.image}
        alt={producto.title}
        className="detalle-img"
      />

      <div className="detalle-info">
        <h2>{producto.title}</h2>
        <p><strong>Precio:</strong> ${producto.price}</p>
        <p><strong>Categoría:</strong> {producto.category}</p>
        <p><strong>Rating:</strong> {producto.rating.rate} ({producto.rating.count})</p>
        <p>{producto.description}</p>

        <div className="detalle-botones">
          <button
            onClick={() => toggleFavorito(producto.id)}
            className="detalle-boton"
          >
            {esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          </button>

          <Link to={`/editar/${producto.id}`}>
            <button className="detalle-boton editar">Editar Producto</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
