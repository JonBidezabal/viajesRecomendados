import React from "react";
import { useParams } from "react-router-dom";
import { useByCountry } from "../hooks/index";

const PlaceByCountry = () => {
  const { country } = useParams();
  const countryToUpper = country.charAt(0).toUpperCase() + country.slice(1);
  const response = useByCountry(country);

  if (!response) {
    return <div>Cargando...</div>;
  }

  if (response.status !== "ok") {
    return <div>No se encontraron experiencias en {countryToUpper}</div>;
  }

  const places = response.data[countryToUpper];
  console.log(places)

  return (
    <div>
      <h2>Experencias en {countryToUpper}</h2>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <h3>{place.title}</h3>
            <p>{place.shortDescription}</p>
            <p>En {place.city}, {place.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
  export default PlaceByCountry;