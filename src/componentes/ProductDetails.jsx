import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import './styles/productDetails.css';

const products = {
  residuos: [
    { id: 1, name: 'Residuos', description: 'Bolsa resistente', color: 'Verde', medida: '40x50cm', cantidad: 100, price: 6000, micronaje: '25 micrones', image: '/img/bolsaR.png' },
    { id: 2, name: 'Residuos', description: 'Bolsa resistente', color: 'Verde', medida: '40x60cm', cantidad: 100, price: 6500, micronaje: '25 micrones', image: '/img/bolsaR.png' },
    { id: 3, name: 'Residuos', description: 'Bolsa resistente', color: 'Verde', medida: '50x60cm', cantidad: 100, price: 7000, micronaje: '25 micrones', image: '/img/bolsaR.png' },
    { id: 4, name: 'Residuos', description: 'Bolsa resistente', color: 'Verde', medida: '50x70', cantidad: 100, price: 8000, micronaje: '25 micrones', image: '/img/bolsaR.png' },
    { id: 5, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '60x70cm', cantidad: 100, price: 9500, micronaje: '35 micrones', image: '/img/bolsaR.png' },
    { id: 6, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '60x80cm', cantidad: 100, price: 9900, micronaje: '35 micrones', image: '/img/bolsaR.png' },
    { id: 7, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '60x90cm', cantidad: 100, price: 10500, micronaje: '35 micrones', image: '/img/bolsaR.png' },
    { id: 8, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '80x90cm', cantidad: 100, price: 13900, micronaje: '38 micrones', image: '/img/bolsaR.png' },
    { id: 9, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '80x100cm', cantidad: 100, price: 14700, micronaje: '38 micrones', image: '/img/bolsaR.png' },
    { id: 10, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '80x110cm', cantidad: 100, price: 15500, micronaje: '38 micrones', image: '/img/bolsaR.png' },
    { id: 11, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '90x100cm', cantidad: 100, price: 16500, micronaje: '38 micrones', image: '/img/bolsaR.png' },
    { id: 12, name: 'Residuos', description: 'Bolsa resistente', color: 'Negro', medida: '90x110cm', cantidad: 100, price: 17200, micronaje: '38 micrones', image: '/img/bolsaR.png' },
  
  ],
  camisetas: [
    { id: 13, name: 'Camiseta', description: 'Bolsa resistente con manijas, espesor 25m', color: 'Verde', medida: '40x50cm', cantidad: 100, price: 9000, micronaje: '25 micrones', image: '/img/camiseta.png' },
    { id: 14, name: 'Camiseta', description: 'Bolsa resistente con manijas, espesor 15m', color: 'Blanco', medida: '40x50cm', cantidad: 1000, price: 20000, micronaje: '15 micrones', image: '/img/camiseta.png' },
    { id: 15, name: 'Camiseta', description: 'Bolsa resistente con manijas, espesor 25m', color: 'Verde', medida: '40x50cm', cantidad: 1000, price: 28000, micronaje: '25 micrones', image: '/img/camiseta.png' },
    { id: 16, name: 'Camiseta', description: 'Bolsa resistente con manijas, espesor 25m', color: 'Verde', medida: '50x60cm', cantidad: 1000, price: 55000, micronaje: '25 micrones', image: '/img/camiseta.png' },
    { id: 17, name: 'Camiseta', description: 'Bolsa resistente con manijas, espesor 25m', color: 'Verde', medida: '50x70cm', cantidad: 1000, price: 63000, micronaje: '25 micrones', image: '/img/camiseta.png' },
  ],
  clipcords: [
    { id: 18, name: 'Tubo clipcord', description: 'Tubo plastico para cubrir cables u otros elementos', color: 'Negro', medida: '10x100cm', cantidad: 500, price: 15000, micronaje: '25 micrones', image: '/img/clipcord.png' },
    { id: 19, name: 'Tubo clipcord', description: 'Tubo plastico para cubrir cables u otros elementos', color: 'Negro', medida: '15x100cm', cantidad: 500, price: 18000, micronaje: '25 micrones', image: '/img/clipcord.png' },
    { id: 20, name: 'Tubo clipcord', description: 'Tubo plastico para cubrir cables u otros elementos', color: 'Negro', medida: '20x100cm', cantidad: 500, price: 21000, micronaje: '25 micrones', image: '/img/clipcord.png' },
  ],
  arranque: [
    { id: 21, name: 'Bolsas de arranque', description: 'Bobina transparente alta calidad y resistente 750gr', color: 'transparente', medida: '25x35cm', cantidad: 1, price: 7000, micronaje: '15 micrones', image: '/img/arranque.png' },
    { id: 22, name: 'Bolsas de arranque', description: 'Bobina transparente alta calidad y resistente 750gr', color: 'transparente', medida: '20x40cm', cantidad: 1, price: 6000, micronaje: '15 micrones', image: '/img/arranque.png' },
  ],
  bobina: [
    { id: 10, name: 'Bobina de consorcio', description: 'Bobina negra de 20kg sin cortar', color: 'Negro', medida: '60cm ancho', cantidad: 1, price: 30000, micronaje: '60 micrones', image: '/img/bobinaN.png' },
    { id: 11, name: 'Bobina de consorcio', description: 'Bobina negra de 30kg sin cortar', color: 'Negro', medida: '80cm ancho', cantidad: 1, price: 40000, micronaje: '70 micrones', image: '/img/bobinaN.png' },
  ],
};

const getProductById = (id) => {
  for (let category in products) {
    const product = products[category].find((p) => p.id === parseInt(id));
    if (product) return product;
  }
  return null;
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-details-container">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Color: {product.color}</p>
        <p>medida: {product.medida}</p>
        <p>micronaje (ancho del material): {product.micronaje}</p>
        <p>Unidades: {product.cantidad}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={() => addToCart(product)} className="buy-button">Agregar al Carrito</button>
        <div className="contact">
          <p>¿Tienes preguntas sobre este producto? Contáctanos</p>
          <a href="https://wa.me/+541126924913" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
            <img src="/img/WhatsApp_icon.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;