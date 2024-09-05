import React, { useState } from 'react';
import './styles/productos.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';


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
    { id: 23, name: 'Bobina de consorcio', description: 'Bobina negra de 20kg sin cortar', color: 'Negro', medida: '60cm ancho', cantidad: 1, price: 30000, micronaje: '60 micrones', image: '/img/bobinaN.png' },
    { id: 24, name: 'Bobina de consorcio', description: 'Bobina negra de 30kg sin cortar', color: 'Negro', medida: '80cm ancho', cantidad: 1, price: 40000, micronaje: '70 micrones', image: '/img/bobinaN.png' },
  ],
};


const getAllProducts = () => {
  return Object.values(products).flat();
};

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { cart, addToCart } = useCart();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  
  const allProducts = getAllProducts();
  const displayedProducts = selectedCategory === 'all'
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.medida.toLowerCase().includes(searchTerm)
      )
    : products[selectedCategory].filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.medida.toLowerCase().includes(searchTerm)
      );
  return (
    <div className="container">
      <h1>Productos</h1>
      <div className="search-bar">
        <input className='inputP'
          type="text"
          placeholder="Buscar por nombre o medida..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="categories">
        <span
          className={`category ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          Todos
        </span>
        {Object.keys(products).map((category) => (
          <span
            key={category}
            className={`category ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        ))}
      </div>
      <div className="products">
        {displayedProducts.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/${product.id}`}>
              <img className='imgCard' src={product.image} alt={product.name} />
              <h2 className='title'>{product.name}</h2>
              <p className='medida'>{product.medida}</p>
              
              <p className='price'>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)} className="buy-button">
              Comprar
            </button>
          </div>
        ))}
      </div>
      <div className="cart-icon">
        <Link to="/carrito">
          <img className='iconcart' src="/img/carticon.PNG" alt="Carrito" />
        </Link>
        <span className='cart-counter'>{cart.length}</span>
      </div>
    </div>
  );
};

export default Productos;
