import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";
import CommentCard from "../components/placeDetail/CommentCard";
import InfoCard from "../components/placeDetail/InfoCard";
import PhotoCard from "../components/placeDetail/PhotoCard";
import "../css/placeDetail.css";
import DeletePlace from "./DeletePlace";
import { UserContext } from "../context/UserContext";

const PlaceDetail = () => {
  const { id } = useParams();
  const [votations, setVotations] = useState();
  const [status, setStatus] = useState("");
  const { user } = useContext(UserContext);

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
  );
};

export default PlaceDetail;
