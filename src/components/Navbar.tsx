import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Puedes definir estilos para tu barra de navegación

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/project" className="navbar-link">Proyecto</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contacto</Link>
        </li>
        <li className="navbar-item">
  <Link to="/services" className="navbar-link">Servicios</Link>
</li>
      </ul>
    </nav>
  );
};

export default Navbar;
