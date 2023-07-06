import { useAllPlaces, useByCategoryList } from "../../hooks";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { Link } from "react-router-dom";
import "../../css/Header.css";

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

  /*Ordeno las listas de  países y ciudades por orden alfabético y no se duplican*/
  const countries = data.map((place) => place.country).sort();
  const countriesNotDuplicated = [...new Set(countries)];

  const cities = data.map((place) => place.city.toLowerCase()).sort();
  const citiesNotDuplicated = [...new Set(cities)];

  const categoriesdata = categoryList.data;

  return (
    <div className="navheader">
      <h4>Filtro de búsqueda</h4>

      {/*Boton para desplegar lista de paises, cuando clicamos cerramos las listas de ciudades y categorías
 cuando clicamos en cualquier enlace de las listas setmenu pliega el menu */}
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
        {showCountries && (
          <ul className={"navheadercountries "}>
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
        )}
      </section>

      {/*Boton para desplegar lista de ciudades, cuando clicamos cerramos las listas de categorías y paises */}
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

        {showCities && (
          <ul className={"navheadercities"}>
            {citiesNotDuplicated?.map((place, i) => (
              <li className="navheader-li" key={place}>
                <Link
                  className="navheader-a"
                  to={`/places/city/${place}`}
                  onClick={() => {
                    setMenu(false);
                    setShowCities(false);
                  }}>
                  {place[0].toUpperCase() + place.substring(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/*Boton para desplegar lista de categorías, cuando clicamos cerramos las listas de ciudades y paises */}
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

        {showCategories && (
          <ul className={"navheadercategories"}>
            {categoriesdata?.map((category) => (
              <li className="navheader-li" key={category.id}>
                <Link
                  className="navheader-a"
                  to={`/places/category/${category.id}`}
                  onClick={() => {
                    setMenu(false);
                    setShowCategories(false);
                  }}>
                  {category.category_name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default NavHeader;
