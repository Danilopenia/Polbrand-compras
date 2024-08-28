import React from 'react';
import './styles/Encabezado.css'

const Encabezado = () => {
  return (
    <>
    <div className="animated-box">
       <div className="info">
        <p className='pinfo1'>Mas de 20 años en el rubro</p>
      </div>
     
      <div>
        
      <div className='titleIcon'>
        
        <img className='imgEncabezado' src="/img/iconP.png" alt="" />
        <h1 className="title">Polbrand</h1>

      </div><h2 className="subtitle">Fabrica de bolsas plasticas</h2>

      <div className="info2">
        <p className='pinfo2'>Precios de fabrica mayorista al alcance de todos</p>
      </div>
     

         </div>
         
      </div>
       
       
 </>   
  );
};

export default Encabezado;