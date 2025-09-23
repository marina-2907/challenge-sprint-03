import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBars } from "react-icons/fa";

export function Header() {
  return (
    <header className="header-container">
      {/* LOGOS ESQUERDA */}
      <div className="header-left">
        <Link to="/">
          <img src="public/imgs/image imrea 2.png" alt="Logo HC" />
        </Link>
        <Link to="/">
          <img src="public/imgs/NOVO-LOGO-HC-2022.png" alt="Logo IMREA" />
        </Link>
      </div>

      {/* NAVEGAÇÃO CENTRAL */}
      <nav className="header-nav">
        <Link to="/agendar" className="nav-btn">Agendar Consulta</Link>
        <Link to="/chat" className="nav-btn">Nosso Chat</Link>
        <Link to="/resultados" className="nav-btn">Resultados</Link>
        <Link to="/contato" className="nav-btn">Contato</Link>
      </nav>

      {/* NOVAS FERRAMENTAS À DIREITA */}
      <div className="header-tools">
        <Link to="/login" className="tool-btn" aria-label="Entrar">
          <FaUserCircle className="icon" aria-hidden="true" />
          <span>ENTRAR</span>
        </Link>

        <Link to="/buscar" className="tool-btn" aria-label="Buscar">
          <FaSearch className="icon" aria-hidden="true" />
          <span>BUSCAR</span>
        </Link>

        <button className="tool-btn" aria-label="Abrir menu">
          <FaBars className="icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}


