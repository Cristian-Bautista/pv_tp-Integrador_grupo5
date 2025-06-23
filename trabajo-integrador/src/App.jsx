import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./Context/ProductoContext";
import Navbar from "./components/navbar";
import ListadoProducto from "./components/ListadoProducto";
import Favoritos from "./components/favoritos";
import DetalleProducto from "./components/detalleproducto";
import ProductoForm from "./components/productoform";
import Home from "./pages/Home";
function App() {
  return (
    <ProductosProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<ListadoProducto />} />
          <Route path="/detalle/:id" element={<DetalleProducto />} /> 
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="/crear" element={<ProductoForm />} />
          <Route path="/editar/:id" element={<ProductoForm />} /> 
        </Routes>
      </Router>
    </ProductosProvider>
  );
}

export default App;
