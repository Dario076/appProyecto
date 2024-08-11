import React from 'react';

const Computadoras = () => {
  return (
<div className="container">
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>Asus Vivobook 15</h3>
            <img className="laptopimg" src="./public/img/laptop_01.jpg" alt="laptop" />
            <p>Laptop de alto rendimiento</p>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop hp 250</h3>
            <img className="laptopimg" src="./public/img/laptop_02.jpg" alt="laptop" />
            <p>Descripción de la laptop HP 250</p>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop HP Elitebook</h3>
            <img className="laptopimg" src="./public/img/laptop_03.jpg" alt="laptop" />
            <p>Descripción de la laptop HP Elitebook</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop Dell Inspiron</h3>
            <img className="laptopimg" src="./public/img/laptop_04.jpg" alt="laptop" />
            <p>Descripción de la laptop Dell Inspiron</p>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop Lenovo ThinkPad</h3>
            <img className="laptopimg" src="./public/img/laptop_05.jpg" alt="laptop" />
            <p>Descripción de la laptop Lenovo ThinkPad</p>
          </div>
        </div>
        <div className="column">
          <div className='laptop-model'>
            <h3>Laptop Acer Aspire</h3>
            <img className="laptopimg" src="./public/img/laptop_06.jpg" alt="laptop" />
            <p>Descripción de la laptop Acer Aspire</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Computadoras;