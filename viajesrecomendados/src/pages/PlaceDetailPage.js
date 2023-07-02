import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";
import { UserContext } from "../context/UserContext";
import PlaceVote from "../components/placeDetail/PostVote"



const PlaceDetail = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const response = usePlaceDetail(id);


  if (!response) {
    return <div>Cargando...</div>;
  }
  if (response.status !== "ok") {
    return <div>No se encontró ninguna experiencia</div>;
  }
  const { generalInfo, comments, categories, photos } = response.data;

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
      <h3>Fotos</h3>
      <ul>
  {photos.map((photo, index) => (
    <li key={index}>
      <img src={`${process.env.REACT_APP_BACKEND}/${photo.photo}`} alt={title} />
    </li>
  ))}
</ul>
{user && <PlaceVote id={id} />}

    </div>
  );
};

export default PlaceDetail;