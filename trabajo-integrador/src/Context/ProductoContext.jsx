import { createContext, useContext, useEffect, useState } from "react";

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
    setProductos((prev) => {
    const nuevos =prev.filter(p => p.id >=1000);
      return [...nuevos, ...data];
    });
  });
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
