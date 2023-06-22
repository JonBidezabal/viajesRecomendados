import { useMostVoted } from "../hooks";
import PostsList from "../components/PostsList";

const MostVotedPage = () => {
  const info = useMostVoted()
  return (
    <main>
      <h2>Lugares con las mejores reseñas</h2>
      {info ? <PostsList posts={info.data} /> :
        <div> Cargando...</div>
      }
    </main>
  )
}

export default MostVotedPage;