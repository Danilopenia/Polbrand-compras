import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/nosotros.css'; // Asegúrate de crear este archivo para los estilos específicos de esta página

const Nosotros = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const slideData = [
    {
      title: "Bienvenido a Polbrand",
      text: "Una empresa dedicada a ofrecer los mejores productos en bolsas y accesorios. Nuestra misión es proporcionar calidad y satisfacción a nuestros clientes."
    },
    {
      title: "Nuestra maquinaria",
      text: "Desde sus inicios Polbrand fue y es auspiciado por Rudra S.R.L industria lider en la produccion de maquinaria para produccion de soluciones plasticas. En Poldbrand trabajamos con las fiables y clasicas maquinas de Rudra."
    },
    {
      title: "Nuestra historia",
      text: "Fundada en 1990, nuestra empresa ha crecido gracias al compromiso y dedicación de nuestro equipo. Nos enorgullece ofrecer productos innovadores y un excelente servicio al cliente. Polbrand siempre fue y sera una empresa familiar que tiene en cuenta tanto a clientes grandes como clientes chicos."
    }
  ];

  return (
    <div className="nosotros-container">
      <h1>{slideData[currentSlide].title}</h1>
      <div className="content-wrapper">
        <div className="carousel-container">
          <Carousel 
            showArrows={true} 
            showThumbs={false} 
            autoPlay={true} 
            infiniteLoop={true} 
            showStatus={false}
            onChange={handleSlideChange}
          >
            <div className='imgpol'>
              <img src="img/pol.JPG" alt="Fábrica" />
            </div>
            <div>
              <img src="img/confeccio.png" alt="Oficinas" />
            </div>
            <div>
              <img className='imgFabric' src="img/family.PNG" alt="Almacén" />
            </div>
          </Carousel>
        </div>
        <div className="company-description">
          <p>{slideData[currentSlide].text}</p>
        </div>
      </div>
      <p className='p2'>Contactanos via <a href="mailto:Danilopenia13@gmail.com">Email</a>.</p>
    </div>
  );
};

export default Nosotros;


