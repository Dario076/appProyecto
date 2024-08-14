import React from 'react';
import './styles.css'; // Asegúrate de importar tus estilos

function Header({ openModal, closeModal, modalContent }) {
  return (
    <div>
      <header className="py-5 header">
        <div className="container-x1">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              {/* Aquí puedes agregar contenido adicional */}
            </div>
          </div>
        </div>
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/Home"><img src="./public/img/logo.png" alt="Logo" /></a>
            <div className="dropdown-menu">
              <button className="dropbtn">Categorías</button>
              <div className="dropdown-content">
                <a href="#" onClick={() => openModal(<Computadoras />)}>Computadoras</a>
                <a href="#" onClick={() => openModal(<Laptops />)}>Laptops</a>
                <a href="#" onClick={() => openModal(<Accesorios/>)}>Tarjetas Gráficas</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="navbar-right">
  <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
    <div className="carrito">
      <img className="img-fluid cart-icon" src="./public/img/carrito.png" alt="imagen carrito" />
      <div id="carrito" className="cart-content bg-white p-3">
        <p className="text-center">El carrito está vacío</p>
        <table className="w-100 table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="img-fluid" src="./public/img/laptop_02.jpg" alt="laptop" />
              </td>
              <td>SRV</td>
              <td className="fw-bold">$299</td>
              <td className="flex align-items-start gap-4">
                <button type="button" className="btn btn-dark">-</button>
                <button type="button" className="btn btn-dark">+</button>
              </td>
              <td>
                <button className="btn btn-danger" type="button">X</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-end">Total a pagar: <span className="fw-bold">$899</span></p>
        <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
      </div>
    </div>
  </nav>
</div>
      
       
      </header>
    </div>
              
  );
}

export default Header;