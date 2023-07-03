import { useAllPlaces, useByCategoryList } from "../../hooks";
import { useContext } from "react";
// import "./style.css";
import { HeaderContext } from "../../context/HeaderContext";

const NavHeader = () => {
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
              <a className="navheader-a" href={`/places/country/${place}`}>
                {place}
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
          {citiesNotDuplicated?.map((place, i) => (
            <li className="navheader-li" key={place}>
              <a className="navheader-a" href={`/places/city/${place}`}>
                {" "}
                {place[0].toUpperCase() + place.substring(1)}
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
