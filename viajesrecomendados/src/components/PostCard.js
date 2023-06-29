import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <>
      {post.photo && <img style={{ width: "500px" }} src={`${process.env.REACT_APP_BACKEND}/${post.photo}`} alt={`Foto de ${post.title}`} />}
      <Link to={`/places/${post.place_id}`}>
        <h3 title="Ver este lugar">{post.title}</h3>
      </Link>
      <p>
        {post.votes_average
          ? `${"⭐".repeat(post.votes_average)}${"☆".repeat(
            5 - post.votes_average
          )}`
          : "No hay votos aún"}
      </p>
    </>
  );
};

export default PostCard;
