import { useProductos } from "../Context/ProductoContext";
import TarjetaProductos from "./TarjetaProductos";

const Favoritos = () => {
  const { productos, favoritos, toggleFavorito } = useProductos();

  const productosFavoritos= productos.filter((p) => 
    favoritos.includes(p.id));
  
  return (
    <>
      <h1>Productos favoritos</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {productosFavoritos.map((p) => (
          <TarjetaProductos 
          key={p.id} 
          producto={p} 
          onfavoritetoggle={toggleFavorito}
          />
        ))}
      </div>
    </>
  );
};
export default Favoritos;