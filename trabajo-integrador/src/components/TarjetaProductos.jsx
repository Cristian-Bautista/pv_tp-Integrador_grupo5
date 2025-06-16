const TarjetaProductos = ({ producto }) =>{
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            width: '250px',
            textAlign: 'center'
        }}>
            {/*imagen del producto para menter proporcionados dentro del espacio*/}
            <img
            src={producto.imagen}
            alt={producto.title}
            style={{width: '100%',height:'200px', objectFit: 'contain'}}
            ></img>
            
              <h3>{producto.title}</h3>
                <p><strong>Precio:</strong> ${producto.price}</p> 
                <p><strong>Categoria:</strong> {producto.category}</p>
                <p><strong>Rating:</strong> {producto.rating.rate} ({producto.rating.count})</p>
                <button>Ver mas</button>

        </div>
    );
};

export default TarjetaProductos;