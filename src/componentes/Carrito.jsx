import React from 'react';
import { useCart } from './CartContext';
import './styles/carrito.css';

const Carrito = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalMessage = () => {
    let message = 'Hola, quiero comprar los siguientes productos:\n\n';
    cart.forEach((product) => {
      message += `Producto: ${product.name}, Medida: ${product.medida} ,Precio: AR$${product.price}\n`;
    });
    message += '\nGracias.';
    return encodeURIComponent(message);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const whatsappNumber = '1126924913';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${getTotalMessage()}`;

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div>
          <p className='carritoP'>El carrito está vacío</p>
          <img src="img/carritoFondo.png" alt="" />
        </div>
        
        
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li className='listCart' key={index}>
                <div>
                  <h2>{product.name} {product.medida}</h2>
                  <p>{product.color}</p>
                  <p>{product.micronaje}</p>
                  <p>unidades:{product.cantidad}</p>
                  <p>Precio: {product.price}</p>
                </div>
                <div className='cartdivimg'>
                  <img className='cartimg' src={product.image} alt="" />
                </div>
                <button className="removeb" onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <h2>Total: ${calculateTotal()}</h2>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="checkout-button">Finalizar Compra</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Carrito;
