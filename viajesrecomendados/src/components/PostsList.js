import PostCard from "./PostCard"
import "../css/postsList.css";

const PostsList = ({ posts }) => {
  return (
    <ul className="posts-list-ul">
      {posts?.data.map((post) => {
        return (
          <li key={post.place_id} className="posts-list-li">
            <PostCard post={post} />
          </li>
        )
      })}
    </ul>
  )
}
export default PostsList