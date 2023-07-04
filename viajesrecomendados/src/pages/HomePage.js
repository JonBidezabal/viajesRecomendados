import { useContext } from "react";
import PostsList from "../components/PostsList";
import Categories from "../components/homepage/Categories";
import { useAllPlaces } from "../hooks";
import MostVotedPage from "./MostVotedPage";
import { UserContext } from "../context/UserContext";
import "../css/HomePage.css"
import PostPlaceSection from "../components/PostPlaceSection";
import { HeaderContext } from "../context/HeaderContext";
import CategoriesSlider from "../components/homepage/CategoriesSlider";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const { hidelist } = useContext(HeaderContext);

  const info = useAllPlaces();
  if (!info) return <div>Cargando...</div>;
  if (info.status !== "ok")
    return <div>No se encontró ninguna experiencia</div>;
  return (
    <main onClick={hidelist} className="home-page">
      {user && <PostPlaceSection user={user} />}
      <section className="homepage-categories">
        <h2>¿No sabes por dónde comenzar?</h2>
        <h3>Explora nuestras categorías</h3>
        <Categories />
        {/* <CategoriesSlider /> */}
      </section>
      <section className="list-all-places">
        <h2>Reseñas más recientes</h2>
        <h3>Descubre los siguientes lugares</h3>
        {info && <PostsList posts={info} />}
      </section>
      <section className="most-voted">
        <h2>Descubre las experiencias mejor valoradas</h2>
        <h3>Lugares con las mejores reseñas</h3>
        <MostVotedPage />
      </section>
    </main>
  );
};

export default HomePage;
