import React, { useState } from 'react';
import './App.css'; // Importa el CSS que ya tienes
import Laptops from './componentes/Laptop';
import Computadoras from './componentes/Computadoras';
import accesorios from './componentes/accesorios';
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
          <img src="./public/img/logo.png" alt="Logo" className='logo'/>
        </div>
        
        <div className="dropdown">
          <button className="dropbtn">Categorías</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => handleMenuClick(<Computadoras />)}>Computadoras</a>
            <a href="#" onClick={() => handleMenuClick(<Laptops />)}>Laptops</a>
            <a href="#" onClick={() => handleMenuClick(<Componentes />)}>Componentes</a>
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
    
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">CompuNET- Todos los derechos Reservados</p>
        </div>
    </footer>
    </div>
    
  );
};

export default App;