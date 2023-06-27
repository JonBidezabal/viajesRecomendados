import { Link } from "react-router-dom";

function Category({ category }) {
  return (
    <p>
      <Link to={`/places/category/${category.id}`} className="link-categories">
        {category.category_name}
      </Link>
    </p>
  );
}
export default Category;
