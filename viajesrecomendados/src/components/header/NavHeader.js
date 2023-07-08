import { useAllPlaces, useByCategoryList } from "../../hooks";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "../../css/NavHeader.css";
import { AiOutlineSearch } from "react-icons/ai";

const NavHeader = ({ setShowMenu, showMenu }) => {
  const [showCountries, setShowCountries] = useState(true);
  const [showCities, setShowCities] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const navigate = useNavigate();
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

  const handleFilter = (e) => {
    e.preventDefault();
    navigate(`/places/${e.target.name}/${e.target.value}`);
  };

  return (
    <>
      <ul id="navheader">
        <li
          className="navheader-search-by"
          onClick={() => {
            setShowCountries(!showCountries);
            setShowCities(false);
            setShowCategories(false);
          }}>
          <span>Países</span>
        </li>
        {/*Boton para desplegar lista de ciudades, cuando clicamos cerramos las listas de categorías y paises */}
        <li
          className="navheader-search-by"
          onClick={() => {
            setShowCities(!showCities);
            setShowCountries(false);
            setShowCategories(false);
          }}>
          <span>Ciudades</span>
        </li>
        {/*Boton para desplegar lista de categorías, cuando clicamos cerramos las listas de ciudades y paises */}
        <li
          className="navheader-search-by"
          onClick={() => {
            setShowCategories(!showCategories);
            setShowCountries(false);
            setShowCities(false);
          }}>
          <span className="navheader-button">Categorías</span>
        </li>
      </ul>
      {/* Formulario */}
      <form className="navheader-select" onChange={handleFilter}>
        <AiOutlineSearch
          className="navheader-search-icon"
          style={{ fontSize: "1.5rem" }}
        />
        {showCountries && (
          <select
            className={"navheader-countries "}
            name="country"
            onChange={() => {
              setShowMenu(!showMenu);
            }}>
            {countriesNotDuplicated?.map((place, i) => (
              <option className="navheader-li" key={i} value={place}>
                {place}
              </option>
            ))}
          </select>
        )}
        {showCities && (
          <select className={"navheader-cities"} name="city">
            {citiesNotDuplicated?.map((place, i) => (
              <option className="navheader-li" key={place} value={place}>
                {place[0].toUpperCase() + place.substring(1)}
              </option>
            ))}
          </select>
        )}
        {showCategories && (
          <select className={"navheadercategories"} name="category">
            {categoriesdata?.map((category) => (
              <option
                className="navheader-li"
                key={category.id}
                value={category.id}>
                {category.category_name}
              </option>
            ))}
          </select>
        )}
      </form>
    </>
  );
};

export default NavHeader;
