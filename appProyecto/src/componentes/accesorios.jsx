import React from 'react';

const Accesorios = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>AMD RX6600 XT</h3>
            <img className="laptopimg" src="./public/img/RX 6600XT.jpg" alt="laptop" />
            <p>
              Tarjeta grafica de 8GB DDR6
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>AMD RX 6900 XT</h3>
            <img className="laptopimg" src="./public/img/RX 6900XT.png" alt="RX 6700 XT" />
            <p>
              Tarjeta grafica RX 6700xt de 8GB
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>RX 7900 XT</h3>
            <img className="laptopimg" src="./public/img/RX 7900XT.png" alt="RX 7900 XT" />
            <p>
              Tarjeta Grafica RADEON RX 7900XT de 20GB
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>RTX 3060 Ultra</h3>
            <img className="laptopimg" src="./public/img/RTX 3060 Ultra.png" alt="RTX 3060 Ultra" />
            <p>
              Tarjeta grafica rxt 3060 ultra de 12GB
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>RTX 4070 Ti</h3>
            <img className="laptopimg" src="./public/img/RTX 4070 TI.jpg" alt="RTX 4070 Ti" />
            <p>
              Descripción de la rtc 4070ti
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>RTX 4080</h3>
            <img className="laptopimg" src="./public/img/RTX 4090.jpg" alt="rtx 4090" />
            <p>MSI RTX 4090</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesorios;