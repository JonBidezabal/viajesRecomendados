import { useAllPlaces, useByCategoryList } from "../../hooks";
import { useState } from "react";
import "./style.css";

const NavHeader = () => {
  const [showCountries, setShowCountries] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categoryList = useByCategoryList();
  const placeInfo = useAllPlaces();

  if (!placeInfo || !categoryList) {
    return <div>Cargando...</div>;
  }
  const data = placeInfo.data;
  const categoriesdata = categoryList.data;

  return (
    <div className="navheader">
      <section className="navheader-section">
        <button
          className="navheader-button"
          onClick={() => {
            setShowCountries(!showCountries);
            setShowCities(false);
            setShowCategories(false);
          }}>
          Países
        </button>

        <ul className={`navheadercountries ${showCountries ? "show" : "hide"}`}>
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
      <section className="navheader-section">
        <button
          className="navheader-button"
          onClick={() => {
            setShowCities(!showCities);
            setShowCountries(false);
            setShowCategories(false);
          }}>
          Ciudades
        </button>
        <ul className={`navheadercities ${showCities ? "show" : "hide"}`}>
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

      <section className="navheader-section">
        <button
          className="navheader-button"
          onClick={() => {
            setShowCategories(!showCategories);
            setShowCountries(false);
            setShowCities(false);
          }}>
          Categorías
        </button>
        <ul
          className={`navheadercategories ${showCategories ? "show" : "hide"}`}>
          {categoriesdata?.map((category) => (
            <li className="navheader-li" key={category.id}>
              <a
                className="navheader-a"
                href={`/places/category/${category.id}`}>
                {" "}
                {category.category_name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NavHeader;
