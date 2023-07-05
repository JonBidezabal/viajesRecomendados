import { useAllPlaces } from "../../hooks/index";
import PostsList from "../PostsList";

const AllPlaces = () => {
  const info = useAllPlaces();
  if (!info) return <div>Cargando...</div>;
  if (info.status !== "ok")
    return <div>No se encontró ninguna experiencia</div>;
  return (
    <main>
      {info && <PostsList posts={info} />}
    </main>
  )
}

export default AllPlaces;