import PostCard from "./PostCard"

const PostsList = ({ posts }) => {
  return (
    <ul className="posts-list">
      {posts?.map((post, i) => {
        <li key={i}><PostCard post={post} /></li>
      })}
    </ul>
  )
}
export default PostsList