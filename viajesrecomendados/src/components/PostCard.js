const PostCard = ({ post }) => {
  console.log(post);
  return (
    <>
      {/* <img src="%PUBLIC_URL%/api-logo.png" alt={`Foto de ${post.title}`} /> */}
      <h3>{post.title}</h3>
      <p>{post.votes_average ? "⭐".repeat(post.votes_average) : "No hay votos aún"}</p>
    </>
  )
}

export default PostCard