import { useState } from "react";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/products/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/layout/Error";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Nosotros from "./components/home/Nosotros";
import DetalleProducto from "./components/products/DetalleProducto";
import "./index.css";
import Footer from './components/layout/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Lógica de autenticación aquí
    setIsAuthenticated(true);
  };

  const basename = import.meta.env.MODE === 'production' ? '/ecommerce' : '/';

  return (
    <>
      <div className='app'>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Layout isAuthenticated={isAuthenticated} handleLogin={handleLogin} />}>
              <Route index element={<Home />} />
              <Route path="productos" element={<ItemListContainer />} />
              <Route path="productos/:id" element={<DetalleProducto />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
