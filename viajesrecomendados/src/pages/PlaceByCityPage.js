import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useByCity } from "../hooks/index";
import "../css/placeBy.css";

const PlaceByCity = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const cityToUpper = city.charAt(0).toUpperCase() + city.slice(1);
  const response = useByCity(city);

  if (!response) {
    return <div>Cargando...</div>;
  }

  if (response.status !== "ok") {
    return <div>No se encontraron experiencias en {cityToUpper}</div>;
  }
  const handleClick = (placeId) => {
    navigate(`/places/${placeId}`);
  };
  const places = response.data;
  

  return (
    <div className="place-by-container">
      <h2 className="place-by-title">Experiencias en {cityToUpper}</h2>
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
                    alt={`Experiencia en ${cityToUpper}`}
                    />
                    ))}
                </div>
              )}
              <p>{`${place.title},  ${cityToUpper},  ${place.country}`}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaceByCity;
