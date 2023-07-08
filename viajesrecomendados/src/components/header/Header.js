import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";
import Auth from "./Auth";
import Search from "./Search";
import "../../css/Header.css";
import "../../css/base.css";
import { useContext, useRef, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";

const Header = () => {
  // const { hidelist } = useContext(HeaderContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      {/*Sección para el título del header */}
      <section className="header-title">
        <Link to="/" className="header-link"><img src="../../api-logo.png" id="api-logo" /> </Link>
        <h1 className="header-h1">
          <Link to="/" className="header-link">
            Travel Experience
          </Link>
        </h1>
        <h2 className="header-h2">
          Tu punto de referencia para la mejor experiencia de tu vida
        </h2>
      </section>
      <button className="header-button" onClick={() => setShowMenu(!showMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="header-svg"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      {/*Otra seccion del header con el botón que lleva la imagen svg(hamburguesa), cuando clicas despliega el menú con 
      los componentes Auth y NavHeader */}
      <nav className={`header-nav ${showMenu ? "show" : ""}`} >
        <ul className="header-ul">
          <li className="header-li" id="filter-search">
            <h4>Filtro de búsqueda</h4>
            <NavHeader className="navheader-component" showMenu={showMenu} setShowMenu={setShowMenu} />
          </li>
          <li id="filter-places">
            <h4>Ordenar lugares</h4>
            <Search setShowMenu={setShowMenu} showMenu={showMenu} />
          </li>
          <li id="user-auth">
            <h4>Gestión de usuario</h4>
            <Auth setShowMenu={setShowMenu} showMenu={showMenu} />
          </li>
        </ul>
      </nav>
    </header >
  );
};

export default Header;
