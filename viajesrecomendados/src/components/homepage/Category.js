import "../../css/Category.css"
import { Link } from "react-router-dom";
import aventura from "../../img/aventura.jpg"
import cultura from "../../img/cultura.jpg"
import deportes from "../../img/deportes.jpg"
import relax from "../../img/relax.jpg"
import naturaleza from "../../img/naturaleza.jpg"
import romantico from "../../img/romantico.jpg"
import noPhoto from "../../img/placeholder_noPhoto.jpg"

function Category({ category }) {
  let catImage;
  switch (category.category_name) {
    case "Aventura":
      catImage = aventura;
      break;
    case "Cultura":
      catImage = cultura;
      break;
    case "Deportes":
      catImage = deportes;
      break;
    case "Relajación":
      catImage = relax;
      break;
    case "Naturaleza":
      catImage = naturaleza;
      break;
    case "Romántico":
      catImage = romantico;
      break;
    default:
      catImage = noPhoto;
      break;
  }
  return (
    <>
      <div className="post-card-category">
        <div>
          <Link to={`/places/category/${category.id}`} className="link-categories">
            <img src={`${catImage}`} alt={`Categoría ${category.category_name} - foto`} />
            <p title={category.category_name}>{category.category_name}</p>
          </Link>
        </div>
      </div >
    </>
  );
}
export default Category;
