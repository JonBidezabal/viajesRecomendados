import { usePlaces } from "../../hooks";
import { useState } from "react";
import "./style.css";

const NavHeader = () => {
  const [showCountries, setShowCountries] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const placeInfo = usePlaces();
  if (!placeInfo) {
    return <div>Cargando...</div>;
  }
  const data = placeInfo.data;

  return (
    <div className="navheader">
      <section
        className={`navheadercountries ${showCountries ? "show" : "hide"}`}>
        <button onClick={() => setShowCountries(!showCountries)}>Países</button>
        <ul className="navcountries">
          {data?.map((place) => (
            <li key={place.place_id}>
              <a href={`/places/country/${place.country}`}>{place.country}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className={`navheadercities ${showCities ? "show" : "hide"}`}>
        <button onClick={() => setShowCities(!showCities)}>Ciudades</button>
        <ul className="navcities">
          {data?.map((place) => (
            <li key={place.place_id}>
              <a href={`/places/city/${place.city}`}> {place.city}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NavHeader;
