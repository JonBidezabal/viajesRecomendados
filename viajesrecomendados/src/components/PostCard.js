import { Link } from "react-router-dom";
import "../css/postCard.css"

const PostCard = ({ post }) => {
  return (
    <section className="post-card-section">
      <Link to={`/places/${post.place_id}`}>
        {post.photo && <img src={`${process.env.REACT_APP_BACKEND}/${post.photo}`} alt={`Foto de ${post.title}`} />}
        <div>
          <h3 title="Ver este lugar">{post.title}</h3>
          <span>
            {post.votes_average
              ? `${"⭐".repeat(post.votes_average)}${"☆".repeat(
                5 - post.votes_average
              )}`
              : "No hay votos aún"}
          </span>
          {
            post.votes_qty &&
            <span className="post-card-p">
              {`(${post.votes_qty} ${post.votes_qty === 1 ? "Voto" : "Votos"})`}
            </span>
          }
          {
            post.comments_qty &&
            <p className="post-card-p">
              {post.votes_average && post.comments_qty} {post.comments_qty === 1 ? "Comentario" : "Comentarios"}
            </p>
          }
        </div>
      </Link >
    </section >
  );
};

export default PostCard;
