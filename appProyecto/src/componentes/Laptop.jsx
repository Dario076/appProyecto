import React from 'react';

const Laptops = () => {
  return (
<div className="container">
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>Asus Vivobook 15</h3>
            <img className="laptopimg" src="./public/img/laptop_01.jpg" alt="laptop" />
            <p>Laptop de alto rendimiento</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop hp 250</h3>
            <img className="laptopimg" src="./public/img/laptop_02.jpg" alt="laptop" />
            <p>Descripción de la laptop HP 250</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop HP Elitebook</h3>
            <img className="laptopimg" src="./public/img/laptop_03.jpg" alt="laptop" />
            <p>Descripción de la laptop HP Elitebook</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop Dell Inspiron</h3>
            <img className="laptopimg" src="./public/img/laptop_04.jpg" alt="laptop" />
            <p>Descripción de la laptop Dell Inspiron</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop Lenovo ThinkPad</h3>
            <img className="laptopimg" src="./public/img/laptop_05.jpg" alt="laptop" />
            <p>Descripción de la laptop Lenovo ThinkPad</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop Acer Aspire</h3>
            <img className="laptopimg" src="./public/img/laptop_06.jpg" alt="laptop" />
            <p>Descripción de la laptop Acer Aspire</p>
            <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Laptops;