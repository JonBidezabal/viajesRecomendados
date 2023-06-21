import React from "react";
import { useParams } from "react-router-dom";
import { useByCity } from "../hooks/index";

const PlaceByCity = () => {
  const { city } = useParams();
  const cityToUpper = city.charAt(0).toUpperCase() + city.slice(1);
  const response = useByCity(city);

  if (!response) {
    return <div>Cargando...</div>;
  }

  if (response.status !== "ok") {
    return <div>No se encontraron experiencias en {cityToUpper}</div>;
  }

  const places = response.data[cityToUpper];
  console.log(places)

  return (
    <div>
      <h2>Experencias en {cityToUpper}</h2>
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

export default PlaceByCity;