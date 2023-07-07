import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useByCountry } from "../hooks/index";
import "../css/placeBy.css";


const PlaceByCountry = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const countryToUpper = country.charAt(0).toUpperCase() + country.slice(1);
  const response = useByCountry(country);

  if (!response) {
    return <div>Cargando...</div>;
  }

  if (response.status !== "ok") {
    return <div>No se encontraron experiencias en {countryToUpper}</div>;
  }
  const handleClick = (placeId) => {
    navigate(`/places/${placeId}`);
  };
  const places = response.data;

  return (
    <div className="place-by-container">
      <h2 className="place-by-title">Experiencias en {countryToUpper}</h2>
      {places && (
        <ul className="place-by-map-container">
          {places.map((place) => (
            <li key={place.id} onClick={() => handleClick(place.id)}>
              <p>{place.shortDescription}</p>
              {place.photos && (
                <div className="place-by-gallery">
                  {place.photos.map((photo, index) => (
                    <img
                    key={index}
                    src={`${process.env.REACT_APP_BACKEND}/${photo}`}
                    alt={`Experiencia en ${countryToUpper}`}
                    />
                    ))}
                </div>
              )}
              <p>{`${place.title},  ${place.city},  ${place.country}`}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaceByCountry;
