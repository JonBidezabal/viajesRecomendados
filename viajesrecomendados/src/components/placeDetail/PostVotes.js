import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { postVotes } from "../../services/index";
import "../../css/postVotes.css";

const PostVotes = ({ id, setVotations, response, status, setStatus }) => {
  const [vote, setVote] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const { token, user } = useContext(UserContext);
  const handleVote = (vote) => {
    setVote(vote);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const jsonResponse = await postVotes(
        `${process.env.REACT_APP_BACKEND}/places/newvote/${id}`,
        vote,
        comment,
        token
      );

      console.log(response.data.comments);
      setStatus(jsonResponse.success);
      setMessage(jsonResponse.message);
      if (jsonResponse.success === "true") {
        setVotations({
          vote: vote,
          comment: comment,
          comment_date: new Date(),
          name: user[0].name,
          avatar: user[0].avatar,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="post-votes-container">
      {
        <div>
          <h3>Escribe un reseña</h3>
          <form onSubmit={handleSubmit}>
            <div className="stars-container">
              <span
                className={1 <= vote ? "votation" : "emoji"}
                onClick={() => handleVote(1)}>
                ★
              </span>
              <span
                className={2 <= vote ? "votation" : "emoji"}
                onClick={() => handleVote(2)}>
                ★
              </span>
              <span
                className={3 <= vote ? "votation" : "emoji"}
                onClick={() => handleVote(3)}>
                ★
              </span>
              <span
                className={4 <= vote ? "votation" : "emoji"}
                onClick={() => handleVote(4)}>
                ★
              </span>
              <span
                className={5 <= vote ? "votation" : "emoji"}
                onClick={() => handleVote(5)}>
                ★
              </span>
            </div>
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={handleComment}
              required
              className="comment-input"
              placeholder="Comparte detalles de tu experiencia en este lugar"
            />

            <button type="submit" className="votes-button">
              Enviar
            </button>
          </form>
          {message && <p className={status}>{message}</p>}
        </div>
      }
    </div>
  );
};

export default PostVotes;
