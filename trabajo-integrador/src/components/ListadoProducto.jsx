import { useProductos } from "../Context/ProductoContext";
import TarjetaProductos from "./TarjetaProductos";

const ListadoProducto = () => {
  const { productos,toggleFavorito } = useProductos();

  return (
    <>
      <h1>Listado de Productos</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
                    {productos.map((p) => (
                      <TarjetaProductos key={p.id} producto={p} onfavoritetoggle={toggleFavorito} 
                      />
                    ))}
              </div>
            </>
          );
        };
        
        export default ListadoProducto;