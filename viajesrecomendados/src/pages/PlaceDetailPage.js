import React from "react";
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";

const PlaceDetailPage = () => {
  const { id } = useParams();
  const placeDetail = usePlaceDetail(id);

  if (!placeDetail) {
    return <div>Cargando...</div>;
  }

  const { generalInfo, comments, categories } = placeDetail.data;

  const { title, shortDescription, city, country } = generalInfo[0];

  return (
    <div>
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <p>{city}</p>
      <p>{country}</p>
      <h3>Comentarios y votaciones</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>Puntuacion: {comment.vote}</p>
            <p>Comentario: {comment.comment}</p>
          </li>
        ))}
      </ul>
      <h3>Categorías</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceDetailPage;