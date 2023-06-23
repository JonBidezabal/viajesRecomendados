import PostCard from "./PostCard"

const PostsList = ({ posts }) => {
  return (
    <ul className="posts-list">
      {posts?.data.map((post, i) => {
        return (
          <li key={i}>
            <PostCard post={post} />
          </li>
        )
      })}
    </ul>
  )
}
export default PostsList