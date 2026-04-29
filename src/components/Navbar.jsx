import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Buscador de Usuarios</span>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
      </div>
    </nav>
  );
}

export default Navbar;