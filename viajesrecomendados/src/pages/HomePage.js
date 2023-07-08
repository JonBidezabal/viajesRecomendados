import { useContext } from "react";
import Categories from "../components/homepage/Categories";
import { UserContext } from "../context/UserContext";
import "../css/HomePage.css";
import PostPlaceSection from "../components/PostPlaceSection";
import CategoriesSlider from "../components/homepage/CategoriesSlider";
import PostsListHeader from "../components/PostListHeader";
import MostVotedHeader from "../components/MostVotedHeader";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <main className="home-page">
      {user && <PostPlaceSection user={user} />}
      <section className="homepage-categories">
        <h2>¿No sabes por dónde comenzar?</h2>
        <h3>Explora nuestras categorías</h3>
        <Categories className="banner-categories" />
        {/* <CategoriesSlider /> */}
      </section>
      <section>
        <h2>Reseñas más recientes</h2>
        <h3>Descubre los siguientes lugares</h3>
        <PostsListHeader />
      </section>
      <section className="most-voted">
        <h2>Descubre las experiencias mejor valoradas</h2>
        <h3>Lugares con las mejores reseñas</h3>
        <MostVotedHeader />
      </section>
    </main>
  );
};

export default HomePage;
