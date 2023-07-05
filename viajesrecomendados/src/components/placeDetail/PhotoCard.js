import React, { useContext } from "react";
import PostVotes from "./PostVotes";
import { UserContext } from "../../context/UserContext";

const PhotoCard = ({ response, id, setVotations, status, setStatus }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="photo-card">
        <ul>
          {response.data.photos.map((photo, index) => (
            <li key={index}>
              <img
                src={`${process.env.REACT_APP_BACKEND}/${photo.photo}`}
                alt={response.data.generalInfo.title}
              />
            </li>
          ))}
        </ul>
        {user && <PostVotes id={id} setVotations={setVotations} response={response} setStatus={setStatus} status={status} />}
      </div>
  );
};

export default PhotoCard;