import { useMostVoted } from "../hooks";
import PostsList from "../components/PostsList";

const MostVotedPage = () => {
  const info = useMostVoted()
  if (!info) return <div>Cargando...</div>
  if (info.status !== "ok") return <div>No se encontró ninguna experiencia</div>
  return (
    <main>
      {info && <PostsList posts={info} />
      }
    </main>
  )
}

export default MostVotedPage;