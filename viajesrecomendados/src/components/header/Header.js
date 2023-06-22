import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";
import Auth from "./Auth";
import "./style.css";

const Header = () => {
  return (
    <header>
      <section>
        <h1>
          <Link to="/">Travel Experience</Link>
        </h1>
        <h2>Tu punto de referencia para la mejor experiencia de tu vida</h2>
      </section>
      <nav>
        <NavHeader />
      </nav>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
