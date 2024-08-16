import React, { useState } from 'react';
import './App.css'; // Importa el CSS que ya tienes
import Laptops from './componentes/Laptop';
import Computadoras from './componentes/Computadoras';
import accesorios from './componentes/Accesorios';
import Accesorios from './componentes/Accesorios';
const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuClick = (component) => {
    console.log('Clicked:', component);
    setSelectedComponent(component);
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
    setSelectedComponent(null); // Oculta el contenido al hacer clic en el logo
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          <img src="./public/img/logo.png" alt="Logo" className='logo' />
        </div>

        <div className="dropdown">
          <button className="dropbtn">Categorías</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => handleMenuClick(<Computadoras />)}>Computadoras</a>
            <a href="#" onClick={() => handleMenuClick(<Laptops />)}>Laptops</a>
            <a href="#" onClick={() => handleMenuClick(<Accesorios />)}>Tarjetas Gráficas</a>
          </div>
        </div>
        <div className="navbar-right">
          <div className="cart-icon">
            <img className="img-fluid" src="/img/carrito.png" alt="carrito" />
            <div className="cart-content">

              <p>Laptop HP 250 G7</p>
              <img src='/public/img/laptop_01.jpg' alt='laptop'></img>
              <p>Laptop de alto rendimiento</p>
              <p>Total a pagar: $999</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="content">
        {selectedComponent}
      </div>
      <div class="grid-container">
        <div class="grid-item">
            <h3>XTRATECH INTEL CORE I5-12400</h3>
            <p>Procesador Intel Core i5-12400</p>
            <img className='product' src='/public/img/Intel core 5-12400.jpg' alt='computadora'/>
            <button className="add-to-cart-button">Agregar al Carrito</button>
        </div>
        <div class="grid-item">
            <h3>APPLE IMAC 2021</h3>
            <p>
            Chip M1 de Apple
            CPU de 8 núcleos con 4 núcleos de rendimiento 
            y 4 de eficiencia GPU de 7 núcleos, GPU de 8 
            núcleos.
            SSD de 256 GB o SSD de 512 GB
            8 GB de memoria unificada
            </p>
            <img className='product' src='/public/img/imac 2021.jpg' alt='imac'/>
            <button className="add-to-cart-button">Agregar al Carrito</button>
        </div>
        <div class="grid-item">
          <h3>LENOVO IP3 15ALC6</h3>
          <p>
          Procesador: AMD Ryzen 7 5700U 1.8Ghz hasta 4.3Ghz.
          Memoria Ram: 12GB DDR4-3200 MHz
          Disco duro: 512GB SSD M.2
          </p>
          <img className='product' src='/public/img/LENOVO IP3 15ALC6.jpg' alt='laptop'/>
          <button className="add-to-cart-button">Agregar al Carrito</button>
        </div>
        <div className='grid-item'>
          <div class="grid-item">
          <h3>LENOVO G3 15ARH7</h3>
          <p>
          Procesador: AMD Ryzen™ 5 6600H 3.3GHZ.
          Gráficos dedicada: NVIDIA® GeForce RTX™ 3050 4GB GDDR6.
          Memoria Ram: 8GB DDR5-4800 MHz
          Disco duro: 512GB SSD M.2
          </p>
          <img className='product' src='/public/img/LENOVO G3 15ARH7.jpg' alt='laptop'/>
          <button className="add-to-cart-button">Agregar al Carrito</button>
        </div>
        </div>


    </div>   
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">CompuNET- Todos los derechos Reservados</p>
        </div>
      </footer>
    </div>

  );
};

export default App;