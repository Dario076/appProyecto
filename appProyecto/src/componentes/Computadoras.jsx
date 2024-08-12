import React from 'react';

const Computadoras = () => {
  return (
<div className="container">
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>HP PRODESK 600 G6PD SFF</h3>
            <img className="laptopimg" src="./public/img/computadora1.png" alt="computadora" />
            <p>MiniPC de alto rendimiento
              con procesador core i3-10100
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Computador HP HP AIO PROONE</h3>
            <img className="laptopimg" src="./public/img/computadora2.png" alt="laptop" />
            <p>Computador HP AIO ProOne 440 G9
              con procesador Intel Core 5-12500
            </p>
            
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>APPLE IMAC 2021</h3>
            <img className="laptopimg" src="./public/img/computadora3.jpg" alt="laptop" />
            <p>Computadora de alto rendimiento
              Apple IMAC 2021 M1 AIO 8GB RAM 
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>CPU DELL OPTIPLEX</h3>
            <img className="laptopimg" src="./public/img/computadora4.jpg" alt="laptop" />
            <p>CPU OPTIPLEX GX3040 SFF
              con procesador core i5-6500
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>CPU HP ENVY TE01-2000</h3>
            <img className="laptopimg" src="./public/img/computadora5.jpg" alt="laptop" />
            <p>
              CPU TE01-2000 con procesador
              INTEL CORE i7-11700 y 16GB DDR4
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>LENOVO LEGION T5 26AMR05</h3>
            <img className="laptopimg" src="./public/img/computadora6.jpg" alt="laptop" />
            <p>
              CPU T5 26AMR05 con procesador
              AMD RYZEN 7 5700G y 16GB DDR4
              Disco: 512GB SSD + 1TB HDD
              Grafica: 6GB GTX 1660 SUPER NVIDIA
            </p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Computadoras;