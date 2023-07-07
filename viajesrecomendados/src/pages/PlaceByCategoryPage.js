import { useParams } from "react-router-dom"
import { useByCategory } from "../hooks/"
import PostsList from "../components/PostsList";
const PlaceByCategoryPage = () => {
  const { id } = useParams();
  const placesByCategory = useByCategory(id)

  if (!placesByCategory) return <div>Cargando..</div>
  if (!placesByCategory.data) return <div>No existen lugares en esta categoría</div>

  return (

    <main>
      <h2>Categoría {placesByCategory.data[0].category_name}</h2>
      <PostsList posts={placesByCategory} />
    </main>
  )
}

export default PlaceByCategoryPage;