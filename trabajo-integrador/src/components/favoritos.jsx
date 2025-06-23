import { useProductos } from "../Context/ProductoContext";
import TarjetaProductos from "./TarjetaProductos";

const Favoritos = () => {
  const { productos, favoritos } = useProductos();

  const productosFavoritos = productos.filter((p) => Favoritos.includes(p.id));

  return (
    <>
      <h1>Productos Favoritos</h1>
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
          <TarjetaProductos key={p.id} producto={p} />
        ))}
      </div>
    </>
  );
};

export default Favoritos;