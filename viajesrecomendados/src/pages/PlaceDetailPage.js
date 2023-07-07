<<<<<<< Updated upstream
import React, { useContext, useState } from "react";
=======
import React, { useContext, useState, useEffect } from "react";
>>>>>>> Stashed changes
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";
import { UserContext } from "../context/UserContext";
import CommentCard from "../components/placeDetail/CommentCard";
import InfoCard from "../components/placeDetail/InfoCard";
import PhotoCard from "../components/placeDetail/PhotoCard";
<<<<<<< Updated upstream
import "../css/placeDetail.css";
import DeletePlace from "./DeletePlace";
import { UserContext } from "../context/UserContext";
=======
import PostVotes from "../components/placeDetail/PostVotes";
import '../css/placeDetail.css'

>>>>>>> Stashed changes

const PlaceDetail = () => {
  const { id } = useParams();
  const [votations, setVotations] = useState();
  const [status, setStatus] = useState("");
  const { user } = useContext(UserContext);
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <div className="place-detail-container">
        {response && response.data.generalInfo[0] && (
          <InfoCard response={response} />
        )}
        {response && response.data.photos && (
          <PhotoCard
            response={response}
            id={id}
            setVotations={setVotations}
            setStatus={setStatus}
            status={status}
          />
        )}
        {<CommentCard votations={votations} response={response} />}
      </div>
      <div>
        {user &&
          user[0].id === response.data.generalInfo[0].posted_by_userID && (
            <DeletePlace id={response.data.generalInfo[0].place_id} />
          )}
      </div>
    </>
=======
    {response && response.data.generalInfo[0] && <InfoCard response={response}/>}
  <div className="place-detail-container">
    {response && response.data.photos && <PhotoCard response={response} id={id} />}
    <div className="container-comment-postvotes">
    {user && <PostVotes id={id} setVotations={setVotations} response={response} setStatus={setStatus} status={status} />}
    {<CommentCard votations={votations} response={response} />}
    </div>
  </div>
  </>
>>>>>>> Stashed changes
  );
};

export default PlaceDetail;
