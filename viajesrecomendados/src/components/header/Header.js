import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";
import Auth from "./Auth";
import "./style.css";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header>
      <section>
        <h1 className="header-h1">
          <Link to="/">Travel Experience</Link>
        </h1>
        <h2 className="header-h2">
          Tu punto de referencia para la mejor experiencia de tu vida
        </h2>
      </section>
      <button onClick={handleMenu} className="header-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="header-svg"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <nav className={`header-nav ${menu ? "isActive" : ""}`}>
        <ul className="header-ul">
          <li className="header-li">
            <NavHeader />
          </li>
          <li className="header-li">
            <Auth />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
