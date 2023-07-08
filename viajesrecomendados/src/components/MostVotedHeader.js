import { useMostVoted } from "../hooks";

import PostCard from "./PostCard";

const MostVotedHeader = () => {
  const info = useMostVoted();
  if (!info) return <div>Cargando...</div>;
  if (info.status !== "ok")
    return <div>No se encontró ninguna experiencia</div>;
  const posts = info.data.slice(0, 6);

  return (
    <section>
      <ul className="posts-list-ul">
        {posts?.map((post) => {
          return (
            <li
              key={post.place_id ? post.place_id : post.id}
              className="posts-list-li">
              <PostCard post={post} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default MostVotedHeader;
