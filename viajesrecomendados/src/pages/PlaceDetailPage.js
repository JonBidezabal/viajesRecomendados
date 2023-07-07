import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";
import { UserContext } from "../context/UserContext";
import CommentCard from "../components/placeDetail/CommentCard";
import InfoCard from "../components/placeDetail/InfoCard";
import PhotoCard from "../components/placeDetail/PhotoCard";
import PostVotes from "../components/placeDetail/PostVotes";
import '../css/placeDetail.css'


const PlaceDetail = () => {
  const { id } = useParams();
  const [votations, setVotations] = useState();
  const [status, setStatus] = useState("");
  const { user } = useContext(UserContext);

  const response = usePlaceDetail(id);

  useEffect(() => {
    setVotations(null); 
  }, [id]);

  if (!response) {
    return <div>Cargando...</div>;
  }

  if (response.status !== "ok") {
    return <div>No se encontró ninguna experiencia</div>;
  }

  return (
    <>
    {response && response.data.generalInfo[0] && <InfoCard response={response}/>}
  <div className="place-detail-container">
    {response && response.data.photos && <PhotoCard response={response} id={id} />}
    <div className="container-comment-postvotes">
    {user && <PostVotes id={id} setVotations={setVotations} response={response} setStatus={setStatus} status={status} />}
    {<CommentCard votations={votations} response={response} />}
    </div>
  </div>
  </>
  );
};

export default PlaceDetail;
