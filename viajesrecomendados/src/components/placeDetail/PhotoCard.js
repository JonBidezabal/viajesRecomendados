import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LastPlace from "./LastPlace";
import NextPlace from "./NextPlace";

const PhotoCard = ({ response, id }) => {
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
        <div className='container-triangule'>
        {!user &&<LastPlace placeId={id}/>}
        {!user &&<NextPlace placeId={id}/>}
        </div>
        
      </div>
  );
};

export default PhotoCard;