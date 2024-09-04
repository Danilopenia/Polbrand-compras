// componentes/Footer.jsx
import React from 'react';
import './styles/footer.css'; // Asegúrate de crear este archivo para los estilos específicos del footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3 className='c'>Contactanos</h3>
          <p>infopolbrand@gmail.com</p>
          <p>+54 11 2692-4913</p>
        </div>
        <div className="footer-section social-media">
          <h3>Redes sociales</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="mailto:infopolbrand@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
          <a href="https://www.instagram.com/polbrand_bolsas/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
