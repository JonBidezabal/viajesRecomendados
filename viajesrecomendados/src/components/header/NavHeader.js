import { useAllPlaces, useByCategoryList } from "../../hooks";
import { useContext } from "react";
import "../../css/Header.css";
import { HeaderContext } from "../../context/HeaderContext";
import { Link } from "react-router-dom";

const NavHeader = ({ setMenu }) => {
  const {
    showCategories,
    showCities,
    showCountries,
    setShowCategories,
    setShowCities,
    setShowCountries,
  } = useContext(HeaderContext);

  const categoryList = useByCategoryList();
  const placeInfo = useAllPlaces();

  if (!placeInfo || !categoryList) {
    return <div>Cargando...</div>;
  }
  const data = placeInfo.data;
  const countries = data.map((place) => place.country).sort();
  const countriesNotDuplicated = [...new Set(countries)];

  const cities = data.map((place) => place.city.toLowerCase()).sort();
  const citiesNotDuplicated = [...new Set(cities)];

  const categoriesdata = categoryList.data;

  return (
    <div className="navheader">
      <h4>Filtro de búsqueda</h4>
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
          {countriesNotDuplicated?.map((place, i) => (
            <li className="navheader-li" key={i}>
              <Link
                className="navheader-a"
                to={`/places/country/${place}`}
                onClick={() => {
                  setMenu(false);
                  setShowCountries(false);
                }}>
                {place}
              </Link>
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
          {citiesNotDuplicated?.map((place, i) => (
            <li className="navheader-li" key={place}>
              <Link
                className="navheader-a"
                to={`/places/city/${place}`}
                onClick={() => {
                  setMenu(false);
                  setShowCities(false);
                }}>
                {" "}
                {place[0].toUpperCase() + place.substring(1)}
              </Link>
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
              <Link
                className="navheader-a"
                to={`/places/category/${category.id}`}
                onClick={() => {
                  setMenu(false);
                  setShowCategories(false);
                }}>
                {" "}
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NavHeader;
