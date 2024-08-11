import React, { useState } from 'react';
import accesorios from './componentes/accesorios';
import './App.css'; // Importa el CSS que ya tienes
import Laptops from './componentes/Laptop';
import Computadoras from './componentes/Computadoras';

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
            <a href="#" onClick={() => handleMenuClick(<Accesorios />)}>Accesorios</a>
          </div>
        </div>
        <div className="navbar-right">
    <img className="img-fluid" src="/img/carrito.png" alt="carrito" />
    
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