import { useContext } from "react";
import PostsList from "../components/PostsList";
import Categories from "../components/homepage/Categories";
import { useAllPlaces } from "../hooks";
import MostVotedPage from "./MostVotedPage";
import { UserContext } from "../context/UserContext";

import PostPlaceSection from "../components/PostPlaceSection";
import { HeaderContext } from "../context/HeaderContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const { hidelist } = useContext(HeaderContext);

  const info = useAllPlaces();
  if (!info) return <div>Cargando...</div>;
  if (info.status !== "ok")
    return <div>No se encontró ninguna experiencia</div>;
  return (
    <main onClick={hidelist}>
      {user && <PostPlaceSection user={user} />}
      <section className="most-voted">
        <h2>Descubre las experiencias mejor valoradas</h2>
        <MostVotedPage />
      </section>
      <section className="homepage-categories">
        <h2>Busca tu experiencia por categoría</h2>
        <Categories />
      </section>
      <section className="list-all-places">
        <h2>Reseñas más recientes</h2>
        <h3>Descubre los siguientes lugares</h3>
        {info && <PostsList posts={info} />}
      </section>
    </main>
  );
};

export default HomePage;
