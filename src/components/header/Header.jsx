import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="title">
          Evento Cultural
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/search" className="link">
          Buscar Evento
        </Link>

        <Link to="/new" className="link">
          Criar Evento
        </Link>
      </div>
    </div>
  );
}
