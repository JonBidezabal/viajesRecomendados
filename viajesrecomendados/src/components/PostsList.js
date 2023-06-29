import PostCard from "./PostCard"

const PostsList = ({ posts }) => {
  return (
    <ul className="posts-list">
      {posts?.data.map((post) => {
        return (
          <li key={post.place_id}>
            <PostCard post={post} />
          </li>
        )
      })}
    </ul>
  )
}
export default PostsList