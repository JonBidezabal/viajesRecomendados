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

  const places = response.data;
  
  return (
    <div className="place-by-container">
      <h2 className="place-by-title">Experiencias en {countryToUpper}</h2>
      {places && (
        <ul className="place-by-map-container">
          {places.map((place) => (
            <li key={place.id}>
              <h3>{place.title}</h3>
              <p>{place.shortDescription}</p>
              <p>Ciudad: {place.city}</p>
              <p>Pais: {place.country}</p>
              {place.photos && (
                <div>
                  {place.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={`${process.env.REACT_APP_BACKEND}/${photo}`}
                      alt={`Experiencia en ${countryToUpper}`}
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaceByCountry;
