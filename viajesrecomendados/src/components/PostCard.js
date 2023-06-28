import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <>
      {/* <img src="%PUBLIC_URL%/api-logo.png" alt={`Foto de ${post.title}`} /> */}
      <Link to={`/places/${post.place_id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>
        {post.votes_average
          ? `${"⭐".repeat(post.votes_average)}${"☆".repeat(
              5 - post.votes_average
            )}`
          : "🤍".repeat(5)}
      </p>
    </>
  );
};

export default PostCard;
