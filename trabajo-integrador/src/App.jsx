import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./Context/ProductoContext";
import Home from "./pages/Home";

function App() {
  return (
    <ProductosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </ProductosProvider>
  );
}

export default App;
