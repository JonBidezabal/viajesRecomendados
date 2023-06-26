const PostCard = ({ post }) => {
  return (
    <>
      {/* <img src="%PUBLIC_URL%/api-logo.png" alt={`Foto de ${post.title}`} /> */}
      <h3>{post.title}</h3>
      <p>{post.votes_average ? `${"⭐".repeat(post.votes_average)}${"☆".repeat(5 - post.votes_average)}` : "🤍".repeat(5)}</p>
    </>
  )
}

export default PostCard