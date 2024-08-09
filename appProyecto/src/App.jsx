import React, { useState } from 'react';
import Accesorios from './componentes/accesorios';
import Computadoras from './componentes/Computadoras';
import Laptops from './componentes/Laptops';
import './App.css'; // Importa el CSS que ya tienes

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
          {/* Aquí va tu logo */}
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
      </nav>

      <div className="content">
        {selectedComponent}
      </div>
    </div>
  );
};

export default App;