import { useAllPlaces } from "../../hooks";
import { useState } from "react";
import "./style.css";

const NavHeader = () => {
  const [showCountries, setShowCountries] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const placeInfo = useAllPlaces();
  if (!placeInfo) {
    return <div>Cargando...</div>;
  }
  const data = placeInfo.data;

  return (
    <div className="navheader">
      <section
        className={`navheadercountries ${showCountries ? "show" : "hide"}`}>
        <button
          className="navheader-button"
          onClick={() => {
            setShowCountries(!showCountries);
            setShowCities(false);
          }}>
          Países
        </button>
        <ul className="navcountries">
          {data?.map((place) => (
            <li className="navheader-li" key={place.place_id}>
              <a
                className="navheader-a"
                href={`/places/country/${place.country}`}>
                {place.country}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className={`navheadercities ${showCities ? "show" : "hide"}`}>
        <button
          className="navheader-button"
          onClick={() => {
            setShowCities(!showCities);
            setShowCountries(false);
          }}>
          Ciudades
        </button>
        <ul className="navcities">
          {data?.map((place) => (
            <li className="navheader-li" key={place.place_id}>
              <a className="navheader-a" href={`/places/city/${place.city}`}>
                {" "}
                {place.city}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NavHeader;
