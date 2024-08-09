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
                  <a href="#" onClick={() => openModal(<Accesorios />)}>Accesorios</a>
                </div>
              </div>
            </div>
          </nav>
          <img className="img-fluid" src="./public/img/carrito.png" alt="carrito"></img>
        </header>
      </div>
    );
  }
  
  export default Header;