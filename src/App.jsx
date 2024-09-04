// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Encabezado from "./componentes/Encabezado";
import Productos from "./componentes/Productos";
import Carrito from "./componentes/Carrito";
import Nosotros from "./componentes/Nosotros"; // Importa el nuevo componente
import ProductDetails from "./componentes/ProductDetails"; // Importa el componente ProductDetails
import WhatsAppIcon from "./componentes/WhatsAppIcon";
import Footer from "./componentes/Footer"; // Importa el componente Footer
import { CartProvider } from "./componentes/CartContext";
import "./componentes/styles/Encabezado.css";
import "./componentes/styles/whatsapp-icon.css";
import "./componentes/styles/carrito.css";


const App = () => {
  return (
    
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Encabezado /><Productos /></>} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nosotros" element={<Nosotros />} /> {/* Ruta para la nueva página */}
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Ruta para los detalles del producto */}
        </Routes>
        <WhatsAppIcon />
        <Footer /> {/* Añade el Footer al final */}
      </CartProvider>
    </Router>
  );
};

export default App;





