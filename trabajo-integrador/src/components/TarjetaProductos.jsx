import { Link } from 'react-router-dom';
const TarjetaProductos=({ producto, onfavoritetoggle }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            width: '250px',
            textAlign: 'center'
        }}>
            <img
                src={producto.image}
                alt={producto.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }} />

            <h3>{producto.title}</h3>
            <p><strong>Precio:</strong> ${producto.price}</p>
            <p><strong>Categoria:</strong> {producto.category}</p>
            <p><strong>Rating:</strong> {producto.rating.rate} ({producto.rating.count})</p>
            <button onClick={() => onfavoritetoggle(producto.id)}> favoritos</button> 
            <Link to={`/detalle/${producto.id}`}>
                <button>Ver mas</button>
            </Link>

        </div>
    );
}

export default TarjetaProductos;