import { createContext, useContext, useEffect, useState } from "react";

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  
  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        favoritos,
        toggleFavorito,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductos = () => useContext(ProductosContext);
