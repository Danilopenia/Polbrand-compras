import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(true); // Establecido como true para mantener la barra fija

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(true); // Siempre mantén la barra fija
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`menu-icon ${sticky ? 'sticky' : ''}`} onClick={toggleNavbar}>
        &#9776;
      </div>
      <div className={`Navbar ${isOpen ? 'open' : ''} ${sticky ? 'sticky' : ''}`}>
        <div className="close-icon" onClick={toggleNavbar}>
          &times;
        </div>
        <div>
          <img className='imgNavbar' src="/img/polbran.png" alt="Logo" />
        </div>
        <div>
          <Link to="/" onClick={toggleNavbar}>Inicio</Link>
          <Link to="/nosotros" onClick={toggleNavbar}>Nosotros</Link>
        </div>
        <div>
          <a href="https://www.instagram.com/polbrand_bolsas/"><img className='insta' src="/img/insta.png" alt="Instagram" /></a>
          <a href="#"><img className='face' src="/img/face.png" alt="Email" /></a>
          <a href="#"><img className='maps' src="/img/maps.png" alt="Maps" /></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

