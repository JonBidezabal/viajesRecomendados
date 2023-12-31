import { Link } from "react-router-dom";
import "../css/postCard.css"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

const PostCard = ({ post }) => {
  return (
    <article className="post-card-section">
      <Link to={`/places/${post.place_id ? post.place_id : post.id}`}>
        {post.photo && <img src={`${process.env.REACT_APP_BACKEND}/${post.photo}`} alt={`Foto de ${post.title}`} />}
        <div>
          <h3 title="Ver este lugar">{post.title}</h3>
          <span>
            {post.votes_average &&
              [... new Array(5)].map((star, index) => {
                return (index < post.votes_average ? <AiFillStar color="#ffbd00" key={index} /> : <AiOutlineStar key={index} />)
              })
            }
          </span>
          {
            (post.votes_qty > 0) ?
              <span className="post-card-p">
                {`(${post.votes_qty} ${post.votes_qty === 1 ? "Voto" : "Votos"})`}
              </span> :
              <span className="post-card-p">
                {[... new Array(5)].map((star, index) => {
                  return (<AiOutlineStar key={index} />)
                })}
              </span>
          }
          {
            (post.comments_qty > 0) ?
              <p className="post-card-p">
                {post.votes_average && post.comments_qty} {post.comments_qty === 1 ? "Comentario" : "Comentarios"}
              </p> :
              <p className="post-card-p">
                Aún no hay comentarios
              </p>
          }
        </div>
      </Link >
    </article >
  );
};

export default PostCard;
