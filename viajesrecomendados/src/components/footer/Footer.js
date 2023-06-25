import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <p>
        {" "}
        © Travel Experience 2023. Hack a Boss, JSB18RT- GRUPO C. Todos los
        derechos reservados.{" "}
      </p>
      <section>
        Contacto:
        <ul>
          <img src="./github.png" alt="logo" width="60px" />
          <li>
            <Link to="https://github.com/bykarol" target="_blank">
              {" "}
              Karol
            </Link>
          </li>
          <li>
            <Link to="https://github.com/JonBidezabal" target="_blank">
              {" "}
              Jon
            </Link>
          </li>
          <li>
            <Link to="https://github.com/IsabelAbad" target="_blank">
              {" "}
              Isabel
            </Link>
          </li>
          <li>
            <Link to="https://github.com/mercedesiniguez" target="_blank">
              {" "}
              Mercedes
            </Link>
          </li>
        </ul>
        <ul>
          {" "}
          <img src="./linkedin.png" alt="logo" width="50px" />
          <li>
            <Link
              to="https://www.linkedin.com/in/karolbrachoyanez/"
              target="_blank">
              Karol
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/jonmartinezdev/"
              target="_blank">
              Jon
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/isabel-abad-cami%C3%B1os/"
              target="_blank">
              Isabel
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/mercedes-iniguez-quintela-1424ba7/"
              target="_blank">
              Mercedes
            </Link>
          </li>
        </ul>
      </section>

      <p>
        <span role="img" aria-label="Code" class="am-footer__code mr-1">
          <span
            aria-hidden="true"
            class="am-font-awesome am-font-awesome--code">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"></path>
            </svg>
          </span>
        </span>
        made with
        <span role="img" aria-label="love" class="am-footer__love mx-1">
          <span
            aria-hidden="true"
            class="am-font-awesome am-font-awesome--heart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"></path>
            </svg>
          </span>
        </span>
        and
        <span role="img" aria-label="coffee" class="am-footer__coffee mx-1">
          <span
            aria-hidden="true"
            class="am-font-awesome am-font-awesome--coffee">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M517.9 448H26.1c-24.5 0-33.1-32-20-32h531.8c13.1 0 4.5 32-20 32zM576 159.1c.5 53.4-42.7 96.9-96 96.9h-32v32c0 53-43 96-96 96H160c-53 0-96-43-96-96V76c0-6.6 5.4-12 12-12h402.8c52.8 0 96.7 42.2 97.2 95.1zM416 96H96v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96zm128 64c0-35.3-28.7-64-64-64h-32v128h32c35.3 0 64-28.7 64-64z"></path>
            </svg>
          </span>
        </span>
        in Galicia & Asturias.
      </p>
    </footer>
  );
};

export default Footer;
