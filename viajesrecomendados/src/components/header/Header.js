import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";
import Auth from "./Auth";
import "../../css/Header.css";
import "../../css/base.css";
import { useContext, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";

const Header = () => {
  const { hidelist } = useContext(HeaderContext);

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header>
      {/*Sección para el título del header */}
      <section className="header-section" onClick={hidelist}>
        <h1 className="header-h1">
          <Link to="/" className="header-link" onClick={() => setMenu(false)}>
            Travel Experience
          </Link>
        </h1>
        <h2 className="header-h2">
          Tu punto de referencia para la mejor experiencia de tu vida
        </h2>
      </section>

      {/*Otra seccion del header con el botón que lleva la imagen svg(hamburguesa), cuando clicas despliega el menú con 
      los componentes Auth y NavHeader */}
      <section className="header-section-menu">
        <button onClick={handleMenu} className="header-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="header-svg"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {menu && (
          <nav className={"header-nav"}>
            <ul className="header-ul">
              <li className="header-li">
                <NavHeader setMenu={setMenu} />
              </li>
              <li>
                <ul>
                  <h4>Ordenar lugares</h4>
                  <Link to={"/places/mostvoted"} onClick={() => setMenu(false)}>
                    <li>Mejores reseñas</li>
                  </Link>
                  <Link to={"/places/allplaces"} onClick={() => setMenu(false)}>
                    <li>Por fecha</li>
                  </Link>
                </ul>
              </li>

              <li className="header-li">
                <Auth setMenu={setMenu} />
              </li>
            </ul>
          </nav>
        )}
      </section>
    </header>
  );
};

export default Header;
