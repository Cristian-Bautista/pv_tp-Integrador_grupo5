import { Link } from 'react-router-dom';
import { useProductos } from '../Context/ProductoContext';  
import"./TarjetaProducto.css";
const TarjetaProductos=({ producto, onfavoritetoggle }) => {
    const { favoritos } = useProductos();
    const esFavorito = favoritos.includes(producto.id);

    return (
        <div className='tarjeta-producto'>
            <img
                src={producto.image}
                alt={producto.title}
                className='producto-img'
                 />

            <h3>{producto.title}</h3>
            <p><strong>Precio:</strong> ${producto.price}</p>            
           
            
            <button onClick={() => onfavoritetoggle(producto.id)}>
                {esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
            </button>

            <Link to={`/detalle/${producto.id}`}>
                <button>Ver mas</button>
            </Link>

        </div>
    );
}

export default TarjetaProductos;