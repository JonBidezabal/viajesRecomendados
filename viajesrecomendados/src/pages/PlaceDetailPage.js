import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaceDetail } from "../hooks/index";
import { UserContext } from "../context/UserContext";
import CommentCard from "../components/placeDetail/CommentCard";
import InfoCard from "../components/placeDetail/InfoCard";
import PhotoCard from "../components/placeDetail/PhotoCard";
import PostVotes from "../components/placeDetail/PostVotes";
import DeletePlace from "./DeletePlace";
import Modal from "../components/Modal";
import "../css/placeDetail.css";
import "../css/base.css";
import CategoryCard from "../components/placeDetail/CategoryCard";

const PlaceDetail = () => {
  const { id } = useParams();
  const [votations, setVotations] = useState();
  const [status, setStatus] = useState("");
  const [modal, setModal] = useState(false);
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
    <main className="main-place-detail-page">
      {response && response.data.generalInfo[0] && (
        <InfoCard response={response} />
      )}
      <div className="place-detail-container">
        {response && response.data.photos && (
          <PhotoCard response={response} id={id} />
        )}
        <section className="category-info-card">
          Encuentra experiencias como esta:
          {response && response.data.categories && (
            <CategoryCard response={response} />
          )}
        </section>
        <div className="container-comment-postvotes">
          {user && (
            <PostVotes
              id={id}
              setVotations={setVotations}
              response={response}
              setStatus={setStatus}
              status={status}
            />
          )}
          {<CommentCard votations={votations} response={response} />}
        </div>
        <div className="delete-place-container">
          {user &&
            user[0].id === response.data.generalInfo[0].posted_by_userID && (
              <DeletePlace
                id={response.data.generalInfo[0].place_id}
                setModal={setModal}
                modal={modal}
              />
            )}
          {modal && <Modal />}
        </div>
      </div>
    </main>
  );
};

export default PlaceDetail;
