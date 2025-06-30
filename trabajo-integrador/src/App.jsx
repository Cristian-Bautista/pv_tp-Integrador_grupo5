import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./Context/ProductoContext";
import Navbar from "./components/navbar";
import ListadoProducto from "./components/ListadoProducto";
import Favoritos from "./components/favoritos";
import DetalleProducto from "./components/detalleproducto";
import ProductoForm from "./components/productoform";
import Home from "./pages/Home";
import './App.css';
import Login  from "./pages/Login";
import Register from "./components/register";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <ProductosProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

           
            <Route path="/home" element={<Home />} />
            <Route
              path="/"

              element={
                <PrivateRoute>
                  <ListadoProducto />
                </PrivateRoute>
              }
            />
            <Route
              path="/crear"
              element={
                <PrivateRoute>
                  <ProductoForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/editar/:id"
              element={
                <PrivateRoute>
                  <ProductoForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/detalle/:id"
              element={
                <PrivateRoute>
                  <DetalleProducto />
                </PrivateRoute>
              }
            />
            <Route
              path="/favoritos"
              element={
                <PrivateRoute>
                  <Favoritos />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </ProductosProvider>
    </AuthProvider>
  );
};

export default App;