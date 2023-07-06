import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";
import CommentCard from "../components/placeDetail/CommentCard";
import InfoCard from "../components/placeDetail/InfoCard";
import PhotoCard from "../components/placeDetail/PhotoCard";
import '../css/placeDetail.css'


const PlaceDetail = () => {
  const { id } = useParams();
  const [votations, setVotations] = useState();
  const [status, setStatus] = useState("");

  const response = usePlaceDetail(id);

  if (!response) {
    return <div>Cargando...</div>;
  }

  if (response.status !== "ok") {
    return <div>No se encontró ninguna experiencia</div>;
  }

  return (
    <>
  <div className="place-detail-container">
    {response && response.data.generalInfo[0] && <InfoCard response={response}/>}
    {response && response.data.photos && <PhotoCard response={response} id={id} setVotations={setVotations} setStatus={setStatus} status={status}/>}
    {<CommentCard votations={votations} response={response} />}
  </div>
  </>
  );
}

export default PlaceDetail;