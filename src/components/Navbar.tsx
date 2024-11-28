import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Enlace que lleva a la raíz */}
        <Link to="/" className="navbar-brand">
          TU SPA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                La Clave
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">
                Proyecto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contactenos
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
