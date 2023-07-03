import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <>
      <Link to={`/places/${post.place_id}`}>
        {post.photo && <img style={{ width: "500px" }} src={`${process.env.REACT_APP_BACKEND}/${post.photo}`} alt={`Foto de ${post.title}`} />}
        <h3 title="Ver este lugar">{post.title}</h3>
        <p>
          {post.votes_average
            ? `${"⭐".repeat(post.votes_average)}${"☆".repeat(
              5 - post.votes_average
            )}`
            : "No hay votos aún"}
        </p>
        {post.votes_qty &&
          <p>
            {post.votes_qty} {post.votes_qty === 1 ? "Voto" : "Votos"}
          </p>}
        {post.comments_qty &&
          <p>
            {post.votes_average && post.comments_qty} {post.comments_qty === 1 ? "Comentario" : "Comentarios"}
          </p>}
      </Link >
    </>
  );
};

export default PostCard;
