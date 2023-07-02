import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { postVotes } from "../../services/index";
import "../../css/postVotes.css";

const PlaceVote = ({ id }) => {
  const [vote, setVote] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState(null);

  const { token } = useContext(UserContext);
  const handleVote = (vote) => {
    setVote(vote);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await postVotes(
        `${process.env.REACT_APP_BACKEND}/places/newvote/${id}`,
        vote,
        comment,
        token
      );

      console.log(response);
      setStatus(response.success);
      setMessage(response.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h3>Vota esta experiencia</h3>
      <form onSubmit={handleSubmit}>
        <div className="stars-container">
          <span
            className={1 <= vote ? "votation" : "emoji"}
            onClick={() => handleVote(1)}
          >
            ★
          </span>
          <span
            className={2 <= vote ? "votation" : "emoji"}
            onClick={() => handleVote(2)}
          >
            ★
          </span>
          <span
            className={3 <= vote ? "votation" : "emoji"}
            onClick={() => handleVote(3)}
          >
            ★
          </span>
          <span
            className={4 <= vote ? "votation" : "emoji"}
            onClick={() => handleVote(4)}
          >
            ★
          </span>
          <span
            className={5 <= vote ? "votation" : "emoji"}
            onClick={() => handleVote(5)}
          >
            ★
          </span>
        </div>

        <label htmlFor="comment">Comentario:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleComment}
          required
          className="comment-input"
        />

        <button type="submit" className="votes-button">
          Enviar
        </button>
      </form>
      {message && <div className={status}>{message}</div>}
    </div>
  );
};

export default PlaceVote;
