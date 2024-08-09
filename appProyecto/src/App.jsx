<<<<<<< HEAD
import React, { useState } from 'react';
import Accesorios from './componentes/accesorios';
import Computadoras from './componentes/Computadoras';
import Laptops from './componentes/Laptops';
import './App.css'; // Importa el CSS que ya tienes

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
=======
import { useState } from 'react'
import Header from "./component/Header"
import './App.css'

function App() {

>>>>>>> da6657a03f918e162a8e59bd2dd12c5bb024073c

  const handleMenuClick = (component) => {
    console.log('Clicked:', component);
    setSelectedComponent(component);
  };
  
  const handleLogoClick = () => {
    console.log('Logo clicked');
    setSelectedComponent(null); // Oculta el contenido al hacer clic en el logo
  };
  
  return (
<<<<<<< HEAD
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
=======
    <>
      
      <h1>Proyecto</h1>
      
    
    </>
  )
}
>>>>>>> da6657a03f918e162a8e59bd2dd12c5bb024073c

      <div className="content">
        {selectedComponent}
      </div>
    </div>
  );
};

export default App;