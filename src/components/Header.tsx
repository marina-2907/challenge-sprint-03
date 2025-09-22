import { Link } from "react-router-dom";
import "./index.css"; // vamos criar esse CSS abaixo

export function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/">
          <img src="public/imgs/image imrea 2.png" alt="Logo HC" />
        </Link>
        <Link to="/">
          <img src="public/imgs/NOVO-LOGO-HC-2022.png" alt="Logo IMREA" />
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/agendar" className="nav-btn">Agendar Consulta</Link>
        <Link to="/chat" className="nav-btn">Nosso Chat</Link>
        <Link to="/resultados" className="nav-btn">Resultados</Link>
        <Link to="/contato" className="nav-btn">Contato</Link>
      </nav>

      <div className="header-right">
        <Link to="/login" className="login-icon">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </header>
  );
}
