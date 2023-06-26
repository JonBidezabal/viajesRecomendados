import PostsList from "../components/PostsList"
import { useAllPlaces } from "../hooks"

const HomePage = () => {
  const info = useAllPlaces()
  if (!info) return <div>Cargando...</div>
  if (info.status !== "ok") return <div>No se encontró ninguna experiencia</div>
  return (
    <main>
      <section className="list-all-places">
        <h2>Reseñas más recientes</h2>
        <h3>Descubre los siguientes lugares</h3>
        {info && <PostsList posts={info} />}
      </section>
    </main>
  )
  return (
    <p>HomePage</p>
  )
}

export default HomePage;