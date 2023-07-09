import React, { useState } from "react";
import { useUsersList } from "../../hooks";

const CommentCard = ({ votations, response }) => {
  const info = useUsersList();
  const [showComments, setShowComments] = useState(false);
  const numComments = response.data.comments.length;

  const findUser = (id) => {
    return info.data.find((user) => user.id === id);
  };
  const votesRender = (votes) => {
    const maxVote = 5;
    const votesArray = [];
    for (let i = 1; i <= maxVote; i++) {
      const starStyle = i <= votes ? "votation" : "emoji";
      votesArray.push(
        <span key={i} className={starStyle}>
          ★
        </span>
      );
    }
    return votesArray;
  };

  return (
    <section className="comments-votes" style={{ position: "relative" }}>
      <div className="comment-card">
        <h3 onClick={() => setShowComments(!showComments)}>
          {" "}
          Comentarios{" "}
          <span>{`(${numComments} ${
            numComments > 1 ? "comentarios" : "comentario"
          })`}</span>
        </h3>

        {response && info && showComments && (
          <ul>
            {response.data.comments.map((vote, index) => {
              const user = findUser(vote.commented_by_userID);
              return (
                <li className="li-commentcard" key={vote.commented_by_userID}>
                  <div className="elements-li-container">
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/${user.avatar}`}
                      alt="avatar"
                    />
                    <p className="user-name">{user.name}</p>
                    <p>{votesRender(vote.vote)}</p>
                  </div>
                  <div className="elements-li-container-sub">
                    <p>{vote.comment}</p>
                    <p>{new Date(vote.comment_date).toLocaleDateString()}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* {votations && (
        <div className="votation-update-container">
          <div className="elements-li-container">
            <img
              src={`${process.env.REACT_APP_BACKEND}/${votations.avatar}`}
              alt="avatar"
            />
            <p className="display-none">{votations.name}</p>
            <p>{votesRender(votations.vote)}</p>
          </div>
          <div className="elements-li-container-sub">
            <p>{votations.comment}</p>
            <p className="display-none">
              {new Date(votations.comment_date).toLocaleDateString()}
            </p>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default CommentCard;
